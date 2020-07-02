//  by default component- angualar way of extending files in our application

import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocationService } from '../location.service';
import { LocationHttpService } from '../location-http.service';
import { Observable } from "rxjs/Observable";
import { data, map } from 'jquery';
import { error } from 'protractor';
import { resolve } from 'dns';


//convert Promise to Observable
import 'rxjs/add/observable/fromPromise';



//decorator - eanbles class to become part of framework
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


//simple class

export class HomeComponent implements OnInit ,OnDestroy {

 

  public location_suggestions_current = []

  public location_suggestions = [
    {
        "entity_type": "city",
        "entity_id": 2,
        "title": "Kolkata",
        "latitude": 22.572645999999999,
        "longitude": 88.363894999999999,
        "city_id": 2,
        "city_name": "Kolkata",
        "country_id": 1,
        "country_name": "India"
    },

    {
      "entity_type": "zone",
      "entity_id": 5200,
      "title": "West Bangalore, Bangalore",
      "latitude": 13.004780999999999,
      "longitude": 77.569029,
      "city_id": 4,
      "city_name": "Bengaluru",
      "country_id": 1,
      "country_name": "India"
    },
    {
      "entity_type": "landmark",
      "entity_id": 224965,
      "title": "United States Highway, Reno",
      "latitude": 38.970100000000002,
      "longitude": -119.93519999999999,
      "city_id": 976,
      "city_name": "Reno",
      "country_id": 216,
      "country_name": "United States"
    }

]

  constructor(public locationService:LocationService, public locationHttpService:LocationHttpService) { 
    console.log("Home component constructor called")
  }

  // public baseUrl = 'https://developers.zomato.com/api/v2.1/geocode?'

  findMe():any{
  
   

  }
        
  
  ngOnInit(): void { 
    console.log("ng on init called")
    // this.locationService.userLocation().then(position =>{
    //   console.log(`Latitude: ${position.lat} ,Longitude:${position.lng}`)
    // })
    // //console.log(this.locationService.nearbyres())

    // console.log(this.locationService.userLocation().subscribe(
    //   data =>{
    //     console.log(data)
    //   }
    // ));


    this.locationService.nearbyres1()
  }


  ngOnDestroy() {
    console.log("home component destroyed")
  }
  
}
