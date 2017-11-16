import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PharmacyService {

  baseUrl = '';

  constructor(public http: Http) {
    console.log('Hello PharmacyService Provider');
  }

  public loadPharmacies() {
    return Observable.create(observer => {
      this.http.get(this.baseUrl).map(res => res.json()).subscribe( data => {
        observer.next(data);
        observer.complete();
      });
    });
  }

  public mock_loadPharmacies() {
    let items = [
      {"id":"001","name":"Lanka Pharmacy - Nugegoda"},
      {"id":"002","name":"Harcouts - Rajagiriya"},
      {"id":"003","name":"Health Guard - Nawala"}
    ];
    return Observable.create(observer => {
      observer.next(items);
      observer.complete();
    });
  }

}
