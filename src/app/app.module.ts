import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule   } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BeerListComponent } from './Beers/Components/beerList.component';
import { BeerEditComponent } from './Beers/Components/beerEdit.component';
import { BeerGetComponent } from './Beers/Components/beerGet.component';
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
    BeerEditComponent,
    BeerGetComponent,
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
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'beers', component: BeerListComponent },
      { path: 'beers/add', component: BeerCreateComponent },
      { path: 'bars', component: BarListComponent },
      { path: 'bars/add', component: BarCreateComponent },
      { path: 'beers/:id', component: BeerGetComponent },
      { path: 'beers/:id/update', component: BeerEditComponent }
    ])
  ],
  providers: [BeerService,BarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
