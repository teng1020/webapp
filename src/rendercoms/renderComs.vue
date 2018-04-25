<template>
     <!--头部组件-->
   <yl-header  ref="header"
        v-if="option.type==='header'" 
        :title="option.elmentConfig.title"
        :left="option.elmentConfig.left"
        :right="option.elmentConfig.right"
        :theme="option.elmentConfig.theme"
        @leftEvent="_method1"
        @rightEvent="_method2"
   >
   </yl-header>

    <!--菜单组件-->
   <yl-grid ref="grid"
        v-else-if="option.type==='grid'" 
        :itemList="option.elmentConfig.itemList"
        :border="option.elmentConfig.border"
        :style="option.elmentConfig.style"
   >
   </yl-grid>
  
      <!--工具条组件-->
   <yl-cell ref="cell"
        v-else-if="option.type==='cell'" 
        :icon="option.elmentConfig.icon"
        :title="option.elmentConfig.title"
        :content="option.elmentConfig.content"
        :isLink="option.elmentConfig.isLink"
        :styleConf="option.elmentConfig.styleConf"
        :style="option.elmentConfig.style"
        @linkTo="_method1"
   >
   </yl-cell>

 </template>

<script type="text/babel">
export default {
    data(){
        return{
        }
    },
    props:{
         option:{
            type:Object,
            require:true,
            default:function(){
                return {}
            }
        },
        outParams:{
            type:Object,
            require:false,
            default:function(){
                return {}
            }
        }
    },
    computed:{
    },
    methods:{
        _initComs(){
            this.$emit('init',this);
        },
        _method1(node){
            this.$emit('method1',node,this);
        },
        _method2(node){
            this.$emit('method2',node,this);
        },
        _method3(node){
            this.$emit('method3',node,this);
        },
        _method4(node){
            this.$emit('method4',node,this);
        },
    },
    components:{
    },
    beforeMount(){
       this._initComs();   
    },
    mounted(){
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
