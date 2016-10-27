import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule,ApplicationRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule   } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { BeerListComponent } from './Beers/Components/beerList.component';
import { BeerCreateComponent } from './Beers/Components/beerCreate.component';
import { BarListComponent } from './Bars/Components/barList.component';
import { BarCreateComponent } from './Bars/Components/barCreate.component';
import { HomeComponent } from './Home/home.component';

import { BeerService } from './Beers/Services/beer.service';
import { BarService } from './Bars/Services/bar.service';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerCreateComponent,
    BarListComponent,
    BarCreateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDFhuPISBr93tC5yh_AX3DDuNpYPfwCGIo',
      libraries: ['places']
    }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'beers', component: BeerListComponent },
      { path: 'beers/add', component: BeerCreateComponent },
      { path: 'bars', component: BarListComponent },
      { path: 'bars/add', component: BarCreateComponent }
    ])
  ],
  providers: [BeerService,BarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
