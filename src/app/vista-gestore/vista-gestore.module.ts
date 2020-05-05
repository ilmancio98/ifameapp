import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaGestorePageRoutingModule } from './vista-gestore-routing.module';

import { VistaGestorePage } from './vista-gestore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaGestorePageRoutingModule
  ],
  declarations: [VistaGestorePage]
})
export class VistaGestorePageModule {}
