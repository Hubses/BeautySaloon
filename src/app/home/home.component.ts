import { Component } from "@angular/core";


import { AlenaNavbar } from '../navbar/navbar.component';
import { AlenaCarousel } from './carousel/carousel.component';

@Component({
  selector: "alena-home",
  template: `
  <alena-menu__navbar></alena-menu__navbar>
  <alena-home__carousel></alena-home__carousel>
  `
})
export class Home {
}
