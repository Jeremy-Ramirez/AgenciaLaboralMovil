import { Component, OnInit } from '@angular/core';

import {Emitters} from '../emitters/emitters';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {EmpresaService} from '../servicios/empresa.service'
@Component({
  selector: 'app-contrasenia-empresa',
  templateUrl: './contrasenia-empresa.page.html',
  styleUrls: ['./contrasenia-empresa.page.scss'],
})
export class ContraseniaEmpresaPage implements OnInit {
  repite_password:string;
  ruc_cedula='';
  idempresa = '';
  constructor(
   
    private _empresaService: EmpresaService,
    private form: FormBuilder,
    private httpClient:HttpClient
    ) { 
      
  }
  
  ngOnInit() {
    
    this._empresaService.loginEmpresa().subscribe((resp:any)=>{
      Emitters.authEmitter.emit(true);
      this.ruc_cedula=resp.ruc_cedula
      this.idempresa=resp.idempresa
      console.log(resp)  
      },
      err => {
        Emitters.authEmitter.emit(false);
      });
  }

  formEmpresa = this.form.group({
   contrasenia:["", [Validators.required]],
  })

  
  guardar(){
    //console.log(this.repite_password);
    if (this.formEmpresa.get('contrasenia').value == this.repite_password) {
      
      //console.log('Password do not Match');
      
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
    }else{   
      alert('Las contraseñas no son iguales')
    }

    }

}
