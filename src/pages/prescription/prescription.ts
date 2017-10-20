import { Component } from '@angular/core';
$IMPORTSTATEMENT

/**
 * Generated class for the Prescription page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
$IONICPAGE
@Component({
  selector: 'page-prescription',
  templateUrl: 'prescription.html',
})
export class Prescription {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Prescription');
  }

}
