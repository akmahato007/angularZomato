import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';



//import observable related code
import { Observable }  from "rxjs/Observable";
import 'rxjs/add/operator/toPromise'
import { promise } from 'protractor';
import { data } from 'jquery';
import { rejects } from 'assert';



@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private _http:HttpClient , private _route:ActivatedRoute) {

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
  

  public baseUrl = 'https://developers.zomato.com/api/v2.1/geocode?'

  public apikey = '949248f347bc088f93d633d9d84c3341'

  //service method to get a current userlocation
  public userLocation(): any
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });

    });

  }




  public nearbyUserRestaurent()
  {
    let promise = new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(position => {

          resolve({latitude: position.coords.latitude ,longitude: position.coords.longitude });

          let fullUrl = `${this.baseUrl}lat=${position.coords.latitude}&lon=${position.coords.longitude}`

          
          // const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

         


          },
        error => {
          reject(error);
        });

    });// end promise

    return promise;


}

 
// public nearbyres(){
//   let fullUrl:any;
//   this.userLocation().then(position =>{
//     console.log(`Latitude: ${position.lat} ,Longitude:${position.lng}`)
//     fullUrl =  `${this.baseUrl}lat=${position.lat}&lon=${position.lng}`
//   })
//   let promise1 =new Promise((resolve , reject) =>{
//     resolve(this._http.get(fullUrl , {
//      headers : {"user-key" : "949248f347bc088f93d633d9d84c3341"}
//    })) 
//      // .toPromise()
//      // .then(res=>{
//      //   console.log(res)
//      // })
//    })
//   return promise1;
// }

public nearbyres(){
  let fullUrl:any;
  this.userLocation().then(position =>{
    console.log(`Latitude: ${position.lat} ,Longitude:${position.lng}`)
    fullUrl =  `${this.baseUrl}lat=${position.lat}&lon=${position.lng}`
  })
   this._http.get(fullUrl , {
    headers : {"user-key" : "949248f347bc088f93d633d9d84c3341"}})
}

  

  



//   public nearbyUserRestaurent()
//   {
//     var res , rej;

//     var promise = new Promise((resolve, reject) => {

//       // res= resolve;
//       // rej = reject;
      

//       res  = navigator.geolocation.getCurrentPosition(position => {  

//           resolve({latitude: position.coords.longitude, longitude: position.coords.latitude});

//           let fullUrl = `${this.baseUrl}lat=${position.coords.latitude}&lon=${position.coords.latitude}`

//           const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

//           this._http.get('fullUrl', {
//             headers : {"user-key" : "949248f347bc088f93d633d9d84c3341"}

//           })
//         });

//        rej =  error => {
//           reject(error);
//         };


//     });

//     Promise.resolve = res
//     Promise.reject = rej

//     return promise
          
// }





  
//service method to get user's nearby restaurent

  // public nearbyUserRestaurent(){
  //   console.log(this.userLocation().resolve())
  //   let myResponse = this._http.get(`${this.baseUrl}lat=${}&lon=${}`)
  //   console.log(myResponse)
  //   return myResponse
     
  // }


// public nearbyUserRestaurent()
//   {
//     return new Promise((resolve, reject) => {

//       navigator.geolocation.getCurrentPosition(position => {

//           resolve({latitude: position.coords.latitude ,longitude: position.coords.longitude });

//           let fullUrl = `${this.baseUrl}lat=${position.coords.latitude}&lon=${position.coords.longitude}`

          
//           // const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

//           var data = this._http.get(fullUrl, {
//             headers : {"user-key" : "949248f347bc088f93d633d9d84c3341"}

//           })

//           console.log(data) 
//           console.log(fullUrl) 
//           return data;

//           },
//         error => {
//           reject(error);
//         });

//     });

// }

 
    
}