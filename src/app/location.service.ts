import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() {

    console.log("service constructor called")

  }


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

  // public entity_id : any
  public userLocation : any

  public showPosition : any

  public currentLatitude :any

  public currentLongitude :any

  public currentLocation: any
  //service method to get a current userlocation
  public findMe():any{

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {

        this.currentLatitude = position.coords.latitude;
        console.log(this.currentLatitude)
        this.currentLongitude = position.coords.longitude;
        console.log(this.currentLongitude)
      })
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }
  }

 
}
