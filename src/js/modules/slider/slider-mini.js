import Slider from "./slider";

export default class miniSlider extends Slider {
    constructor(container, next, prev, activeClass, animate, autoplay) {
        super(container, next, prev, activeClass, animate, autoplay);
        this.paused = false;
    }


    bindTrigers() {
        this.next.addEventListener('click', () => {
            this.nextSlide();

        });

        this.prev.addEventListener('click', () => {
            for (let index = this.slides.length - 1; index > 0; index--) {
                if (this.slides[index].tagName != 'BUTTON') {
                    let active = this.slides[index];
                    this.container.insertBefore(active, this.slides[0]);
                    break;
                }

            }

            this.decorizeSlides();
        });


    }

    nextSlide() {
        if (this.slides[1].tagName == 'BUTTON' && this.slides[2].tagName == 'BUTTON') {
            this.container.appendChild(this.slides[0]);
            this.container.appendChild(this.slides[1]);
            this.container.appendChild(this.slides[2]);
        } else if (this.slides[1].tagName == 'BUTTON') {
            this.container.appendChild(this.slides[0]);
            this.container.appendChild(this.slides[1]);
        } else {
            this.container.appendChild(this.slides[0]);
        }

        this.decorizeSlides();

    }

    decorizeSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0.4';
            }
        });
        if (this.slides[0].tagName != 'BUTTON') {
            this.slides[0].classList.add(this.activeClass);
        }

        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    activateAnimation() {
        this.paused = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }

    init() {
        this.container.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        align-items: flex-start;
        `;


        this.bindTrigers();
        this.decorizeSlides();
        if (this.autoplay) {
            this.activateAnimation();

            this.container.addEventListener('mouseenter', () => {
                clearInterval(this.paused);
            });
            this.container.addEventListener('mouseleave', () => {
                this.activateAnimation();
            });
        }

    }
}