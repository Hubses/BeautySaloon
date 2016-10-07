import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { Home } from './home/home.component';
import { AlenaNavbar } from './navbar/navbar.component';
import { AlenaCarousel } from './home/carousel/carousel.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    Home,
    AlenaNavbar,
    AlenaCarousel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }