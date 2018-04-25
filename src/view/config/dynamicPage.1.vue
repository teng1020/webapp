<template>
	<renderContainerLay
		v-if="isRender" 
		:options="homePageConf.configPage.content"
		:outParams="outParams"
	>
	</renderContainerLay>	
</template>

<script type="text/babel">
import fetch from '@/api/fetch';
import util from '@/common/js/util';
import renderContainerLay from '@/components/layout/renderContainerLay'
export default {
	data(){
		return {
			type:0,
			isRender:false,
			mConfigs:{},
			roleId:'',
		}
	},
	computed:{
		VersionNum:{
                    get(){
                        return util.getLocalStorage('SysGlobConf').versionNum;
                    }
				},
		homePageConf:function(){
                    return JSON.parse(this.mConfigs.homePageConf,util.dealFunction);
                },
	},
	methods:{
			init(){
            	this.isRender=false;
				let moduleCode=this.$route.params.tableName;
				let inputArr=[
					{dataField:"RoleId", op:'EQ', dataValue:this.roleId},
					{dataField:"VersionNum", op:'EQ', dataValue:this.VersionNum},
					{dataField:"IsEnable", op:'EQ', dataValue:1}
					],params={};
                params.queryConditionItem=inputArr;
                fetch({
                     url: '/api/services/app/homePageConf/getMainObjectForEdit',
                     method: 'post',
                     data: params
                }).then((data)=>{
                      if(data.success){
						  if(data.result.order!=null){
								this.mConfigs=data.result.order;
								this.isRender=true;
							}else{
								this.$router.push({ path:'/defaulthome'});
							}
                      } 
                      else {
                          this.$message.error('失败！'+data.error.message);
                      }
                });
        },
	},
	beforeMount(){
		
	},
	mounted(){
		this.roleId=this.getUserInfo().user.roleId;
    },
	components:{
		'yl-homeContainer':HomeContainer
	},
	watch:{
          roleId:function(n,o){
			  this.init();
		  }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
