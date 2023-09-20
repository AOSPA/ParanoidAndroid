// rootStore.js
import Vue from 'vue';
import Vuex from 'vuex';
import { createStore } from 'vuex'
import { deviceStore } from './deviceStore';
import { blogStore } from './blogStore';

Vue.use(Vuex);

export const rootStore = new Vuex.Store({
  modules: {
    device: deviceStore,
    blog: blogStore,
  },
});

export default rootStore;