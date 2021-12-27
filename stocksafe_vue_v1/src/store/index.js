import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login_state: false,
    user_id : "",
    user_name: "",
    like_stock: {},
    kospi_like_stock: [],
    now_page_state : false,
  },
  mutations: {
    SET_LOGIN_STATE(state, data) {
      state.login_state = true;
      state.user_id = data.id;
      state.user_name = data.name;
    },
    SET_LOGOUT_STATE(state) {
      state.login_state = false;
      state.user_id = null;
      state.user_name = null;
    },
    SET_LIKE_STOCK(state, data) {
      var arr = new Array();
      
      state.like_stock = data;
      
      state.like_stock.forEach(element => {
        arr[element.predictId*1] = 1;
      });

      state.kospi_like_stock = arr;
    },
    SET_TRUE_NOW_PAGE_STATE(state, num) {
      if (state.kospi_like_stock[num * 1] == 1) {
        console.log(">?B");
        state.now_page_state = true;
      }
      else  state.now_page_state = false;
    },
    SET_FALSE_NOW_PAGE_STATE(state) {
      state.now_page_state = false;
    },
  },
  getters: {
    getLoginState(state) {
      return state.login_state;
    },
    getName(state) {
      return state.user_name;
    },
    getId(state) {
      return state.user_id;
    },
    getNowPageState(state) {
      return state.now_page_state;
    },
    
  },
  actions: {
    
  },
  modules: {},
  plugins: [createPersistedState()],
});
