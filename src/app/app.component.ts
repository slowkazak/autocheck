import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {ApiMaininfo} from "../providers/api-maininfo";


@Component({
  templateUrl: 'app.html',
  providers: [ApiMaininfo]
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform,private ap:ApiMaininfo,statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      this.ap.GetCategories().then(res=>console.info(res));
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
