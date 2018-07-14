import Vue from "vue";
import Router from "vue-router";
import Myproduct from '@/views/myproduct/myproduct.vue';
import Userindex from '@/views/userindex/userindex.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      name:'Myproduct',
      component:Myproduct
    },
    {
      path:'/userindex',
      name:"Userindex",
      component:Userindex
    }
  ]
});
