/**
 * Created by Gess on 09/10/2016.
 */
import { Component, OnInit,} from '@angular/core';
import { Beer } from '../Model/beer';
import { BeerService } from '../Services/beer.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: '../Template/beerGet.component.html',
  styleUrls: ['../../app.component.css']
})

export class BeerGetComponent {

  title : 'Liste de bieres ';
  beer : Beer;

  constructor(private beerService : BeerService,  private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.beerService.getBeer(id).subscribe(beer => this.beer = beer);
    });
  }
}
