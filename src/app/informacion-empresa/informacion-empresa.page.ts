import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {TipodocumentoService} from '../servicios/tipodocumento.service'
import {TipopersonaService} from '../servicios/tipopersona.service'
import {TipoempresaService} from '../servicios/tipoempresa.service'
import {RamaactividadService} from '../servicios/ramaactividad.service'
import {ActividadeconomicaService} from '../servicios/actividadeconomica.service'
import {CiudadService} from '../servicios/ciudad.service'
import {ProvinciaService} from '../servicios/provincia.service'
import {SectorService} from '../servicios/sector.service'
import {EmpresaService} from '../servicios/empresa.service'
import {throwError} from 'rxjs';

import { HttpClient } from '@angular/common/http';
import {Emitters} from '../emitters/emitters';
@Component({
  selector: 'app-informacion-empresa',
  templateUrl: './informacion-empresa.page.html',
  styleUrls: ['./informacion-empresa.page.scss'],
})
export class InformacionEmpresaPage implements OnInit {
  tipopersonas=""; 
  tipodocumentos= "";
  tipoempresas:any[]=[];
  ramaactividads:any[]=[];
  actividadeconomicas:any[]=[];
  ciudades:any[]=[];
  provincias: any[]=[];
  sectores: any[]=[];
  empresas: any []=[];
  new_empresa: any []=[];
  ruc_cedula='';
  idempresa = '';
  constructor(
    private _tipoempresaService: TipoempresaService,
    private _ramaactividadService: RamaactividadService,
    private _actividadeconomicaService: ActividadeconomicaService,
    private _ciudadService: CiudadService,
    private _provinciaService: ProvinciaService,
    private _sectorService: SectorService,
    private _empresaService: EmpresaService,
    private form: FormBuilder,
    private httpClient:HttpClient
    ) { 
      
  }
  
  ngOnInit() {
    this._tipoempresaService.getTipoempresas().subscribe((resp:any)=>{
      this.tipoempresas=resp
      console.log(resp)

    });
    this._ramaactividadService.getRamaactividads().subscribe((resp:any)=>{
      this.ramaactividads=resp
      console.log(resp)

    });
    this._actividadeconomicaService.getActividadeconomicas().subscribe((resp:any)=>{
      this.actividadeconomicas=resp
      console.log(resp)

    });
    this._ciudadService.getCiudades().subscribe((resp:any)=>{
      this.ciudades=resp
      console.log(resp)

    });
    this._provinciaService.getProvincias().subscribe((resp:any)=>{
      this.provincias=resp
      console.log(resp)

    });
    this._sectorService.getSector().subscribe((resp:any)=>{
      this.sectores=resp
      console.log(resp)
    });
    this._empresaService.loginEmpresa().subscribe((resp:any)=>{
      Emitters.authEmitter.emit(true);
      this.ruc_cedula=resp.ruc_cedula
      this.tipopersonas=resp.tipopersona_idtipopersona.descripcion
      this.tipodocumentos=resp.tipodocumento_idtipodocumento.descripcion
      this.idempresa=resp.idempresa
      console.log(resp)  
      },
      err => {
        Emitters.authEmitter.emit(false);
      });
  }

  formEmpresa = this.form.group({
    tipodocumentos: ["", Validators.required],
    actividadeconomicas: ["", Validators.required],
    ramaactividads: ["", Validators.required],
    sectores: ["", Validators.required],
    provincias: ["", Validators.required],
    tipoempresas: ["", Validators.required],
    tipopersonas: ["", Validators.required],
    ruc_cedula:["", [Validators.required, Validators.minLength(10)]],
    razonsocial:["",[Validators.required]],
    nombrecomercial: ["", [Validators.required]],
    calleprincipal: ["", [Validators.required]],
    callesecundaria: ["", [Validators.required]],
    mz: ["", [Validators.required]],
    villa: ["", [Validators.required]],
    referencia: ["", [Validators.required]],
    paginaweb: ["", [Validators.required]],
    ciudades: ["", Validators.required],
    correoelectronico:["",[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,3}$")]],
    celular:["",[Validators.required,Validators.minLength(10)]],
    telefonooficina:["",[Validators.required,Validators.minLength(10)]],
    contrasenia:["", [Validators.required]],
  })

  guardar(){
    if(this.formEmpresa.invalid) {
      return Object.values(this.formEmpresa.controls).forEach(control=>{
        control.markAsTouched();
      })
    }
  
      console.log(this.formEmpresa.value);
      this.httpClient.put('https://agencialaboralproyecto.pythonanywhere.com/api/empresas/'+this.idempresa, this.formEmpresa.value).subscribe(
        resp => console.log(resp),
        err => console.log(err)
  
      )
    
    
    alert('Se han guardado los cambios')
  }
  
  get errorCtr() {
    return this.formEmpresa.controls;
  }

}
