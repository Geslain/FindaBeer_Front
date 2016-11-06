/**
 * Created by Gess on 09/10/2016.
 */
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';
import {BarService} from "../Bars/Services/bar.service";
import {BeerService} from "../Beers/Services/beer.service";
import PlaceSearchRequest = google.maps.places.PlaceSearchRequest;

@Component({
  selector: 'my-app',
  styleUrls: ["home.component.css"],
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {

  public userLatitude= 45.750000;
  public userLongitude = 4.850000;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: any;
  public beers;
  public beersNew;
  public bars;
  public barsNew;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private barService : BarService,
    private beerService : BeerService,
  ) {
    this.barService.getBars()
      .subscribe(
        bars => {
          this.bars = bars;
          this.barsNew = bars.slice(0,3);
        }
      );
    this.beerService.getBeers()
      .subscribe(
        beers => {
          this.beers = beers;
          this.beersNew = beers.slice(0,3);
        }
      );
  }

  public changeBeer($event) {
    location.replace("/beers/"+$event)
  }

  public changeBar($event) {
    location.replace("/bars/"+$event)
  }

  ngOnInit() {
    this.zoom = 4;

    //create search FormControl
    this.searchControl = new FormControl();
    let options = {
      types: [
        'establishment',
      ],
      componentRestrictions: {country: 'FR'}
    };


    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      var userPosition = new google.maps.LatLng(this.userLatitude, this.userLongitude);
      var map = new google.maps.Map(document.getElementById('map'), {
        center:userPosition,
        zoom: 15,
        scrollwheel: true
      });

      var request = {
        location: userPosition,
        radius: '1000',
        types: ['bar']
      };

      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch(<PlaceSearchRequest>request, function(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            var place = results[i];
            // If the request succeeds, draw the place location on
            // the map as a marker, and register an event to handle a
            // click on the marker.
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });
          }
        }
      });


      let autocomplete = new google.maps.places.Autocomplete(<HTMLInputElement>document.getElementById("autocompleteInput"), options);
      autocomplete.addListener("place_changed", () => {
        //get the place result
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();

        //set latitude and longitude
        this.userLatitude = place.geometry.location.lat();
        this.userLongitude = place.geometry.location.lng();
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.userLatitude = position.coords.latitude;
        this.userLongitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}
