import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor(private httpClient:HttpClient) { 
    this.getProvincias();
  }
  
  getProvincias(){
    return this.httpClient.get('http://127.0.0.1:8000/api/provincias/')
  }
}
