import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistraGestorePage } from './registra-gestore.page';

const routes: Routes = [
  {
    path: '',
    component: RegistraGestorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistraGestorePageRoutingModule {}
