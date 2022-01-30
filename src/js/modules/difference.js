export default class Difference {
    constructor(oldOfficer, newOfficer, items) {
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOfficer);
        this.oldItems = this.oldOfficer.querySelectorAll(items);
        this.newItems = this.newOfficer.querySelectorAll(items);
        this.oldCounter = 0;
        this.newCounter = 0;

    }

    bindTrigers(officer, items, counter) {
        officer.querySelector('.plus').addEventListener('click', () => {
            if (counter !== items.length - 2) {
                items[counter].style.display = 'flex';
                items[counter].classList.add('animated', 'fadeIn')
                counter++;
            } else {
                items[counter].style.display = 'flex';
                items[counter].classList.add('animated', 'fadeIn')
                items[counter + 1].classList.add('animated', 'fadeOut')
                setTimeout(() => {
                    items[counter + 1].remove();
                }, 500)

            }

        });
    }

    hideElements(items) {
        items.forEach((item, i, arr) => {
            if (i != arr.length - 1)
                item.style.display = 'none';
        });
    }

    init() {
        this.hideElements(this.oldItems);
        this.hideElements(this.newItems);
        this.bindTrigers(this.oldOfficer, this.oldItems, this.oldCounter);
        this.bindTrigers(this.newOfficer, this.newItems, this.newCounter);

    }

}