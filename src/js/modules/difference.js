export default class Difference {
    constructor(Officer, items) {
        this.officer = document.querySelector(Officer);
        try {
            this.items = this.officer.querySelectorAll(items);
        } catch (e) {}
        this.counter = 0;
    }

    bindTrigers() {
        this.officer.querySelector('.plus').addEventListener('click', () => {
            if (this.counter !== this.items.length - 2) {
                this.items[this.counter].style.display = 'flex';
                this.items[this.counter].classList.add('animated', 'fadeIn')
                this.counter++;
            } else {
                this.items[this.counter].style.display = 'flex';
                this.items[this.counter].classList.add('animated', 'fadeIn')
                this.items[this.counter + 1].classList.add('animated', 'fadeOut')
                setTimeout(() => {
                    this.items[this.counter + 1].remove();
                }, 500);
            }

        });
    }

    hideElements() {
        this.items.forEach((item, i, arr) => {
            if (i != arr.length - 1)
                item.style.display = 'none';
        });
    }

    init() {
        try {
            this.hideElements();
            this.bindTrigers();
        } catch (e) {}


    }

}