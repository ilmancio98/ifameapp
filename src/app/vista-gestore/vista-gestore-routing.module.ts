import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaGestorePage } from './vista-gestore.page';

const routes: Routes = [
  {
    path: '',
    component: VistaGestorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaGestorePageRoutingModule {}
