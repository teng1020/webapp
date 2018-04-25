
<template>
<div class='login'>
    <yl-header 
        theme="light"
        ></yl-header>   
    <div class="logo">
        <img src="../../../static/img/logo.png" alt="" class="logo-img">
        <p class="title">{{titleName}}</p>
    </div>
    <div class="yl-form">
        <cube-form 
            :model="model"
            :schema="schema"
            :immediate-validate="false"
            :options="formOptions"
            @validate="validateHandler"
            @submit="submitHandler">
        </cube-form>
    </div>
    <div class="bottom">
        <p>
            <span class="zhuce">注册账号</span>
            <span class="wangji">忘记密码？</span>
        </p>
    </div>
</div>  
</template>

<script type="text/babel">
import util from '@/common/js/util';
import fetch from '@/api/fetch';
import baseMixn from '@/mixns/base.js';
export default {
    mixins: [baseMixn],
    data(){
        return {
            titleName:webappConfig().sysConf.titleName,
            validity: {},
            valid: undefined,
            formOptions:{
                 scrollToInvalidField: true,
                 layout: 'standard' //fresh classic 
            },
            schema:{
                   groups: [ {
                        fields: [
                                {
                                    type: 'input',
                                    modelKey: 'userName',
                                    label: '用户名',
                                    props: {
                                        placeholder: '请输入用户名',
                                        autofocus:true,
                                        clearable:true
                                    },
                                    rules: {
                                        required: true
                                    },
                                    messages: {
                                        required: '用户名不能为空!'
                                    }
                                },
                                {
                                    type: 'input',
                                    modelKey: 'passWord',
                                    label: '密  码',
                                    props: {
                                        placeholder: '请输入密码',
                                        type:'password',
                                        clearable:true,
                                        eye:{
                                            'open':false
                                        }
                                    },
                                    rules: {
                                        required: true
                                    },
                                    messages: {
                                        required: '密码不能为空!'
                                    }
                                },
                            ]
                     },
                     {
                        fields: [
                        {
                            type: 'submit',
                            label: '登   录'
                        },
                        ]
                    }
                   ]
            },
            model:{
                userName: '',
                passWord: '',
            }
        }
    },
    methods:{
         _initlogin(){
					 if(util.getCookie('ylClientId')===''){
						util.setCookie('ylClientId',util.newGuid(false),1);
					 }
		},
        submitHandler(e){
            //执行登录方法
            let _this=this;
            let LoginForm={
                userName: this.model.userName,
                passWord: '',
                grant_type:'password',
                ylClientId:'',
                loginType:0
            }
            const toast = this.$createToast({
                time: 0,
                txt: '登录中..'
            })
            toast.show()
            LoginForm.ylClientId=util.getCookie('ylClientId');
            LoginForm.passWord=util.jsEncrypt(this.model.passWord);
            fetch({
                url:"/Token",
                method:"post",
                data:LoginForm
            },{
                baseURL:'',authorization:util.getDefaultToken(),formatData:true
            }).then(data => {
                let result=data;
                if(result.error!==undefined){
                    if(result.error==="InvalidUserName"){
                        this.Console('warn','用户名输入有误！');
                    }else if(result.error==="InvalidPassword"){
                         this.Console('warn','密码输入有误！');
                    }else if(result.error==="InvalidOrgId"){
                         this.Console('warn','用户没有授权权限范围！');
                    }else if(result.error==="InvalidRoleId"){
                         this.Console('warn','用户没有授权角色！');
                    }else{
                         this.Console('error','登录有误');
                    }
                    LoginForm.passWord='';
                }else{
                    if(result.access_token!==""){
                        util.setLogin(result.access_token);
                        fetch({ 
                                url: '/api/services/app/session/GetCurrentLoginInformations',
                                method: 'post',
                                data: ''
                            }).then(
                                data=>{
                                    if(data.success){
                                        util.setCookie('userInfo',JSON.stringify(data.result),1);
                                        this.Console('success','登录成功，欢迎您！');
                                        this.$router.replace('/Home');
                                    }
                        });
                    } else {
                       this.Console('error','登录失败！');
                        LoginForm.passWord='';
                    }
                }
                 toast.hide()
            }).catch(function(err){
                LoginForm.passWord='';
                toast.hide()
            })
        },
        validateHandler(result){
           
        }
    },
    mounted(){
        this._initlogin()
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
.logo
    text-align center 
    .logo-img
        height 85px
        wight 85px
        padding-top 70px
    .title
        font-size $fontsize-medium
        color $color-blue
        font-weight 500
.yl-form
    padding 45px 15px 0px 15px 
.bottom
    margin-top 20px
    font-size $fontsize-small-s
    color $color-grey
    text-align center
    p>.wangji
        padding-left 15px


</style>