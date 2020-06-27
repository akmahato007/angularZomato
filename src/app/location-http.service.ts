import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationHttpService {

  constructor() {
    console.log("service constructor called")
   }
}
