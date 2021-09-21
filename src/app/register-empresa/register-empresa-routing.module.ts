import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterEmpresaPage } from './register-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterEmpresaPageRoutingModule {}
