import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import { store } from './store/store';

import { routes } from './routes';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes,
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
