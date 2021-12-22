import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContraseniaEmpresaPage } from './contrasenia-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: ContraseniaEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContraseniaEmpresaPageRoutingModule {}
