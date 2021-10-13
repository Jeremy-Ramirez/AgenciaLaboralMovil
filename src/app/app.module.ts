import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import {TipodocumentoService} from './servicios/tipodocumento.service';
import {TipoempresaService} from './servicios/tipoempresa.service';
import {TipopersonaService} from './servicios/tipopersona.service';
import {GeneroService} from './servicios/genero.service';
import {RamaactividadService} from './servicios/ramaactividad.service';
import {ProvinciaService} from './servicios/provincia.service';
import {EmpresaService} from './servicios/empresa.service';
import {ActividadeconomicaService} from './servicios/actividadeconomica.service';
import {CiudadService} from './servicios/ciudad.service';
import {SectorService} from './servicios/sector.service';
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [TipodocumentoService,
    TipopersonaService,
    GeneroService,
    TipoempresaService,
    RamaactividadService,
    ProvinciaService,
    ActividadeconomicaService,
    CiudadService,
    EmpresaService,
    SectorService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
