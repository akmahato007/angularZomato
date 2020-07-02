import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';



//RXjs imports
// import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

//import observable related code
import { Observable }  from "rxjs/Observable";
import 'rxjs/add/operator/toPromise'
import { promise } from 'protractor';
import { data } from 'jquery';
import { rejects } from 'assert';
import { from } from 'rxjs';
import { resolve } from 'dns';



@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private _http:HttpClient , private _route:ActivatedRoute ) {

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
  
  public showPosition : any

  public currentLatitude :any

  public currentLongitude :any

  public currentLocation: any
  

  

  //service method to get a current userlocation
  public userLocation(): any
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude})

          setTimeout(() => {
            resolve
          }, 1500);
        },
        err => {
          reject(err);
        });

    });

  }

public baseUrl = 'https://developers.zomato.com/api/v2.1/geocode?'

public apikey = '949248f347bc088f93d633d9d84c3341'

  getLocation(): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(Error('No support for geolocation'));
        return;
      }
  
      setTimeout(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;
          resolve([latitude.toString(), longitude.toString()]);
        });
        
      }, 5000);
    });
  }

  public latlong(){
    this.getLocation().then(function(data){
      var getLocation = data;
      return getLocation
     });
  }

  public nearbyres1(){
    let fullUrl = [];
    let res :  Observable<any>;
    console.log(this.latlong());
  }
      
  




//service method to get user's nearby restaurent
public nearbyres() : Observable<any>{
  let fullUrl;
  let res :  Observable<any>;
  this.userLocation().then(position =>{
   console.log(`Latitude: ${position.lat} ,Longitude:${position.lng}`)
    fullUrl =  `${this.baseUrl}lat=${position.lat}&lon=${position.lng}`
    console.log(fullUrl) 
    res = this._http.get(fullUrl , {
    headers : {"user-key" : "949248f347bc088f93d633d9d84c3341"}
  });
  })
  return res;
}
    

   
}