import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allProduct: []
  },
  getters: {
    set_AllProduct: state => state.allProduct,
  },
  mutations: {
    set_AllProduct (state, obj) {
      state.allProduct = obj
    }
  },
  actions: {
    set_AllProduct ({ commit }, obj) {
      commit('set_AllProduct', obj)
    }
  },
});
