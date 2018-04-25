<template>
	<yl-Container
		v-if="isRender" 
		:options="mConfigs"
	>
	</yl-Container>	
</template>

<script type="text/babel">
import fetch from '@/api/fetch';
import util from '@/common/js/util';
export default {
	data(){
		return {
			type:0,
			isRender:false,
			mConfigs:{}
		}
	},
	computed:{
	},
	methods:{ 
			init(){
				this.isRender=false;
				const toast = this.$createToast({
                time: 0,
                txt: '配置数据读取中..'
                })
              	toast.show()
				let moduleCode=this.$route.params.tableName;
				let inputArr=[
					{dataField:"ExtensionTwo", op:'EQ', dataValue:moduleCode},
					{dataField:"VersionNum", op:'EQ', dataValue:webappConfig().sysConf.version}
					],params={};
                params.queryConditionItem=inputArr;
                fetch({
                     url: '/api/services/app/reportConf/getMainObjectForEdit',
                     method: 'post',
                     data: params
                }).then((data)=>{
                      if(data.success){
						  if(data.result.order!=null){
							    this.mConfigs=JSON.parse(data.result.order.baseInfoConf,util.dealFunction).PageConf;
								this.isRender=true;
							}else{
								this.$router.push({ path:'/Page404'});
							}
							toast.hide()
                      } 
                      else {
						  this.$message.error('失败！'+data.error.message);
						  toast.hide()
                      }
                });
        },
	},
	beforeMount(){
	},
	mounted(){
		this.init();
    },
	components:{
	},
	watch:{
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
