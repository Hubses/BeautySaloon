import {Component} from "@angular/core";

import {AlenaCarousel} from './carousel/carousel.component';
import './home.component.css'

@Component({
    selector: "alena-home",
    template: `
    <alena-home__carousel></alena-home__carousel>
    <div class="alena-home__banner" style="width:70%; margin-left:15%">
        <p id="alena-home__banner__header">«Алена»: У Нас 
            <span class="alena-home__substring">Есть Все</span> для Вашей Красоты и Настроения</p>
        <p id="alena-home__banner__footer">Более <span class="alena-home__substring">100,000 довольных клиентов</span>. 
            «Алена» — ваш компас в мире красоты и здоровья! Заходите к нам,
            <span class="alena-home__substring">Мы Любим говорить</span> «Привет».</p>
        <button type="button" class="btn btn-default" id="alena-home__banner__footer__record-button"><span class="glyphicon glyphicon-calendar">        
            </span>ЗАПИСАТЬСЯ!</button>
        <button type="button" class="btn btn-default" id="alena-home__banner__footer__shares-button"><span class="glyphicon glyphicon-star">        
            </span>НАШИ АКЦИИ!</button>
    </div>
    <br>
  `
})
export class Home {
}
