import Vue from "vue";
import Router from "vue-router";
import myproduct from "@/views/myproduct/myproduct.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "myproduct",
      component: myproduct
    }
  ]
});
