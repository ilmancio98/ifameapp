import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistraClientePageRoutingModule } from './registra-cliente-routing.module';

import { RegistraClientePage } from './registra-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistraClientePageRoutingModule
  ],
  declarations: [RegistraClientePage]
})
export class RegistraClientePageModule {}
