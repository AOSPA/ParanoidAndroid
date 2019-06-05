import Vue from 'vue'
import Vuex from 'vuex'
import configs from '../configs'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        devices: [],
        builds: [],
        device: {},
        deviceLoader: true,
        buildLoader: true
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
        }
    },
    actions: {
        fetchDevices({ commit }) {
            commit('updateDeviceLoader', true)
            fetch(configs.API_BASE)
                .then(res => res.json()
                    .then(json => commit('setDevices', json)))
                .finally(res => commit('updateDeviceLoader', false))
        },
        fetchBuilds({ commit }, props) {

            commit('updateBuildLoader', true)
            commit('setBuilds', [])
            fetch(configs.API_BASE + `/${props.codename}/builds`)
                .then(res => res.json()
                    .then(json => {

                        if (json.builds.length === 0) {
                            M.toast({ html: `No builds found. Check again later.` })
                        } else {
                            commit('setBuilds', json.builds)
                        }

                    }))
                .catch(e => {
                    M.toast({ html: `an error occurred. try again later.` })
                })
                .finally(() => commit('updateBuildLoader', false))


        },
        filterDevice({ commit, state }, props) {
            state.devices
                .map(brand => brand.devices
                    .filter(devices => devices.codename == props.codename)
                    .map(device => commit('setDevice', device))
                )

        }

    },
})