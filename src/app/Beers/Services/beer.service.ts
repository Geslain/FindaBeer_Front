/**
 * Created by Gess on 09/10/2016.
 */
/**
 * Created by Gess on 09/10/2016.
 */
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable} from 'rxjs/Rx';
import { Beer } from '../Model/beer';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BeerService{
  constructor (private http: Http) {}

  private beersUrl = 'api/beers';

  getBeers() : Observable<Beer[]>{
    var data = this.http.get("api/beers").map((res:Response) => res.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    console.log(data);
    return data;
  }
}
