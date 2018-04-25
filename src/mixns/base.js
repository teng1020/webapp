
export default {
props:{
},
methods: {
    Console(type,text){
        this.$createToast({ txt:text,time:1000,type: type}, false).show();
    }
}
};
