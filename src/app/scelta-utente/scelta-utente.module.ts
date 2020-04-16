import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SceltaUtentePageRoutingModule } from './scelta-utente-routing.module';

import { SceltaUtentePage } from './scelta-utente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SceltaUtentePageRoutingModule
  ],
  declarations: [SceltaUtentePage]
})
export class SceltaUtentePageModule {}
