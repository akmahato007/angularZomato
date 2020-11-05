import { Component } from '@angular/core';

import { OnInit, OnDestroy } from '@angular/core';
import { LocationService } from './location.service';
import { LocationHttpService } from './location-http.service';
import { Observable } from "rxjs/Observable";
import { data, map, getJSON } from 'jquery';
import { error } from 'protractor';
import { resolve } from 'dns';
import { Subscription } from 'rxjs/internal/Subscription';


//convert Promise to Observable
import 'rxjs/add/observable/fromPromise';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,OnDestroy {

  public final_res;
  public nearby_loc =[];

  username: any
  password:any
  search:any

  constructor(public locationService:LocationService, public locationHttpService:LocationHttpService) { 
    console.log("Home component constructor called")
  }

  public baseUrl = 'https://developers.zomato.com/api/v2.1/geocode?'
  
    async findMe(){
    let final_res;
    let a = (await this.locationService.addWithAsync()).subscribe(
      data => {
        console.log(data)
        this.final_res =  data;
        this.nearby_loc = this.final_res.nearby_restaurants;
        console.log(this.final_res)
        console.log(this.nearby_loc)
      },
      error =>{
        console.log(error)
      }
    ) 
  }


   signIn(){
    // console.log(this.email)
    // console.log(this.password)
     this.locationService.signIn(this.username,this.password).subscribe(
      data => {
        console.log(data)
        return data
      },
      error =>{
        // return error 
        console.log(error)
      }
    ) 
  }

  searchUser(){
    // console.log(this.email)
    // console.log(this.password)
     this.locationService.search(this.search).subscribe(
      data => {
        console.log(data)
        return data
      },
      error =>{
        // return error 
        console.log(error)
      }
    ) 
  }


  ngOnInit(): void { 
    console.log("ng on init called")
    
  }


  ngOnDestroy() {
    console.log("home component destroyed")
  }
  
}
