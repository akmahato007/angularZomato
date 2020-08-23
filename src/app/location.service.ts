import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

import {HttpErrorResponse , HttpParams} from '@angular/common/http';


//RXjs imports
// import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

//import observable related code
import { Observable }  from "rxjs/Observable";
import 'rxjs/add/operator/map'
import { promise } from 'protractor';
import { data, param } from 'jquery';
import { rejects } from 'assert';
import { from } from 'rxjs';
import { resolve } from 'dns';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { ArrayType } from '@angular/compiler';
import { EmailValidator } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class LocationService {
  session: any;
  // $_http: any;

  constructor(private $http:HttpClient , private _route:ActivatedRoute ) {

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
     res = await this.$http.get(fullUrl, {
      headers : {"user-key" : "949248f347bc088f93d633d9d84c3341"}
    });
    return res;
}   



/* 
signIn(username,password):Observable<any[]>  {
  // console.log(username)
  // console.log(password)

  // let parameters = new HttpHeaders();
  // parameters = parameters.set('Authorization', "Bearer " + this.session.getToken());

  // return this.$http.get<any[]>(this.baseUrl1, {headers:parameters})

   let res;
   let auth = btoa(username + ":" + password);
  let authorize = 'Basic' + ' ' + auth;
 // var auth = base.64.encode(email+ ':'+ password)
  console.log(auth);
  console.log(auth);
  let fullUrl = 'https://api.github.com/user';

  res = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('username:password')
    })
  };

  // res =  this.$http.post(fullUrl, {
    // "Content-Type": "application/json",
    // headers : {
     // "Content-Type": "application/x-www-form-urlencoded",
      // "Content-Type": "application/json",
      //  "Accept": "application/vnd.github.v3+json",
      //   "Authorization" : "Basic dXNlcjEzNTcwOkphbnVhcnlAMDA3"
       // "_username":username,
        //"_password":password
    // }
  // });
  /*  res = this.$http.post(fullUrl, {
    headers: new HttpHeaders(
      {
        //'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
       'Accept': 'application/vnd.github.v3+json',
        'Authorization' : 'Basic dXNlcjEzNTcwOkphbnVhcnlAMDA3'
        //'Authorization': '2b5d8e27bb50f09e8c215ecbefa4151618f689f7'
      }
    )
  }) 
   console.log(res)
   return res
}   
 */

 



signIn(email,password):Observable<any>  {
  //console.log(username)
  //console.log(password)
  let res;
  // let Basic = 'Basic ';
  // let auth = btoa(email + ':' + password);
  var auth = btoa(email+ ':'+ password)
  console.log(auth);
  let fullUrl = 'https://api.github.com/user';
   res =  this.$http.get(fullUrl, {
    headers: new HttpHeaders(
      {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': 'Basic '+ auth 
      }
    )
  })
  console.log(res)
  return res
}   

// 

search(search):Observable<any>{
  let fullUrl = 'https://api.github.com/users/' + search
  
  
  const params = new HttpParams()
    .set('client_ID', '137d108ac6debf5fb901')
    .set('client_Secret','26992b0e620b10b92d4ad050b0bcb7bcd26002b1')
    let a =  this.$http.post(fullUrl, params)
    

    console.log(a)
    return a

}


}// class close