import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReactiveFormsModule} from '@angular/forms' ;
import { InformacionEmpresaPageRoutingModule } from './informacion-empresa-routing.module';

import { InformacionEmpresaPage } from './informacion-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    ReactiveFormsModule,
    InformacionEmpresaPageRoutingModule
  ],
  declarations: [InformacionEmpresaPage]
})
export class InformacionEmpresaPageModule {}
