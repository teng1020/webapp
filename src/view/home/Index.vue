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
				let inputArr=[
                    {dataField:"RoleId", op:'EQ', dataValue:this.roleId},
					{dataField:"IsEnable", op:'EQ', dataValue:1},
					{dataField:"VersionNum", op:'EQ', dataValue:webappConfig().sysConf.version}
					],params={};
                params.queryConditionItem=inputArr;
                fetch({
                     url: '/api/services/app/homePageConf/getMainObjectForEdit',
                     method: 'post',
                     data: params
                }).then((data)=>{
                      if(data.success){
						  if(data.result.order!=null){
                             let homeconfig=JSON.parse(data.result.order.homePageConf,util.dealFunction);
                               if(homeconfig.homeType===0){
                                   this.$router.push({ path:homeconfig.modulePage.routerUrl});
                               }else{
                                   this.mConfigs=homeconfig.configPage
                               }
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
             this.roleId=this.getUserInfo().user.roleId;
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
