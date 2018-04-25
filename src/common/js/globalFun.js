

import Vue from 'vue'
import moment from 'moment';
import fetch from  '@/api/fetch';
import util from '@/common/js/util';
//获取用户信息
Vue.prototype.getUserInfo=function(){
    let value=util.getCookie('userInfo');
    if(value==''){
          return {
                user: {
                      realName: "",   //用户姓名
                      gender: "", //性别
                      userName: "", //用户账号
                      emailAddress: "", //用户邮箱地址
                      manageOrgId: "", //组织机构主键
                      manageOrgName: "", //组织机构名称
                      companyId:"", //管理单位主键
                      companyName:"",  //管理单位名称
                      roleId: "", //角色主键
                      roleName: "", // 角色名称
                      realOrgId:"" ,//如果是项目部工区 该值为项目部主键
                      lastLoginTime: "", //上次登录时间
                      id:"" //用户主键
                  },
                  userDataRanges:[],
                  userRoles:[]
          }
    }
    return JSON.parse(value);
}