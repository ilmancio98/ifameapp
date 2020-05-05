import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-vista-gestore',
  templateUrl: './vista-gestore.page.html',
  styleUrls: ['./vista-gestore.page.scss'],
})
export class VistaGestorePage implements OnInit {

  constructor(private menu: MenuController) { }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  
  ngOnInit() {
  }

}
