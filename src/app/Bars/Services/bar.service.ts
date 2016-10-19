/**
 * Created by Gess on 09/10/2016.
 */
/**
 * Created by Gess on 09/10/2016.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable} from 'rxjs/Rx';
import { Bar } from '../Model/bar';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BarService{
  constructor (private http: Http) {}

  private barsUrl = 'api/bars';

  getBars() : Observable<Bar[]>{
    var data = this.http.get("api/bars").map((res:Response) => res.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    return data;
  }

  createBar(bar : Bar): Observable<Bar> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.barsUrl , JSON.stringify(bar), {
      headers: headers
    })
      .map((res: Response) => {
        return res.json();
      })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
