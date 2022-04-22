import Vue from "vue";
import VueRouter from "vue-router";
import Toast from "vue-toastification";
import App from "./App.vue";
import "vue-toastification/dist/index.css";

import { store } from "./store/store";

import { routes } from "./routes";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes,
});

const options = {
  draggable: false,
};

Vue.use(Toast, {
  transition: "Vue-Toastification__fade",
  maxToasts: 1,
  newestOnTop: true,
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount("#app");
