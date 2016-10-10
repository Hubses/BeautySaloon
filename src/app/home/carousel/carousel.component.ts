import { Component } from "@angular/core";

import './carousel.component.css';

@Component({
    selector: "alena-home__carousel",
    template:
    `
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img class="first-slide" src="assets/first-slide.png" alt="First slide">
          <div class="container">
          </div>
        </div>
        <div class="item">
          <img class="second-slide" src="assets/second-slide.png" alt="Second slide">
          <div class="container">
          </div>
        </div>
        <div class="item">
          <img class="third-slide" src="assets/third-slide.png" alt="Third slide">
          <div class="container">
            
          </div>
        </div>
      </div>
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
`
})
export class AlenaCarousel {
}

