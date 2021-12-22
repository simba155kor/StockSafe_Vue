import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login_state: false,
    user_id : "",
    user_name : "",
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
    }
  },
  actions: {},
  modules: {},
});
