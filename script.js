const vue = new Vue({
    el: "#vueContainer",
    data: {
        mailListCompleted:[],
        mailList : [],
    },
    methods:{
  
    },
    mounted(){
        for(i = 0; i< 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((resp)=>{
                let randomMail = resp.data.response;
                this.mailList.push(randomMail);
                if(this.mailList.length == 9){
                    this.mailListCompleted = [...this.mailList]
                }
            })

        }
    }
});