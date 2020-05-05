import { Component, OnInit } from '@angular/core';
import {IonicRestService} from '../services/collegamento.service';
import { Locals } from '../models/locals';
import { Observable } from 'rxjs';
import { Local } from 'protractor/built/driverProviders';


@Component({
  selector: 'app-vista-cliente',
  templateUrl: './vista-cliente.page.html',
  styleUrls: ['./vista-cliente.page.scss'],
})
export class VistaClientePage implements OnInit {

  constructor( private local: Observable<Locals[]>, private collegamentoService: IonicRestService) { }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);

  }


  ngOnInit() { 
     this.local = this.collegamentoService.getAll() ;
    console.log(this.local);
  }
}
