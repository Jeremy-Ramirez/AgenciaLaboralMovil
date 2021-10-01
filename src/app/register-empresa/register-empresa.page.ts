import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

@Component({
  selector: 'app-register-empresa',
  templateUrl: './register-empresa.page.html',
  styleUrls: ['./register-empresa.page.scss'],
})
export class RegisterEmpresaPage implements OnInit {
  tipopersonas:any[]=[]; 
  tipodocumentos:any[]=[];
  tipoempresas:any[]=[];
  ramaactividads:any[]=[];
  actividadeconomicas:any[]=[];
  ciudades:any[]=[];
  provincias: any[]=[];
  sectores: any[]=[];
  empresas: any []=[];
  new_empresa: any []=[];
  
  constructor(
    private _tipodocumentoService: TipodocumentoService,
    private _tipopersonaService: TipopersonaService,
    private _tipoempresaService: TipoempresaService,
    private _ramaactividadService: RamaactividadService,
    private _actividadeconomicaService: ActividadeconomicaService,
    private _ciudadService: CiudadService,
    private _provinciaService: ProvinciaService,
    private _sectorService: SectorService,
    private _empresaService: EmpresaService,
    ) { 
      
  }
  
  ngOnInit() {
    this._tipodocumentoService.getTipodocumentos().subscribe((resp:any)=>{
      this.tipodocumentos=resp
      console.log(resp)

    });
    this._tipopersonaService.getTipopersonas().subscribe((resp:any)=>{
      this.tipopersonas=resp
      console.log(resp)

    });
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
    
  }
}
