import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";

//배포에 대한 팁 (경고문) 출력 여부
Vue.config.productionTip = false;

new Vue({
  store: store,
  router: router,
  render: (h) => h(App),
}).$mount("#app");
