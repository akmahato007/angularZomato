import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

import {HttpErrorResponse , HttpParams} from '@angular/common/http';


//RXjs imports
// import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

//import observable related code
import { Observable }  from "rxjs/Observable";
import 'rxjs/add/operator/map'
import { promise } from 'protractor';
import { data } from 'jquery';
import { rejects } from 'assert';
import { from } from 'rxjs';
import { resolve } from 'dns';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { ArrayType } from '@angular/compiler';



@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private _http:HttpClient , private _route:ActivatedRoute ) {

    console.log("service constructor called")

  }

public baseUrl = 'https://developers.zomato.com/api/v2.1/geocode?'
public baseUrl1 : "https://api.github.com/user";

public apikey = '949248f347bc088f93d633d9d84c3341'

      
  public userLocationResolveAfter2Seconds(): any {
    return new Promise((resolve , reject) => {
      setTimeout(() => {
        navigator.geolocation.getCurrentPosition(resp => {

          resolve([resp.coords.latitude, resp.coords.longitude])

        },
        error => {
          reject(error);
        });

      }, 100);
    });
  }

  async addWithAsync()  {
    let res;
    let position = <ArrayType>await this.userLocationResolveAfter2Seconds();
    console.log(position);
    console.log(`Latitude: ${position[0]} ,Longitude:${position[1]}`)
    let fullUrl =  `${this.baseUrl}lat=${position[0]}&lon=${position[1]}`
    console.log(fullUrl) 
     res = await this._http.get(fullUrl, {
      headers : {"user-key" : "949248f347bc088f93d633d9d84c3341"}
    });
    return res;
}   




signIn(email,password):Observable<any>  {
  //console.log(username)
  //console.log(password)
  let res;
  let Basic = 'Basic ';
  // let auth = btoa(email + ':' + password);
  var auth = base64.encode(email+ ':'+ password)
  console.log(auth);
  let fullUrl = 'https://api.github.com/user';
   res =  this._http.get(fullUrl, {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
        'Authorization': 'Basic '+ auth 
      }
    )
  })
  console.log(res)
  return res
}   


// user entered location service

userEnteredLocation(){



}
}