
<template>
<div  class="yl-header" 
     :class="headerClass">
  <div class="left" @click="_leftEvent"><i :class="left.icon"></i>{{left.text}}</div>
  <h1> {{title}}</h1>
  <div class="right" @click="_rightEvent">{{right.text}}<i :class="right.icon"></i></div>
</div>
</template>

<script type="text/babel">
const COMPONENT_NAME = 'yl-header'
export default {
    name:COMPONENT_NAME,
    data(){
        return{

        }
    },
    props:{
        title:{
            type:String,
            default:'',
            required:false,
        },
        theme:{
            type:String,
            default:'light',  
            required:false,
        },
        left:{
            type:Object,
            default:function(){
                return {
                            text:'',
                            icon:''
                        }
            },
            required:false,
        },
        right:{
            type:Object,
            default:function(){
                return {
                            text:'',
                            icon:''
                        }
            },
            required:false,
        }
    },
    computed:{
      headerClass() {
         if(this.theme==='light') {
            return 'yl-header-light';
        }else  if(this.theme==='dark'){
             return 'yl-header-dark';
        }
      }
    },
    methods:{
        _leftEvent(e){
            this.$emit('leftEvent',e)
        },
        _rightEvent(e){
            this.$emit('rightEvent',e)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
.yl-header
    position relative
    box-sizing border-box
    text-align center
    white-space nowrap 
    padding 0 10px
    display flex
    height 40px
    font-size $fontsize-medium
    h1
        flex 1
        overflow hidden
        text-overflow ellipsis
        line-height 40px
    .left
        flex 0.5
        text-align left
        line-height 40px
    .right 
        flex 0.5
        text-align right
        line-height 40px

.yl-header-light
    background-color $color-white
    color $color-grey
.yl-header-dark
    background-color $color-regular-blue
    color $color-white
</style>
