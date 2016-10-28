/**
 * Created by Gess on 09/10/2016.
 */
import {Component} from '@angular/core';
import { Bar } from '../Model/bar';
import { BarService } from '../Services/bar.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: '../Template/barEdit.component.html',
  styleUrls: ['../../app.component.css'],
})
export class BarEditComponent{

  title = 'Modifier une bière';
  bar : Bar;

  constructor(private barService : BarService,  private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.barService.getBar(id).subscribe(bar => this.bar = bar);
    });
  }

  onSubmit() {
    this.barService.updateBar(this.bar).subscribe(
      err => {
        // Log errors if any
        console.log(err);
      });
  }
}
