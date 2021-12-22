import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfertaEmpleoPageRoutingModule } from './oferta-empleo-routing.module';

import { OfertaEmpleoPage } from './oferta-empleo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertaEmpleoPageRoutingModule
  ],
  declarations: [OfertaEmpleoPage]
})
export class OfertaEmpleoPageModule {}
