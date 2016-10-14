import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BeerComponent } from './Beers/Components/beer.component';
import { BarComponent } from './Bars/Components/bar.component';
import { HomeComponent } from './Home/home.component';

import { BeerService } from './Beers/Services/beer.service';
import { BarService } from './Bars/Services/bar.service';

@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    BarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'beers', component: BeerComponent },
      { path: 'bars', component: BarComponent }
    ])
  ],
  providers: [BeerService,BarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
