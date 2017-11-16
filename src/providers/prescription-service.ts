import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PrescriptionService {

  baseUrl = '';

  constructor(
    public http: Http,
    ) {
    console.log('Hello PrescriptionService Provider');
  }

  public loadPrescriptions() {
    return Observable.create(observer => {
      this.http.get(this.baseUrl).map(res => res.json()).subscribe( data => {
        observer.next(data);
        observer.complete();
      });
    });
  }

  public mock_loadPrescriptions() {
    let items = [
      {"id":"PRE00001","pharmacy":"Health Guard - Nawala","date" : new Date(), "status":"2"}, //completed
      {"id":"PRE00002","pharmacy":"Harcouts - Rajagiriya","date" : new Date(), "status":"1"}, //pending
      {"id":"PRE00003","pharmacy":"Lanka Phama - Nugegoda","date" : new Date(), "status":"3"} //rejected
    ];
    return Observable.create(observer => {
      observer.next(items);
      observer.complete();
    });
  }


}
