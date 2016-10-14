/**
 * Created by Gess on 09/10/2016.
 */
import { Component, OnInit,} from '@angular/core';
import { Bar } from '../Model/bar';
import { BarService } from '../Services/bar.service';

@Component({
  selector: 'app-root',
  templateUrl: '../Template/bar.component.html',
  styleUrls: ['../../app.component.css']
})

export class BarComponent implements OnInit{

  title : 'Liste de bars ';
  bars : Bar[];

  constructor(private barService: BarService) {}

  ngOnInit() {
    // Load comments
    this.loadBars()
  }

  loadBars() {
    // Get all comments
    this.barService.getBars()
      .subscribe(
        bars => this.bars = bars, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
  }
}
