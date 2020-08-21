//  by default component- angualar way of extending files in our application

import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocationService } from '../location.service';
import { LocationHttpService } from '../location-http.service';
import { Observable } from "rxjs/Observable";
import { data, map, getJSON } from 'jquery';
import { error } from 'protractor';
import { resolve } from 'dns';
import { Subscription } from 'rxjs/internal/Subscription';


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
  public final_res;
  public nearby_loc =[];

  constructor(public locationService:LocationService, public locationHttpService:LocationHttpService) { 
    console.log("Home component constructor called")
  }

  public baseUrl = 'https://developers.zomato.com/api/v2.1/geocode?'
  
  // public completed()
  // {
  //   this.nearby_loc = this.final_res.nearby_restaurants;
  //   console.log(this.nearby_loc)
  // }

    async findMe(){
    let final_res;
    let a = (await this.locationService.addWithAsync()).subscribe(
      data => {
        this.final_res =  data;
      },
      error =>{
        console.log("error")
        
      },
      // completed => { 
      //   this.completed()
      // }
    )  
  }



  
        
  
  ngOnInit(): void { 
    console.log("ng on init called")
  }


  ngOnDestroy() {
    console.log("home component destroyed")
  }
  
}
