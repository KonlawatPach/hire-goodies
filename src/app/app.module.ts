import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNevbarComponent } from './side-nevbar/side-nevbar.component';
import { FirestoreServiceComponent } from './service/firestore-service/firestore-service.component';
import { AuthServiceComponent } from './service/auth-service/auth-service.component';
import { HomeComponent } from './home/home.component';
import { UnavailableTimeComponent } from './unavailable-time/unavailable-time.component';
import { WorklistsComponent } from './worklists/worklists.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNevbarComponent,
    FirestoreServiceComponent,
    AuthServiceComponent,
    HomeComponent,
    UnavailableTimeComponent,
    WorklistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
