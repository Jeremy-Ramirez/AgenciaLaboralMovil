import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilEmpresaPageRoutingModule } from './perfil-empresa-routing.module';

import { ReactiveFormsModule} from '@angular/forms' ;
import { PerfilEmpresaPage } from './perfil-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilEmpresaPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [PerfilEmpresaPage]
})
export class PerfilEmpresaPageModule {}
