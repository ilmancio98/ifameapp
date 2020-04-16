import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SceltaUtentePage } from './scelta-utente.page';

const routes: Routes = [
  {
    path: '',
    component: SceltaUtentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceltaUtentePageRoutingModule {}
