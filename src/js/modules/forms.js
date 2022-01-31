export default class Form {
    constructor(form) {
        this.form = document.querySelectorAll(form);
        this.inputs = document.querySelectorAll('input');
        this.dots = null;
        this.massage = {
            "loading": "Загрузка...",
            "success": "Дякую! З вами скоро зв'яжуться",
            "failure": "Щось пышло не так...",
        };
    }

    clearInputs() {
        this.inputs.forEach(item => {
            item.value = '';
        });
    };

    async postData(url, data) {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    }

    init() {

        this.form.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();

                let statusMassage = document.createElement('div');
                statusMassage.classList.add('status');
                statusMassage.style.cssText = `
                margin-top: 15px;
                font-size: 18px;
                color: gray`;

                item.parentNode.appendChild(statusMassage);

                item.classList.add('animated', 'fadeOutUp');
                setTimeout(() => {
                    item.style.display = "none";
                }, 400);

                let statusText = document.createElement('div');
                statusText.textContent = this.massage.loading;
                statusMassage.appendChild(statusText);

                let formData = new FormData(item);

                this.postData('assets/question.php', formData)
                    .then(res => {
                        console.log(res);
                        statusText.textContent = this.massage.success;
                    })
                    .catch(() => {
                        statusMassage.textContent = this.massage.failure;
                    })
                    .finally(() => {
                        this.clearInputs();
                        setTimeout(() => {
                            statusMassage.remove();
                            item.classList.remove('fadeOutUp');
                            item.classList.add('fadeInUp');
                            item.style.display = "block";
                        }, 5000);
                    });

            });
        });


    }
}