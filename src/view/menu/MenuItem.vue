
<template>
<div class="yl-menuitem">
                <yl-header 
                    :left="left"
                    :title="titleName" 
                    theme="light"
                    @leftEvent="_leftEvent"
                    ></yl-header> 
                <div class="banner">
                    <img src="@/../static/img/banner.jpg" alt="">
                </div>
             <div class="menu-warp">
                    <div class="menu-item"  v-for="(i,index) in  menuList" :key="index" @click="_goUrl(i)">
                            <div class="icon-warp" >
                                <img class="icon" :src="getimgUrl(i.icon)" >
                            </div>
                            <p class="label">
                                <span>{{i.name}}</span>
                            </p>
                    </div>
             </div> 
</div>
</template>

<script type="text/babel">
import util from '@/common/js/util';
import fetch from '@/api/fetch';
import qs from 'qs';
export default {
    data(){
        return {
            left:{
                text:'返回',
                icon:'fa  fa-angle-left'
            },
            menuList:[],
            titleName:''
        }
    },
    methods:{
            getimgUrl(name){
            if(!name){
                name='grid-img.png'; 
            }
           return  '@/../static/img/'+name;
        },
         _goUrl(i){
            this.$router.push({path:i.url})     
        },
        _leftEvent(){
            this.$router.go(-1)
        }
    },
    mounted(){
        if(this.$route.params.items!=undefined){
             this.menuList=this.$route.params.items;
             this.titleName=this.$route.params.name;
             util.setLocalStorage('menuParams',JSON.stringify(this.$route.params))
        }else{
             let params=util.getLocalStorage('menuParams');
             this.menuList=params.items;
             this.titleName=params.name;
        }
       
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
.yl-menuitem
    background-color $color-background
    height 100%
    .banner
        width 100%
        height 120px
        img 
            width 100%
            height 100%
    .menu-warp
        width 100%
        height auto
        overflow hidden
        display flex
        flex-wrap wrap
        padding 20px 15px 5px 15px
        box-sizing border-box
        .menu-item
            box-sizing border-box
            width 95px
            height 95px
            background-color $color-white
            margin 10px
            border-radius 0px
            box-shadow 0px 5px 6px rgba(0, 0, 0, .1)
            .icon-warp
                width 100%
                height 35px
                padding-top 20px
                text-align center
                .icon 
                    width 35px
                    height 35px
            .label
                text-align center
                margin-top 10px
                font-size $fontsize-small-s
        .menu-item:hover
            background-color $color-white
</style>
