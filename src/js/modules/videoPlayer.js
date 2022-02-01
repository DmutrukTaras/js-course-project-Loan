export default class VideoPlayer {
    constructor(trigers, popup) {
        this.btns = document.querySelectorAll(trigers);
        this.modal = document.querySelector(popup);
        this.close = document.querySelector('.close');
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    }

    bindTrigers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (!btn.querySelector('.play__circle').classList.contains('closed')) {
                    this.activeBtn = btn;
                    this.modal.style.display = 'flex';
                    this.modal.classList.remove('fadeOut');
                    this.modal.classList.add('animated', 'fadeIn');
                    if (document.querySelector('iframe#frame')) {
                        if (this.path !== btn.getAttribute('data-url')) {
                            this.path = btn.getAttribute('data-url');
                            this.player.loadVideoById({
                                videoId: this.path
                            });
                        }
                    } else {
                        this.path = btn.getAttribute('data-url');
                        this.createPlayer(this.path);
                    }
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
            events: {
                'onStateChange': this.onPlayerStateChange
            }

        });

    }

    onPlayerStateChange(state) {
        try {
            const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling;
            const playIcon = this.activeBtn.querySelector('svg').cloneNode(true);

            if (state.data == 0) {
                if (blockedElem.querySelector('.play__circle').classList.contains('closed')) {
                    blockedElem.querySelector('.play__circle').classList.remove('closed');
                    blockedElem.querySelector('svg').remove();
                    blockedElem.querySelector('.play__circle').appendChild(playIcon);
                    blockedElem.querySelector('.play__text').textContent = 'play video';
                    blockedElem.querySelector('.play__text').classList.remove('attention');
                    blockedElem.style.opacity = '1';
                    blockedElem.style.filter = 'none';
                }
            }
        } catch (e) {}


    }

    init() {
        if (this.btns.length > 0) {
            const tag = document.createElement('script');

            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            this.bindTrigers();
            this.bindCloseBtn();
        }

    }
}