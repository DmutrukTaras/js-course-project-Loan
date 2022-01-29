import Slider from "./modules/slider";

window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const slider = new Slider('.page', '.next');
    slider.render();
});