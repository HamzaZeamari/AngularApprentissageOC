import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';


@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FaceSnapListComponent,
    HeaderComponent,
    LandingpageComponent,
    SingleFaceSnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide : LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    registerLocaleData(fr.default);
  }
}
