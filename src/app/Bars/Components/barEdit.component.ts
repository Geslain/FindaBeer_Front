/**
 * Created by Gess on 09/10/2016.
 */
import {Component} from '@angular/core';
import {Bar} from '../Model/bar';
import {BarService} from '../Services/bar.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Beer} from "../../Beers/Model/beer";
import {BeerService} from "../../Beers/Services/beer.service";
import {isUndefined} from "util";

@Component({
  selector: 'app-root',
  templateUrl: '../Template/barEdit.component.html',
  styleUrls: ['../Style/bar.component.css'],
})
export class BarEditComponent {

  title = 'Modifier une bière';
  bar: Bar;
  beers = [];
  selectedBeerId;
  priceBeer;

  constructor(private barService: BarService, private beerService: BeerService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.barService.getBar(id).subscribe(bar => this.bar = bar);
    });

    this.beerService.getBeers()
      .subscribe(beers => {
          this.beers = beers;
          if (this.beers.length != 0) {
            this.selectedBeerId = this.beers[0].id;
          }
        }
      );
  }

  onSubmit() {
    this.barService.updateBar(this.bar).subscribe(
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  onDeleteBeer(beer) {
    document.getElementById("beer_" + beer).remove();
    this.barService.removeBeerBar(this.bar, beer).subscribe(
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  updateSelectedValue(event): void {
    this.selectedBeerId = event;
  }

  addBeer(): void {
    this.barService.addBeerBar(this.bar, this.selectedBeerId, this.priceBeer).subscribe(
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  onPriceChange(value) {
    this.priceBeer = value;
  }
}
