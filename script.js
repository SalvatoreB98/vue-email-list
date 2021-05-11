const vue = new Vue({
    el: "#vueContainer",
    data: {
        mailList : [],
    },
    methods:{
  
    },
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((resp)=>{
            for(i = 0; i< 10; i++){
                let randomMail = resp.data.response;
                this.mailList.push(randomMail);
            }
        })
    }
});