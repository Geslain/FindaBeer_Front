/**
 * Created by Gess on 09/10/2016.
 */
import { Component, OnInit,} from '@angular/core';
import { Bar } from '../Model/bar';
import { BarService } from '../Services/bar.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: '../Template/barGet.component.html',
  styleUrls: ['../../app.component.css']
})

export class BarGetComponent {

  title : 'Liste de bieres ';
  bar : Bar;

  constructor(private barService : BarService,  private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.barService.getBar(id).subscribe(bar => this.bar = bar);
    });
  }
}
