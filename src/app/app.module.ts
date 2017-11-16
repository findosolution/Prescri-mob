import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AddPrescription } from '../pages/add-prescription/add-prescription';
import { Prescription } from '../pages/prescription/prescription';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { ForgetPassword } from '../pages/forget-password/forget-password';

import { Camera } from 'ionic-native';

import { PrescriptionService } from '../providers/prescription-service';
import { PharmacyService } from '../providers/pharmacy-service';

import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AddPrescription,
    Prescription,
    Login,
    Register,
    ForgetPassword
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AddPrescription,
    Prescription,
    Login,
    Register,
    ForgetPassword
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    PrescriptionService,
    PharmacyService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
