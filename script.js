const vue = new Vue({
    el: "#vueContainer",
    data: {
        mailListCompleted: [],
        mailList: [],
        isLoading: false
    },
    methods: {
        randomEmails() {
            this.isLoading = true;
            this.mailListCompleted = [];
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then((resp) => {
                            let randomMail = resp.data.response;
                            this.mailList.push(randomMail);
                            if (this.mailList.length == 10) {
                                this.mailListCompleted = [...this.mailList]
                                this.isLoading = false
                            }
                        })
                }, Math.floor(Math.random()*1000))
            }
        }
    },
    mounted() {
        this.randomEmails();
    }
});