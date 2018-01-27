import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { app_routing } from './app.routes';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
