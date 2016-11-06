/**
 * Created by Gess on 09/10/2016.
 */
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';

@Component({
  selector: 'my-app',
  styles: [`
    .sebm-google-map-container {
      height: 300px;
    }
  `],
  template: `
    <div class="container">
      <h1>Angular 2 + Google Maps Places Autocomplete</h1>
      <div class="form-group">
        <input id="autocompleteInput" placeholder="search for location" autocorrect="off" autocapitalize="off" spellcheck="off" type="text" class="form-control" #search [formControl]="searchControl">
      </div>
      <sebm-google-map [latitude]="latitude" [longitude]="longitude" [scrollwheel]="false" [zoom]="zoom">
        <sebm-google-map-marker [latitude]="latitude" [longitude]="longitude"></sebm-google-map-marker>
      </sebm-google-map>
    </div>
  `
})
export class HomeComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: any;

  constructor(
    private mapsAPILoader: MapsAPILoader
  ) {}

  ngOnInit() {
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(<HTMLInputElement>document.getElementById("autocompleteInput"), {

      });
      autocomplete.addListener("place_changed", () => {
        //get the place result
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();

        //set latitude and longitude
        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}
