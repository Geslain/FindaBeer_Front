/**
 * Created by Gess on 09/10/2016.
 */
import { Component} from '@angular/core';
import { Beer } from '../Model/beer';
import { BeerService } from '../Services/beer.service';

@Component({
  selector: 'app-root',
  templateUrl: '../Template/beerCreate.component.html',
  styleUrls: ['../../app.component.css'],
})

export class BeerCreateComponent {

  title = 'Ajouter une bière';
  type = ['blonde', 'brune', 'rousse','ambrée'];
  myType = this.type[0];
  model = new Beer(0,"","","");

  constructor(private beerService : BeerService) {}

  onSubmit() {
    this.beerService.createBeer(this.model).subscribe(
      err => {
      // Log errors if any
      console.log(err);
    });
  }
}
