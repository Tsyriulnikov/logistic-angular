import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { MapComponent } from './components/map/map.component';
import {HttpClientModule} from "@angular/common/http";
import {MarkerService} from "./services/marker.service";
import {PopupService} from "./services/popup.service";
import { DestComponent } from './components/dest/dest.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    HttpClientModule
  ],
  providers: [
    MarkerService,
    PopupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
