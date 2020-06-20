import { Component, OnInit } from '@angular/core';


//importing route related code
import {ActivatedRoute ,Router} from '@angular/router'


@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  constructor(private _route:ActivatedRoute ,private router :Router) {
    console.log("constructor is called");
   }

  ngOnInit(): void {
    console.log("ngoninitcalled")

    let myEntityId = this._route.snapshot.paramMap.get('entity_id')
    console.log(myEntityId);
  }

}
