import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CarAddPage} from "../../addpage/pages/car-add/car-add";

@Component({
  selector: 'page-car-index',
  templateUrl: 'car-index.html'
})
export class CarIndexPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
  }
  public Add() {
    this.navCtrl.push(CarAddPage)
  }

}
