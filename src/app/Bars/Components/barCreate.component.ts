/**
 * Created by Gess on 09/10/2016.
 */
import { Component, OnInit} from '@angular/core';
import { Bar } from '../Model/bar';
import { BarService } from '../Services/bar.service';

@Component({
  selector: 'app-root',
  templateUrl: '../Template/barCreate.component.html',
  styleUrls: ['../../app.component.css'],
})

export class BarCreateComponent {

  title = 'Ajouter un bar';
  model = new Bar(0,"","","","","");

  constructor(private barService : BarService) {}

  onSubmit() {
    this.barService.createBar(this.model).subscribe(
      err => {
      // Log errors if any
      console.log(err);
    });
  }
}
