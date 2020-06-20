//  by default component- angualar way of extending files in our application

import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocationService } from '../location.service';
import { LocationHttpService } from '../location-http.service';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';



//decorator - eanbles class to become part of framework
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//simple class
export class HomeComponent implements OnInit ,OnDestroy {

  
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


  public userLocation : any

  public showPosition : any

  public currentLatitude :any

  public currentLongitude :any

  public currentLocation: any

  public nearbyRest: any

  public final_lat: any

  public final_lng: any


  //service call

  // findMe(): any{
  //   this.locationHttpService.findMe().subscribe(

  //     data =>{
  //       console.log(data) 
  //     },
  //     error =>{
  //       console.log("showing error message");
  //       console.log(error.errorMessage)
      
  //     }  


  //   )
    //this.locationHttpService.nearByRestaurent();
    // console.log(loc.currentLatitude)
    // console.log(loc.currentLongitude)

    

    //subscribe the observable part from response to get nearby restaurent
    // this.locationHttpService.nearByRestaurent().subscribe(

    //   data =>{
    //     console.log(data) 
    //   },
    //   error =>{
    //     console.log("showing error message");
    //     console.log(error.errorMessage)
      
    //   }  
      
    //   )

  // }
  
  ngOnInit(): void { 
    console.log("ng on init called")


    this.locationHttpService.getPosition().then(pos=>
      {
         console.log(`Positon: ${pos.lng} ${pos.lat}`);

         
        this.final_lat = pos.lat;
        this.final_lng = pos.lng;

        
      });

      console.log("starting jqweqwhekqwenqw eqwew Second call")
      console.log(this.final_lat)
      console.log(this.final_lng)
    // console.log(nearbyRest)
    //calling the service method to find current user lcation in the component
    const nearbyRest = this.locationHttpService.nearByRestaurent(this.final_lat,this.final_lng).subscribe(

      

      data =>{
        console.log(data) 
      },
      error =>{
        console.log("showing error message");
        console.log(error.errorMessage)
      
      }  

    )
    
  }


  ngOnDestroy() {
    console.log("home component destroyed")
  }
  
}
