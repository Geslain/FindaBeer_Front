/**
 * Created by Gess on 09/10/2016.
 */
import { Component, OnInit,} from '@angular/core';
import { Beer } from '../Model/beer';
import { BeerService } from '../Services/beer.service';

@Component({
  selector: 'app-root',
  templateUrl: '../Template/beerList.component.html',
  styleUrls: ['../Style/beer.component.css']
})

export class BeerListComponent implements OnInit{

  title : 'Liste de bieres ';
  beers : Beer[];

  constructor(private beerService: BeerService) {}

  ngOnInit() {
    // Load comments
    this.loadBeers()
  }

  loadBeers() {
    // Get all comments
    this.beerService.getBeers()
      .subscribe(
        beers => {this.beers = beers; console.log(beers)}, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
  }
}
