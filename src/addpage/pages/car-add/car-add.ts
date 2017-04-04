import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ApiMaininfo} from "../../../providers/api-maininfo";

import _ from "lodash";
import {CarMainInfoPage} from "../car-main-info/car-main-info";

@Component({
  selector: 'page-car-add',
  templateUrl: 'car-add.html'
})
export class CarAddPage {
  private excludeids = [3, 4, 5, 6, 7, 8, 9];
  private items: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private maininfoapi: ApiMaininfo) {
  }

  ionViewWillLoad() {
    this.GetCategories()
  }

  private GetCategories() {
    this.maininfoapi.GetCategories().then(res => {
      !_.isEmpty(res) ? _.forEach(res, (item: any) => {
        _.has(item, "value") ? (
          item.pic = "assets/img/" + item.value + ".png",
            _.indexOf(this.excludeids, item.value) > -1 ? true : this.items.push(item)
        ) : false;
      }) : false;
    }).catch(err => {
      console.error("Невозможно получить категории")
    });
  }
  ApplyMainInfo(catid){
    this.navCtrl.push(CarMainInfoPage,catid)
  }

}
