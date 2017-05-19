import { Http } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
  constructor(public http : Http) {
  }
  getdata(url:any) {
    return this.http.get(url).map(function(response) {
      return response.json()
    })
  }
}
