import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipopersonaService {

  constructor(private http:HttpClient) { 
    this.getTipopersonas();
  }
  
  getTipopersonas(){
    return this.http.get('https://agencialaboralproyecto.pythonanywhere.com/api/tipopersona/')
  }
}
