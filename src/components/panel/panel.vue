
<template>
<div class="panel">
    <div class="title" v-if="hiddenTitle">
        
    </div>
    <div class="content">
        <slot>
        </slot>
    </div>
</div>
</template>

<script type="text/babel">
export default {
    data(){
        return {

        }
    },
    props:{
        hiddenTitle:{
            type:Boolean,
            default:false
        }
    },
     
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
