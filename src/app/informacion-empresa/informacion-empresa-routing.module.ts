import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionEmpresaPage } from './informacion-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionEmpresaPageRoutingModule {}
