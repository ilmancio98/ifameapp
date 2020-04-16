import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistraClientePage } from './registra-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: RegistraClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistraClientePageRoutingModule {}
