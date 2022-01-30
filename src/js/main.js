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



    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();
});