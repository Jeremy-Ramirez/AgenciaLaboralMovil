import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterEmpresaPageRoutingModule } from './register-empresa-routing.module';

import { RegisterEmpresaPage } from './register-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterEmpresaPageRoutingModule
  ],
  declarations: [RegisterEmpresaPage]
})
export class RegisterEmpresaPageModule {}
