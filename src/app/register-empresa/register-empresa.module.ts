import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReactiveFormsModule} from '@angular/forms' 
import { RegisterEmpresaPageRoutingModule } from './register-empresa-routing.module';

import { RegisterEmpresaPage } from './register-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegisterEmpresaPageRoutingModule
  ],
  declarations: [RegisterEmpresaPage]
})
export class RegisterEmpresaPageModule {}
