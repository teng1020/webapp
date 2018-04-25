<template>
	<renderContainerLay
		:options="options.content"
		@method1="_method1"
		@method2="_method2"
		@method3="_method3"
		@method4="_method4"
	>
	</renderContainerLay>	
</template>

<script type="text/babel">
import fetch from '@/api/fetch';
import util from '@/common/js/util';
import { mapGetters,mapActions } from 'vuex';
import renderContainerLay from '@/components/layout/renderContainerLay'
export default {
	data(){
		return {
			type:0,
			extensionObj:{}
		}
	},
	props:{
		options:{
			type:Object,
			default:function(){
				return {}
			}
		}
	},
	computed:{
		fetchObject:{
                    get(){
                        return fetch;
                    }
                },
                utilObject:{
                    get(){
                        return util;
                    }
				},
				 ...mapGetters([ 'getGlobObject1','getGlobObject2','getGlobString1','getGlobString2','getGlobArray1' ]),
	},
	methods:{ 
			...mapActions(['setGlobObject1','setGlobObject2','setGlobString1','setGlobString2','setGlobalArray1']),
			_method1(node,_coms){
					let _this=this,option=_coms.option;
					let eventConf=option.eventConf;
					if(eventConf!=undefined){
						if(eventConf.isOn){
							if(eventConf.method1!=undefined){
									eventConf.method1(node,_this,option);
							}
						}
					}
			},
			_method2(node,_coms){
						let _this=this,option=_coms.option;
						let eventConf=option.eventConf;
						if(eventConf!=undefined){
						if(eventConf.isOn){
							if(eventConf.method2!=undefined){
								eventConf.method2(node,_this,option);
							}
						}
					}
			},
			_method3(node,_coms){
					let _this=this,option=_coms.option;
					let eventConf=option.eventConf;
					if(eventConf!=undefined){
					if(eventConf.isOn){
						if(eventConf.method3!=undefined){
								eventConf.method3(node,_this,option);
						}
					}
					}
			},
			_method4(node,_coms){
					let _this=this,option=_coms.option;
					let eventConf=option.eventConf;
					if(eventConf!=undefined){
					if(eventConf.isOn){
						if(eventConf.method4!=undefined){
							eventConf.method4(node,_this,option);
						}
					}
					}
			},
			_initEvent(){
				let _this=this,option=this.options;
				if(option.InterceptEvent!=undefined){
					let eventConf=option.InterceptEvent.init;
					if(eventConf!=undefined){
							if(eventConf.isOn){
								eventConf.event(_this,option);
							}
						}
				}
		   },
		   init(){
			   this._initEvent();
		   }
	},
	beforeMount(){
		this.init();
	},
	mounted(){
		
    },
	components:{
		renderContainerLay
	},
	watch:{
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
