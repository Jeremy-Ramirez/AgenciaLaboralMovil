import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-empresa',
  templateUrl: './login-empresa.page.html',
  styleUrls: ['./login-empresa.page.scss'],
})
export class LoginEmpresaPage implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      correoelectronico: '',
      contrasenia: ''
    });
  }
  submit(): void {
    this.http.post('http://localhost:8000/api/loginempresa/', this.form.getRawValue(), {
      withCredentials: true
    }).subscribe((res: any)=>{
      this.router.navigate(['/sesion-empresa'])
      console.log(res.id)
    });
  }

}
