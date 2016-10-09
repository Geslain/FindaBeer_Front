import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BeerComponent } from './Beers/Components/beer.component';
import { HomeComponent } from './Home/home.component';

import { BeerService } from './Beers/Services/beer.service';

@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'beers', component: BeerComponent }
    ])
  ],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
