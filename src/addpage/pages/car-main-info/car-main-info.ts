import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ApiMaininfo} from "../../../providers/api-maininfo";

@Component({
  selector: 'page-car-main-info',
  templateUrl: 'car-main-info.html'
})
export class CarMainInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private maininfoapi: ApiMaininfo) {}

  ionViewDidLoad() {
    this.GetMarks()
  }
  GetMarks(id =this.navParams.data){
    this.maininfoapi.GetMarks(id).then(res=>{console.info(res)}).catch(err=>{console.error(err)});
  }

}
