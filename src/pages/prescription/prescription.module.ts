import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Prescription } from './prescription';

@NgModule({
  declarations: [
    Prescription,
  ],
  imports: [
    IonicPageModule.forChild(Prescription),
  ],
})
export class PrescriptionModule {}
