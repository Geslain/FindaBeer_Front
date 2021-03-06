/**
 * Created by Gess on 09/10/2016.
 */
import {Component} from '@angular/core';
import {Bar} from '../Model/bar';
import {BarService} from '../Services/bar.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BeerService} from "../../Beers/Services/beer.service";

@Component({
  selector: 'app-root',
  templateUrl: '../Template/barEdit.component.html',
  styleUrls: ['../Style/bar.component.css'],
})
export class BarEditComponent {

  title = 'Modifier un bar';
  bar: Bar;
  beers = [];
  selectedBeerId;
  priceBeer;

  constructor(private barService: BarService, private beerService: BeerService, private route: ActivatedRoute, private router : Router) {
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
    this.bar.beerBar = [];
    this.barService.updateBar(this.bar).subscribe(
      err => {
        // Log errors if any
        console.log(err);
      });
    this.router.navigate(["/bars/" + this.bar.id]);
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
    location.reload();
  }

  onPriceChange(value) {
    this.priceBeer = value;
  }
}
