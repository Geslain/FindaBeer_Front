/**
 * Created by Gess on 09/10/2016.
 */
import {Component} from '@angular/core';
import { Beer } from '../Model/beer';
import { BeerService } from '../Services/beer.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: '../Template/beerEdit.component.html',
  styleUrls: ['../../app.component.css'],
})
export class BeerEditComponent{

  title = 'Modifier une bière';
  type = ['Blonde', 'Brune', 'Rousse','Ambrée'];
  beer : Beer;

  constructor(private beerService : BeerService,  private route: ActivatedRoute, private router : Router) {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.beerService.getBeer(id).subscribe(beer => this.beer = beer);
    });
  }

  onSubmit() {
    this.beerService.updateBeer(this.beer).subscribe(
      err => {
        // Log errors if any
        console.log(err);
      });
    this.router.navigate(["/beers/" + this.beer.id]);
  }
}
