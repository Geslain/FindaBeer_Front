import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule,ApplicationRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule   } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { BeerListComponent } from './Beers/Components/beerList.component';
import { BeerEditComponent } from './Beers/Components/beerEdit.component';
import { BeerGetComponent } from './Beers/Components/beerGet.component';
import { BeerCreateComponent } from './Beers/Components/beerCreate.component';
import { BarListComponent } from './Bars/Components/barList.component';
import { BarCreateComponent } from './Bars/Components/barCreate.component';
import { BarEditComponent } from './Bars/Components/barEdit.component';
import { BarGetComponent } from './Bars/Components/barGet.component';
import { HomeComponent } from './Home/home.component';

import { BeerService } from './Beers/Services/beer.service';
import { BarService } from './Bars/Services/bar.service';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerEditComponent,
    BeerGetComponent,
    BeerCreateComponent,
    BarListComponent,
    BarCreateComponent,
    BarEditComponent,
    BarGetComponent,
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
      { path: 'bars/add', component: BarCreateComponent },
      { path: 'beers/:id', component: BeerGetComponent },
      { path: 'beers/:id/update', component: BeerEditComponent },
      { path: 'bars/:id', component: BarGetComponent },
      { path: 'bars/:id/update', component: BarEditComponent }
    ])
  ],
  providers: [BeerService,BarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
