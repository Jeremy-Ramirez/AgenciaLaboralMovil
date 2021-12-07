import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {Emitters} from '../emitters/emitters';
import { map, shareReplay } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-sesion-empresa',
  templateUrl: './sesion-empresa.page.html',
  styleUrls: ['./sesion-empresa.page.scss'],
})
export class SesionEmpresaPage {
  authenticated = false;
  

  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
  }

  logout(): void {
    this.http.post('https://agencialaboralproyecto.pythonanywhere.com/api/logoutempresa/', {}, {withCredentials: true})
      .subscribe(() => this.authenticated = false);
  }


}
