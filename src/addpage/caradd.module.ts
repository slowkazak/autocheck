import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {CarAddPage} from "./pages/car-add/car-add";
import {ApiMaininfo} from "../providers/api-maininfo";
import {CarMainInfoPage} from "./pages/car-main-info/car-main-info";

@NgModule({
  declarations: [
    CarAddPage,
    CarMainInfoPage
  ],
  imports: [
    IonicModule.forRoot(CarAddPage, {}, {
      links: [
        {component: CarMainInfoPage, name: 'car', segment: 'car/maininfo/:catid'},
      ]
    })
  ],
  entryComponents: [
    CarAddPage,
    CarMainInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiMaininfo
  ]
})
export class CarAddModule {
}
