import { Injectable, ɵɵresolveBody } from '@angular/core';



//import a http client 
import {HttpClient, HttpErrorResponse} from '@angular/common/http';


//import observable related code

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'



//import httpheaders

import {HttpHeaders} from '@angular/common/http';
import { ConditionalExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LocationHttpService {


  public userLocation : any

  public showPosition : any

  public currentLatitude :any

  public currentLongitude :any

  public currentLocation: any

  public lng: any
  public lat: any




  public nearby_res; // nearby restaurenet called based on the latitue and longitude

  public res_id; // restaurent id

  public baseUrl = "https://developers.zomato.com/api/v2.1/geocode";


  constructor(private _http: HttpClient,public locationHttpService :LocationHttpService) { 

    console.log("location-http service was called")


  }


  //autodetect user Location service

  
  // service method to get a current userlocation
  

  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

         resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
         console.log("abfjqwbfqwjkfnqw")

         this.currentLongitude = resp.coords.longitude;
         this.currentLatitude = resp.coords.latitude;
         console.log(this.currentLongitude)
         console.log(this.currentLatitude)

        },
        err => {
          reject(err);
        });
    });

  }




  //service to get all nearby restaurents

  /* public nearByRestaurent(){

    console.log("starting heree")

    

    console.log(this.baseUrl + '?lat=' + this.currentLatitude + '&lon=' +this.currentLocation);

    // console.log(`${this.baseUrl}?lat=${this.currentLatitude}&lon=${this.currentLongitude}`);
    let myResponse = this._http.get(`${this.baseUrl}?lat=${this.currentLatitude}&lon=${this.currentLongitude}`,
    {
      headers:{'user-key':'949248f347bc088f93d633d9d84c3341'}
    });
    return myResponse

  } */



  //service.ts

  


  nearByRestaurent(currentLatitude,currentLocation) {
    //do whatever you need with parameter1
  
      console.log("starting heree")
      
      console.log(this.baseUrl + '?lat=' + currentLatitude + '&lon=' + currentLocation);
  var urll = this.baseUrl + '?lat=' + currentLatitude + '&lon=' + currentLocation;
      // console.log(`${this.baseUrl}?lat=${this.currentLatitude}&lon=${this.currentLongitude}`);
      let myResponse = this._http.get(`$(urll)`,
      {
        headers:{'user-key':'949248f347bc088f93d633d9d84c3341'}
      });

      console.log(urll);

      
      return myResponse
   
  }


}
