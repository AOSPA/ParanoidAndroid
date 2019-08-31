import Vue from 'vue'
import Vuex from 'vuex'

import { fetchDevices, fetchBuilds } from '../services/github';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    devices: [],
    builds: [],
    device: {},
    deviceLoader: true,
    buildLoader: true,
    expandedBuild: null
  },
  mutations: {
    setDevices(state, devices) {
      state.devices = devices
    },
    setDevice(state, device) {
      state.device = device
    },
    setBuilds(state, builds) {
      state.builds = builds
    },
    updateDeviceLoader(state, status) {
      state.deviceLoader = status
    },
    updateBuildLoader(state, status) {
      state.buildLoader = status
    },
    setExpandedBuild(state, index) {
      state.expandedBuild = index;
    }
  },
  actions: {
    async fetchDevices({ commit }) {

      const devices = await fetchDevices();

      if (devices) {
        commit('setDevices', devices);
        commit('updateDeviceLoader', false)
      }

    },
    async fetchBuilds({ commit, state }, props) {

      commit('updateBuildLoader', true)
      commit('setBuilds', [])

      let builds = await fetchBuilds(props.codename);

      if (builds.length === 0 && state.device.codename) {
        M.toast({ html: `No builds found. Check again later.` })
      }

      commit('setBuilds', builds);

      commit('updateBuildLoader', false)

    },
    filterDevice({ commit, state }, props) {
      state.devices
        .map(brand => brand.devices
          .filter(devices => devices.codename == props.codename)
          .map(device => commit('setDevice', device))
        )

    },
    getIndexOfExpandedBuild({ commit, state }, filename) {
      let index = state.builds.map((e, i) => e.filename == filename ? i : null).filter((e) => e != null)
      commit('setExpandedBuild', index)
    }

  },
})