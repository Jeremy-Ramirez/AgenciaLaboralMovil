import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SesionEmpresaPage } from './sesion-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: SesionEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SesionEmpresaPageRoutingModule {}
