import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//router module used for setting applicaton level route
import {RouterModule,Routes} from '@angular/router';

//import observable related code
import { Observable }  from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { ErrorViewComponent } from './error-view/error-view.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationService } from './location.service';
import { LocationHttpService } from './location-http.service';
import {FormsModule} from '@angular/forms'; 

//decorators - what is executing
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailViewComponent,
    ErrorViewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    //Router module forRoot method to declare possible routes in application
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},// blank route redirects to home component
      {path:'detail-view',component:DetailViewComponent},
      {path:'detail-view/locations?query=',component:DetailViewComponent},
      {path:'error-view',component:ErrorViewComponent},
      {path:'detail-view/:detail-view',component:DetailViewComponent}

    ]) 
  ],  
  providers: [LocationService,LocationHttpService],
  bootstrap: [AppComponent] // first component to load in the website in Shell page
})



export class AppModule { 



}
