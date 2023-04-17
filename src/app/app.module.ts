import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';

import { FormsModule } from '@angular/forms';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- NgModel lives here

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { CarSearchComponent } from './car-search/car-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarDetailComponent,
    MessagesComponent,
    DashboardComponent,
    CarSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    CarsComponent,
    CarDetailComponent,
    MessagesComponent,
    DashboardComponent,
    CarSearchComponent]
})
export class AppModule { }
