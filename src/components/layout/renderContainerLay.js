import fetch from '@/api/fetch';
import util from '@/common/js/util';
export default{
    
    data(){
        return {
        }
    },
    props: {
        options:{
            type:Array,
            default:function(){
                return []
            }
        }
    },
    methods:{
            renderItem(conf){
                    return conf.map((itemData,index)=>{
                        if(itemData.isLeaf){
                            //子节点
                            if(itemData.panelZone===undefined){
                            return  <yl-div  style={itemData.style}>
                                        <yl-renderComs    
                                            option={itemData.option}
                                            outParams={itemData.outParams}
                                            on-init={this._initContainerComs}
                                            on-method1={this._method1}
                                            on-method2={this._method2}
                                            on-method3={this._method3}
                                            on-method4={this._method4}
                                        >
                                        </yl-renderComs>
                                    </yl-div>
                            }else{
                                return <yl-div  style={itemData.style}>
                                                <yl-panel 
                                                    titleName={itemData.panelZone.titleName} 
                                                    // icon={itemData.panelZone.icon} 
                                                    // helpIsShow={itemData.panelZone.helpIsShow}
                                                    // theme={itemData.panelZone.theme} 
                                                    // heightNum={itemData.panelZone.heightNum} 
                                                    // linkUrl={itemData.panelZone.linkUrl}
                                                >
                                                <div slot="content">
                                                    <yl-renderComs     
                                                        option={itemData.option}
                                                        outParams={itemData.outParams}
                                                        on-init={this._initContainerComs}
                                                        on-method1={this._method1}
                                                        on-method2={this._method2}
                                                        on-method3={this._method3}
                                                        on-method4={this._method4}
                                                    >
                                                    </yl-renderComs>
                                                </div>
                                            </yl-panel>
                                    </yl-div>
                            }
                        }else{
                            return  <yl-div  style={itemData.style}>
                                    {
                                        this.renderItem(itemData.childContent)
                                    }
                                    </yl-div>
                        }
                        
                    })  
         },
         _initContainerComs(_coms){
            let _this=this,option=_coms.option;
            if(option.InterceptEvent!=undefined){
                let eventConf=option.InterceptEvent.init;
                 if(eventConf!=undefined){
                        if(eventConf.isOn){
                            eventConf.event(_this,option,_coms.outParams);
                        }
                    }  
            }
        },
        _method1(node,_this){
            this.$emit('method1',node,_this);
        },
        _method2(node,_this){
            this.$emit('method2',node,_this);
        },
        _method3(node,_this){
            this.$emit('method3',node,_this);
        },
        _method4(node,_this){
            this.$emit('method4',node,_this);
        },
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
    },
    components:{
    },
    mounted(){
    },
    render: function(h){
        let conf=this.options;
        if(conf.length>0){
          return  <yl-div>
                     { 
                          this.renderItem(conf)
                     }
                 </yl-div>
        }
    }
}