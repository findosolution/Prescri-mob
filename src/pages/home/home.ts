import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AddPrescription} from '../add-prescription/add-prescription';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Array<{id: string, pharmacy: string, date: Date, status: string}>;

  addPrescription = AddPrescription;

  statusColors = {
    1:'light',
    2:'secondary',
    3:'danger'
  };

  constructor(public navCtrl: NavController) {
    this.items = [
      {"id":"PRE00001","pharmacy":"Health Guard - Nawala","date" : new Date(), "status":"2"}, //completed
      {"id":"PRE00002","pharmacy":"Harcouts - Rajagiriya","date" : new Date(), "status":"1"}, //pending
      {"id":"PRE00003","pharmacy":"Lanka Phama - Nugegoda","date" : new Date(), "status":"3"} //rejected
    ];
  }

}
