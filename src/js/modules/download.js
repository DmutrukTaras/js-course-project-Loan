export default class Downloads {

    constructor(trigers) {
        this.trigers = document.querySelectorAll(trigers);
        this.path = 'assets/img/mainbg.jpg';
    }

    downloadItem(path) {
        const link = document.createElement('a');
        link.setAttribute('href', path);
        link.setAttribute('download', 'nice_picture');
        link.style.display = 'none';
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

    }

    trigersAction() {
        this.trigers.forEach(triger => {
            triger.addEventListener('click', () => {
                this.downloadItem(this.path);
            })
        });
    }

    init() {
        this.trigersAction();
    }

}