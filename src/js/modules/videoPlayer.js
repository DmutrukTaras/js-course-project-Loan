export default class VideoPlayer {
    constructor(trigers, popup) {
        this.btns = document.querySelectorAll(trigers);
        this.modal = document.querySelector(popup);
        this.close = document.querySelector('.close');
    }

    bindTrigers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.modal.style.display = 'flex';
                this.modal.classList.remove('fadeOut');
                this.modal.classList.add('animated', 'fadeIn');

                if (!document.querySelector('iframe#frame')) {
                    const path = btn.getAttribute('data-url');
                    this.createPlayer(path);
                }

            });
        });

    }

    bindCloseBtn() {
        this.close.addEventListener('click', () => {
            this.player.stopVideo();
            this.modal.classList.remove('fadeIn');
            this.modal.classList.add('fadeOut');
            setTimeout(() => {
                this.modal.style.display = 'none';
            }, 500)
        });
    }

    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`,

        });

    }

    init() {
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.bindTrigers();
        this.bindCloseBtn();
    }
}