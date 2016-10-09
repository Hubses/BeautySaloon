import {Component} from "@angular/core";

import {AlenaCarousel} from './carousel/carousel.component';
import './home.component.css'
@Component({
    selector: "alena-home",
    template: `
    <alena-home__carousel></alena-home__carousel>
    <div class="alena-home__banner">
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
    <hr class="alena-home__line">
    <div class="alena-home__row row">
        <div class="alena-home__row__card col-sm-10 col-md-3">
            <img class="alena-home__row__card__img" src="assets/main-bs.jpg" alt="Салон красоты">
            <div class="caption">
                <h3>Салон Красоты</h3>
                <p>Так приятно после всего негатива, накопившегося в душе, 
                прийти в хороший салон и доверить свою красоту чутким рукам мастера.</p>
            </div>
        </div>
        <div class="alena-home__row__card col-sm-10 col-md-3">
            <img class="alena-home__row__card__img" src="assets/main-school.jpg" alt="Учебный центр">
            <div class="caption">
                <h3>Учебный центр</h3>
                <p>Предлагает молодежи города Подольска и Московской области программы
                    профессионального и дополнительного профессионального образования.</p>
            </div>
        </div>
        <div class="alena-home__row__card col-sm-10 col-md-3">
            <img class="alena-home__row__card__img" src="assets/main-fitnes.jpg" alt="Фитнес клуб">
            <div class="caption">
                <h3>Фитнес клуб</h3>
                <p>У нас увлекательно, легко и динамично можно поработать над совершенством своего тела. 
                    Доброжелательный персонал ответит на все Ваши вопросы.</p>
            </div>
        </div>
        <div class="alena-home__row__card col-sm-10 col-md-3">
            <img class="alena-home__row__card__img" src="assets/main-shop.jpg" alt="Магазин косметики">
            <div class="caption">
                <h3>Магазин косметики</h3>
                <p>Наш магазин является одним из лучших магазинов косметики Подольска.
                    Мы предлагаем своим клиентам только качественную профессиональную косметику.</p>
            </div>
        </div>
    </div>
    <hr class="alena-home__line">
    <div class="alena-home__banner">
        <img class="alena-home__banner__img" src="assets/logo2x.png" alt="Алена - салон красоты">
        <p id="alena-home__banner__header">«Алена»: У Нас 
            <span class="alena-home__substring">Есть Все</span> для Вашей Красоты и Настроения</p>
        <p id="alena-home__banner__footer">Более <span class="alena-home__substring">100,000 довольных клиентов</span>. 
            «Алена» — ваш компас в мире красоты и здоровья! Заходите к нам,
            <span class="alena-home__substring">Мы Любим говорить</span> «Привет».</p>
    </div>
    <hr class="alena-home__line">
    <div class="alena-home__map">
        <span class="alena-home__map__header">Заходите к Нам. Узнайте, Что и Как. Мы Любим «Новеньких»!</span>
        <div id="map" class="alena-home__map__map"></div>
    </div>
    <hr class="alena-home__line">
    <div class="alena-home__feedback">
        <h1 class="alena-home__feedback__header">Более 100,000 Клиентов. Посмотри, Что Они Говорят о Нас?</h1>
        <p class="alena-home__feedback__text">
            Мы <span class="alena-home__feedback__text__substring" data-toggle="tooltip" data-placement="top" 
            title="Разумеется, а как иначе?"><strong>любим наших клиентов</strong>
            </span>, и всячески стараемся оправдать их ожидания. 
            Когда Вы приходите к Нам, <span class="alena-home__feedback__text__substring" data-toggle="tooltip" 
            data-placement="top" title="Мы стримимся радовать наших посетителей">
            <strong>Вам Не Стоит волноваться</strong></span> Ни о Чем!</p>
        <div class="alena-home__feedback__row row">
            <div class="alena-home__feedback__row__card col-sm-12 col-md-4">
                <div class="caption">
                    <p class="alena-home__feedback__row__card__feeadback">Я этот салон знаю не по наслышке, а сама в нём была и пользовалась услугами специалистов по маникюру
                    и эпиляции! Мне очень понравилось как всё аккуратно делали и главное с заботой о клиенте, это наверное 
                    и оставило положительный оттенок в моем мнении о данном салоне! Ну и в целом, цены довольно таки 
                    приемлемые, коллектив доброжелательный, так что рекомендую!<br>(Отзыв с <a title="Отзыв оставлен на Карты.Яндекс." 
                    href="http://maps.yandex.ru/org/1051129104/" rel="nofollow">Карты.Яндекс</a>)</p>
                    <div class="alena-home__feedback__row__card__author">
                        <span class="icon-user glyphicon glyphicon-user" aria-hidden="true"></span>
                        <span> <strong>Вероника</strong>, Маникюр, эпиляция</span>
                    </div>
                </div>
            </div>
            <div class="alena-home__feedback__row__card col-sm-12 col-md-4">
                <div class="caption">
                    <p class="alena-home__feedback__row__card__feeadback">Шикарный салон, обслуживание и косметолог Юлиана!!!
                    Давно не делала чистку, боялась что выйду вся красная и в слезах…..но всё прошло бережно, аккуратно 
                    и !главное! эффективно! Кожа сейчас как попочка ребеночка! я счастлива!!<br>(Отзыв с <a title="Отзыв 
                    оставлен на Справочник Подольска." href="http://podolsk.spravker.ru/fitnes-kluby/tsentr-alena.htm"
                     rel="nofollow">Справочник Подольска</a>)</p>
                    <div class="alena-home__feedback__row__card__author">
                        <span class="icon-user glyphicon glyphicon-user" aria-hidden="true"></span>
                        <span> <strong>Ольга</strong>, Косметология</span>
                    </div>
                </div>
            </div>
            <div class="alena-home__feedback__row__card col-sm-12 col-md-4">
                <div class="caption">
                    <p class="alena-home__feedback__row__card__feeadback">Я этот салон знаю не по наслышке,
                     а сама в нём была и пользовалась услугами специалистов по маникюру и эпиляции!
                      Мне очень понравилось как всё аккуратно делали и главное с заботой о клиенте,
                       это наверное и оставило положительный оттенок в моем мнении о данном салоне! Ну и в целом,
                        цены довольно таки приемлемые, коллектив доброжелательный, так что рекомендую!
                        <br>(Отзыв с <a title="Отзыв оставлен на Карты.Яндекс." 
                        href="http://maps.yandex.ru/org/1051129104/" rel="nofollow">Карты.Яндекс</a>)</p>
                    <div class="alena-home__feedback__row__card__author">
                        <span class="icon-user glyphicon glyphicon-user" aria-hidden="true"></span>
                        <span> <strong>Кристина</strong>, Стрижка</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr class="alena-home__line">
    <div class="alena-home__contact-numbers">
        <h1 class="alena-home__contact-numbers__numbers">+7 (903) 257-91-61, +7 (4967) 68-04-99</h1>
        <div class="alena-home__contact-numbers__feedback">
            <h2>Советуем вам перед приходом записаться.</h2>
            <p>Мы не хотим, чтоб что-нибудь омрачило ваш визит к нам, в спортивно-оздоровительный центр «Алена».</p>
        </div>
    </div>
  `
})
export class Home {
    
}

