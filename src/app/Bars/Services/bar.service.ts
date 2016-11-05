/**
 * Created by Gess on 09/10/2016.
 */
/**
 * Created by Gess on 09/10/2016.
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Bar} from '../Model/bar';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Beer} from "../../Beers/Model/beer";

@Injectable()
export class BarService {
  constructor(private http: Http) {
  }

  private barsUrl = 'api/bars';

  getBars(): Observable<Bar[]> {
    var data = this.http.get("api/bars").map((res: Response) => res.json()).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    return data;
  }

  getBar(id: number): Observable<Bar> {
    var data = this.http.get("api/bars/" + id).map((res: Response) => res.json()).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    return data;
  }

  createBar(bar: Bar): Observable<Bar> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.barsUrl, JSON.stringify(bar), {
      headers: headers
    })
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateBar(bar: Bar): Observable<Bar> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .put(this.barsUrl + "/" + bar.id, JSON.stringify(bar), {headers: headers})
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  addBeerBar(bar: Bar, beer, price): Observable<Bar> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .put(this.barsUrl + "/" + bar.id + "/beers/" + beer, { "price" : price},headers)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  removeBeerBar(bar: Bar, beer): Observable<Bar> {
    return this.http
      .delete(this.barsUrl + "/" + bar.id + "/beers/" + beer)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
