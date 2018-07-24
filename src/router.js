import Vue from "vue";
import Router from "vue-router";
import Myproduct from '@/views/myproduct/myproduct.vue';
import Userindex from '@/views/userindex/userindex.vue';
import Showcontnet from '@/views/showproduct/showproduct.vue'
import Login from '@/views/login/login.vue'
import Register from '@/views/login/register.vue'
import Agreement from '@/views/login/agreement.vue'
import Backpassword from '@/views/login/backpassword.vue'
import Setting from '@/views/setting/setting.vue'
import Account from '@/views/account/account.vue'
import Message from '@/views/message/message.vue'
import Shopcart from '@/views/shopcart/shopcart.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      name:'Myproduct',
      component:Myproduct,
    },//产品首页
    {
      path:'/userindex',
      name:"Userindex",
      component:Userindex
    },//用户中心首页
    {
      path:'/show',
      name:"Showcontnet",
      component:Showcontnet
    },//产品详情页
    {
      path:'/login',
      name:'Login',
      component:Login
    },//登录
    {
      path:'/agreement',
      name:'Agreement',
      component:Agreement
    },//用户协议
    {
      path:'/register',
      name:'Register',
      component:Register
    },//注册页面
    {
      path:'/backpassword',
      name:'Backpassword',
      component:Backpassword
    },//找回密码
    {
      path:'/setting',
      name:'Setting',
      component:Setting
    },//设置页面
    {
      path:'/account',
      name:'Account',
      component:Account
    },//账户中心
    {
      path:'/message',
      name:'Message',
      component:Message
    },//消息中心
    {
      path:'/shopcart',
      name:'Shopcart',
      component:Shopcart
    },//购物车
    
  ]
});
