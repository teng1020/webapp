webpackJsonp([7],{"0a8g":function(e,n,t){var i=t("VrDb");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("FIqI")("3a59f777",i,!0,{})},VrDb:function(e,n,t){(e.exports=t("UTlt")(!0)).push([e.i,"\n.main[data-v-ae5542ec] {\n  height: 100%;\n  width: 100%;\n}\n.menu[data-v-ae5542ec] {\n  width: 100%;\n  height: 1.28rem;\n  line-height: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0.08rem 0.266667rem;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  white-space: nowrap;\n  text-align: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-top: 0.026667rem solid #e1e5ea;\n  background-color: #fff;\n}\n.menu .menu-item[data-v-ae5542ec] {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  color: #90979e;\n}\n.menu .menu-item i[data-v-ae5542ec] {\n  display: block;\n  font-size: 0.586667rem;\n  height: 0.8rem;\n  line-height: 0.8rem;\n}\n.menu .menu-item .menu-item-text[data-v-ae5542ec] {\n  display: block;\n  height: 0.32rem;\n  line-height: 0.32rem;\n  font-size: 0.32rem;\n}\n.menu .menu-item-hover[data-v-ae5542ec] {\n  color: #2b5e93;\n}\n.menu .menu-item-hover i[data-v-ae5542ec] {\n  font-size: 0.693333rem;\n}\n.menu .menu-item-hover .menu-item-text[data-v-ae5542ec] {\n  font-size: 0.373333rem;\n}\n.bottom[data-v-ae5542ec] {\n  height: 1.28rem;\n  width: 100%;\n}\n.fade-enter-active[data-v-ae5542ec] {\n  -webkit-animation: fade-in 0.5s;\n  animation: fade-in 0.5s;\n}\n.fade-leave-active[data-v-ae5542ec] {\n  -webkit-animation: fade-out 0.5s;\n  animation: fade-out 0.5s;\n}","",{version:3,sources:["E:/ABP/YLMIS/webApp/ylwebappPwa/src/view/Main.vue"],names:[],mappings:";AACA;EACE,aAAa;EACb,YAAY;CACb;AACD;EACE,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,6BAA6B;EAC7B,+BAA+B;EAC/B,uBAAuB;EACvB,oBAAoB;EACpB,mBAAmB;EACnB,gBAAgB;EAChB,UAAU;EACV,QAAQ;EACR,SAAS;EACT,sCAAsC;EACtC,uBAAuB;CACxB;AACD;EACE,oBAAoB;EACpB,YAAY;EACZ,QAAQ;EACR,eAAe;CAChB;AACD;EACE,eAAe;EACf,uBAAuB;EACvB,eAAe;EACf,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,qBAAqB;EACrB,mBAAmB;CACpB;AACD;EACE,eAAe;CAChB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,gBAAgB;EAChB,YAAY;CACb;AACD;EACE,gCAAgC;EAChC,wBAAwB;CACzB;AACD;EACE,iCAAiC;EACjC,yBAAyB;CAC1B",file:"Main.vue",sourcesContent:["\n.main[data-v-ae5542ec] {\n  height: 100%;\n  width: 100%;\n}\n.menu[data-v-ae5542ec] {\n  width: 100%;\n  height: 1.28rem;\n  line-height: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0.08rem 0.266667rem;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  white-space: nowrap;\n  text-align: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-top: 0.026667rem solid #e1e5ea;\n  background-color: #fff;\n}\n.menu .menu-item[data-v-ae5542ec] {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  color: #90979e;\n}\n.menu .menu-item i[data-v-ae5542ec] {\n  display: block;\n  font-size: 0.586667rem;\n  height: 0.8rem;\n  line-height: 0.8rem;\n}\n.menu .menu-item .menu-item-text[data-v-ae5542ec] {\n  display: block;\n  height: 0.32rem;\n  line-height: 0.32rem;\n  font-size: 0.32rem;\n}\n.menu .menu-item-hover[data-v-ae5542ec] {\n  color: #2b5e93;\n}\n.menu .menu-item-hover i[data-v-ae5542ec] {\n  font-size: 0.693333rem;\n}\n.menu .menu-item-hover .menu-item-text[data-v-ae5542ec] {\n  font-size: 0.373333rem;\n}\n.bottom[data-v-ae5542ec] {\n  height: 1.28rem;\n  width: 100%;\n}\n.fade-enter-active[data-v-ae5542ec] {\n  -webkit-animation: fade-in 0.5s;\n  animation: fade-in 0.5s;\n}\n.fade-leave-active[data-v-ae5542ec] {\n  -webkit-animation: fade-out 0.5s;\n  animation: fade-out 0.5s;\n}"],sourceRoot:""}])},"sWj/":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={data:function(){return{activeName:""}},methods:{_goUrl:function(e){this.$router.push({path:e})},_isActive:function(e){if(e===this.activeName)return"menu-item-hover"}},mounted:function(){this.activeName=this.$route.name},watch:{$route:function(e,n){console.log(e.name),this.activeName=e.name}}},a={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"main"},[t("transition",{attrs:{name:"fade"}},[t("router-view")],1),e._v(" "),t("div",{staticClass:"bottom"}),e._v(" "),t("div",{staticClass:"menu"},[t("div",{staticClass:"menu-item",class:e._isActive("主页"),on:{click:function(n){e._goUrl("/home")}}},[t("i",{staticClass:"fa fa-home"}),e._v(" "),t("span",{staticClass:"menu-item-text"},[e._v("主页")])]),e._v(" "),t("div",{staticClass:"menu-item",class:e._isActive("菜单"),on:{click:function(n){e._goUrl("/menu")}}},[t("i",{staticClass:"fa fa-th-large"}),e._v(" "),t("span",{staticClass:"menu-item-text"},[e._v("菜单")])]),e._v(" "),t("div",{staticClass:"menu-item",class:e._isActive("消息"),on:{click:function(n){e._goUrl("/message")}}},[t("i",{staticClass:"fa fa-bell"}),e._v(" "),t("span",{staticClass:"menu-item-text"},[e._v("消息")])]),e._v(" "),t("div",{staticClass:"menu-item",class:e._isActive("我的"),on:{click:function(n){e._goUrl("/user")}}},[t("i",{staticClass:"fa fa-user"}),e._v(" "),t("span",{staticClass:"menu-item-text"},[e._v("我的")])])])],1)},staticRenderFns:[]};var A=t("Z0/y")(i,a,!1,function(e){t("0a8g")},"data-v-ae5542ec",null);n.default=A.exports}});
//# sourceMappingURL=7.d49ae2deda1fb500bb88.js.map