/**
 * Created by Gess on 09/10/2016.
 */
import {Component, OnInit} from '@angular/core';
import { Beer } from '../Model/beer';
import { BeerService } from '../Services/beer.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: '../Template/beerEdit.component.html',
  styleUrls: ['../../app.component.css'],
})
export class BeerEditComponent implements OnInit{

  title = 'Modifier une bière';
  beer : Beer ;

  constructor(private beerService : BeerService,  private route: ActivatedRoute) {}

  onSubmit() {
    // this.beerService.updateBeer(this.model).subscribe(
    //   err => {
    //     // Log errors if any
    //     console.log(err);
    //   });
  }


  ngOnInit() {

    this.loadBeer();
  }

  loadBeer () {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.beerService.getBeer(id)
        .then(beer => {
          this.beer = beer;
          console.log(this.beer)
        });
    });
  }

}
