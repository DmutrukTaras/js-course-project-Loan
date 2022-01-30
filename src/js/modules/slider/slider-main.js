import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(container, btns) {
        super(container, btns);
    }


    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
        this.hideBlock();
        if (n == 3) {
            setTimeout(() => {
                this.showBlock();
            }, 3000);
        }


    }


    showBlock() {
        try {
            this.block = document.querySelector('.hanson');
            this.block.style.opacity = 1;
            this.block.classList.add('animated', 'slideInUp');
        } catch (e) {
            console.log(e);
        }

    }

    hideBlock() {
        try {
            this.block = document.querySelector('.hanson');
            this.block.style.opacity = 0;
            this.block.classList.remove('animated', 'fadeIn');
        } catch (e) {
            console.log(e);
        }
    }



    plusSlides(n) {
        this.showSlides(this.slideIndex += n)
    }

    render() {

        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlides(1);
            });

            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.showSlides(this.slideIndex);

    }
}