import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPrescription } from './add-prescription';

@NgModule({
  declarations: [
    AddPrescription,
  ],
  imports: [
    IonicPageModule.forChild(AddPrescription),
  ],
})
export class AddPrescriptionModule {}
