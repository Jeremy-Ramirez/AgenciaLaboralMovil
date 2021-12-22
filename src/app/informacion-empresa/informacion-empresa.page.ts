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
  tipopersonas: any;
  tipodocumentos: any;
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
  tipopersonaDesc ='';
  tipodocumentoDesc ='';
  constructor(
    private _tipoempresaService: TipoempresaService,
    private _tipodocumentoService: TipodocumentoService,
    private _tipopersonaService: TipopersonaService,
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
      this._tipodocumentoService.getTipodocumentos().subscribe((resp1:any)=>{
        this.tipodocumentos=resp1
        console.log(resp1)
        for(let i=0;i<this.tipodocumentos.length;i++){
          if(this.tipodocumentos[i].idtipodocumento==resp.tipodocumento_idtipodocumento){
            this.tipodocumentoDesc= this.tipodocumentos[i].descripcion;
          }
        }
        console.log(this.tipodocumentoDesc)

      });
      this._tipopersonaService.getTipopersonas().subscribe((resp2:any)=>{
        this.tipopersonas=resp2
        console.log(resp2)
        for(let i=0;i<this.tipopersonas.length;i++){
          if(this.tipopersonas[i].idtipopersona==resp.tipopersona_idtipopersona){
            this.tipopersonaDesc= this.tipopersonas[i].descripcion;
          }
        }
        console.log(this.tipopersonaDesc)

      });
      this.idempresa=resp.idempresa
      console.log(resp)
      },
      err => {
        Emitters.authEmitter.emit(false);
      });
  }
  
  formEmpresa = this.form.group({
    actividadeconomicas: ["", [Validators.required]],
    ramaactividads: ["", [Validators.required]],
    sectores: ["", [Validators.required]],
    provincias: ["", [Validators.required]],
    tipoempresas: ["", [Validators.required]],
    razonsocial:["",[Validators.required]],
    nombrecomercial: ["", [Validators.required]],
    calleprincipal: ["", [Validators.required]],
    callesecundaria: ["", [Validators.required]],
    mz: ["", [Validators.required]],
    villa: ["", [Validators.required]],
    referencia: ["", [Validators.required]],
    paginaweb: [""],
    ciudades: ["", Validators.required],
    celular:["",[Validators.required]],
    telefonooficina:["",[Validators.required]],
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
    
    window.location.reload()
  }

  get errorCtr() {
    return this.formEmpresa.controls;
  }

}
