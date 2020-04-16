import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistraGestorePageRoutingModule } from './registra-gestore-routing.module';

import { RegistraGestorePage } from './registra-gestore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistraGestorePageRoutingModule
  ],
  declarations: [RegistraGestorePage]
})
export class RegistraGestorePageModule {}
