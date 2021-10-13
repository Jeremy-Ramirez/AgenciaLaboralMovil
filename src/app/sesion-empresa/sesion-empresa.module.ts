import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SesionEmpresaPageRoutingModule } from './sesion-empresa-routing.module';

import { SesionEmpresaPage } from './sesion-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SesionEmpresaPageRoutingModule
  ],
  declarations: [SesionEmpresaPage]
})
export class SesionEmpresaPageModule {}
