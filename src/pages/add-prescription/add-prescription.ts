import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {  Camera } from 'ionic-native';
import {DomSanitizer} from '@angular/platform-browser';
import { PrescriptionService } from '../../providers/prescription-service';
import { PharmacyService } from '../../providers/pharmacy-service';


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
    private _DomSanitizer: DomSanitizer,
    private prescriptionService: PrescriptionService,
    private pharmacyService : PharmacyService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPrescription');
    this.loadPharmacies();
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


  loadPharmacies(){
    this.pharmacyService.mock_loadPharmacies().subscribe( pharmacies => {
      this.pharmacies = pharmacies;
    });
  }

}
