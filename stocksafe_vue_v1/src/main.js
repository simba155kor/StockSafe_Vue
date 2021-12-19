import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Chart from "chart.js";
// import chart1 from "@/js/demo/chart-area-demo.js";

import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;
// Vue.use(Chart);

// Vue.use(chart1);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
