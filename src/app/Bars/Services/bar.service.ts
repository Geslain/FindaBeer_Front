/**
 * Created by Gess on 09/10/2016.
 */
/**
 * Created by Gess on 09/10/2016.
 */
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable} from 'rxjs/Rx';
import { Bar } from '../Model/bar';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BarService{
  constructor (private http: Http) {}

  private beersUrl = 'api/bars';

  getBars() : Observable<Bar[]>{
    var data = this.http.get("api/bars").map((res:Response) => res.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    return data;
  }
}
