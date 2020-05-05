import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Locals } from '../app/models/Locals';
import { IonicRestService } from './services/collegamento.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  locals: Locals[];//Stores the array of locals retrieved from the server
  error = '';
  success = '';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private ionicRestService: IonicRestService//Inject the car service dependency
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.getLocals();//Call method
    });
  }
  //Subscribers to the data that comes from the service
  getLocals(): void {
    this.ionicRestService.getAll().subscribe(
      (res: Locals[]) => {
        this.locals = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
  
}
