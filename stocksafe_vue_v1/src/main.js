import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Chart, registerables } from "chart.js";

import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;
Chart.register(...registerables);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
