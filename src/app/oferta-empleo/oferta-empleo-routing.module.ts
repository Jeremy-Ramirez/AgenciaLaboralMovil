import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfertaEmpleoPage } from './oferta-empleo.page';

const routes: Routes = [
  {
    path: '',
    component: OfertaEmpleoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertaEmpleoPageRoutingModule {}
