import Vue from "vue";
import Router from "vue-router";
import Myproduct from '@/views/myproduct/myproduct.vue';
import Userindex from '@/views/userindex/userindex.vue';
import Showcontnet from '@/views/showproduct/showproduct.vue'
import Login from '@/views/login/login.vue'
import Register from '@/views/login/register.vue'
import Backpassword from '@/views/login/backpassword.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      name:'Myproduct',
      component:Myproduct,
    },
    {
      path:'/userindex',
      name:"Userindex",
      component:Userindex
    },
    {
      path:'/show',
      name:"Showcontnet",
      component:Showcontnet
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'/backpassword',
      name:'Backpassword',
      component:Backpassword
    }
    
  ]
});
