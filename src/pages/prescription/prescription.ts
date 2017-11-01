import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AddPrescription} from '../add-prescription/add-prescription';

@Component({
  selector: 'page-prescription',
  templateUrl: 'prescription.html',
})
export class Prescription {

  addPrescription = AddPrescription;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Prescription');
  }

}
