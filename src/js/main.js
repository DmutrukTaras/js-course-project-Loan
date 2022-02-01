import Form from "./modules/forms";
import Difference from "./modules/difference";
import miniSlider from "./modules/slider/slider-mini";
import MainSlider from "./modules/slider/slider-main";
import VideoPlayer from "./modules/videoPlayer";

window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const sliderMain = new MainSlider({
        container: '.page',
        btns: '.next'
    });
    sliderMain.render();

    new MainSlider({
        container: '.moduleapp',
        btns: '.next',
        prev: '.prevmodule',
        next: '.nextmodule'
    }).render();

    new Difference('.officerold', '.officer__card-item').init();
    new Difference('.officernew', '.officer__card-item').init();




    const sliderShowUp = new miniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    });
    sliderShowUp.init();

    const sliderModules = new miniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true

    });
    sliderModules.init();

    const sliderFeed = new miniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    });
    sliderFeed.init();

    new Form('form').init();


    new VideoPlayer('.showup .play', '.overlay').init();
    new VideoPlayer('.module__video-item .play', '.overlay').init();
});