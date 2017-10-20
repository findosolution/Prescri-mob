import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Array<{id: string, pharmacy: string, date: Date}>;

  constructor(public navCtrl: NavController) {
    this.items = [
      {"id":"001","pharmacy":"Health Guard","date" : new Date()},
      {"id":"002","pharmacy":"Harcouts","date" : new Date()}
    ];
  }

}
