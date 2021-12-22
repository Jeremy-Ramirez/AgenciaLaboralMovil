import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms' ;
import { IonicModule } from '@ionic/angular';

import { ContraseniaEmpresaPageRoutingModule } from './contrasenia-empresa-routing.module';

import { ContraseniaEmpresaPage } from './contrasenia-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ContraseniaEmpresaPageRoutingModule
  ],
  declarations: [ContraseniaEmpresaPage]
})
export class ContraseniaEmpresaPageModule {}
