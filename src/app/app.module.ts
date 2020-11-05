import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//router module used for setting applicaton level route
import {RouterModule,Routes} from '@angular/router';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationService } from './location.service';
import { LocationHttpService } from './location-http.service';
import {FormsModule} from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component'; 

//decorators - what is executing
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent
    
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
      {path:'about-us',component:AboutUsComponent},
      // {path:'detail-view/locations?query=',component:DetailViewComponent},
      {path:'contact',component:ContactComponent},
      // {path:'detail-view/:detail-view',component:DetailViewComponent}

    ]) 
  ],  
  providers: [LocationService,LocationHttpService],
  bootstrap: [AppComponent] // first component to load in the website in Shell page
})



export class AppModule { 


}
