export default class ShowInfo {
    constructor(triggers, content) {
        this.triggers = document.querySelectorAll(triggers);
    }

    showContent() {
        this.triggers.forEach(triger => {
            triger.addEventListener('click', () => {
                let content = triger.closest('.module__info-show').nextElementSibling;
                content.style.marginTop = '20px';
                content.classList.add('animated', 'fadeInDown');
                content.classList.toggle('msg');
                if (!content.classList.contains('msg')) {
                    triger.querySelectorAll('svg path')[0].style.display = 'none';
                } else {
                    triger.querySelectorAll('svg path')[0].style.display = 'block';
                }
            });

        });
    }


    init() {

        this.showContent();

    }


}