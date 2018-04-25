import Vue from 'vue'
import Router from 'vue-router'


//account
const Login = resolve => require(['../view/account/Login.vue'], resolve);
const Registered = resolve => require(['../view/account/Registered.vue'], resolve);
const RetrievePwd = resolve => require(['../view/account/RetrievePwd.vue'], resolve);
//main
const Main = resolve => require(['../view/Main.vue'], resolve);
//home
const Home = resolve => require(['../view/Home'], resolve);

//menu
const Menu = resolve => require(['../view/menu'], resolve);
const MenuItem = resolve => require(['../view/menu/MenuItem.vue'], resolve);
//message
const Message = resolve => require(['../view/message'], resolve);

//user
const User = resolve => require(['../view/user'], resolve);

//tip
const Page404 = resolve => require(['../view/tip/Page404.vue'], resolve);
const dynamicPage = resolve => require(['../view/config/dynamicPage.vue'], resolve);

Vue.use(Router)

export default new Router({
  mode:"hash",
  routes: [
    //account
    {path: '/Login', component: Login, name: '登录' },
    {path: '/Registered', component: Registered },
    {path: '/LoRetrievePwdgin', component: RetrievePwd },
    {
      path: '/',  
      component: Main,
      redirect: 'Home',
      name: '',
      children: [
        { path: '/Home', component: Home, name: '主页'  },
        { path: '/Menu', component: Menu, name: '菜单'  },
        { path: '/Message', component: Message, name: '消息'  },
        { path: '/User', component: User, name: '我的'  },
      ]
    },
    { path: '/MenuItem', component: MenuItem, name: 'MenuItem'  },
    { path: '/dynamicPage/:tableName', component: dynamicPage, name: '独立动态页面'  },
    //tip
    {path: '*',component: Page404,name: '404页面'} 
  ]
})
