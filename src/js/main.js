import VideoPlayer from "./modules/videoPlayer";
import Slider from "./modules/slider";

window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const slider = new Slider('.page', '.next');
    slider.render();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();
});