import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {  Camera } from 'ionic-native';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'page-add-prescription',
  templateUrl: 'add-prescription.html',
})
export class AddPrescription {

  base64Image;
  prescription = {
    pharmacy:''
  }

  pharmacies: Array<{id: string, name: string}>;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _DomSanitizer: DomSanitizer
  ) {
    this.pharmacies = [
      {"id":"001","name":"Lanka Pharmacy - Nugegoda"},
      {"id":"002","name":"Harcouts - Rajagiriya"},
      {"id":"003","name":"Health Guard - Nawala"}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPrescription');
  }

  takePicture(){
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      quality: 70,
      targetWidth: 640,
      targetHeight: 640,
      correctOrientation: true
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });
  }

}
