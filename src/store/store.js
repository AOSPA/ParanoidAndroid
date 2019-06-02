import Vue from 'vue'
import Vuex from 'vuex'
import configs from '../configs'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        devices: [],
        builds: [],
        device: {}
    },
    mutations: {
        setDevices(state, devices){
            state.devices = devices
        },
        setDevice(state, device){
            state.device = device
        },
        setBuilds(state, builds){
            state.builds = builds  
        },
    },
    actions: {
        fetchDevices({commit}) {
            fetch(configs.API_BASE)
            .then(res => res.json()
            .then(json => commit('setDevices', json)))
        },
        fetchBuilds({commit}, props){
            commit('setBuilds', [])
            fetch(configs.API_BASE + `/${props.codename}/builds`)
            .then(res => res.json()
            .then(json => commit('setBuilds', json.builds) ))
        },
        filterDevice({commit, state}, props){
            state.devices
            .map(brand => brand.devices
                .filter(devices => devices.codename == props.codename)
                .map(device => commit('setDevice', device))
            )
        }

    },
})