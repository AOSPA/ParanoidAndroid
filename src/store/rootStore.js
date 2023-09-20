import Vue from 'vue';
import Vuex from 'vuex';
import { blogStore } from './blogStore';
import { deviceStore } from './deviceStore';

Vue.use(Vuex);

export const rootStore = new Vuex.Store({
  modules: {
    device: deviceStore,
    blog: blogStore,
  },
});

export default rootStore;