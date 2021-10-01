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
    return this.http.get('http://127.0.0.1:8000/api/tipopersona/')
  }
}
