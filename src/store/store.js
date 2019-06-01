import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        supportedDevices: [],
        builds: [],
        device: {}
    },
    mutations: {
        setDevices(state, devices){
            state.supportedDevices = devices
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
            fetch("https://krakenapi.andersonmendess.now.sh/devices")
            .then(res => res.json()
            .then(json => commit('setDevices', json)))
        },
        fetchBuilds({commit}, props){
            commit('setBuilds', [])
            fetch(`https://krakenapi.andersonmendess.now.sh/devices/${props.codename}/builds`)
            .then(res => res.json()
            .then(json => commit('setBuilds', json.builds) ))
        },
        filterDevice({commit, state}, props){
            state.supportedDevices
            .map(brand => brand.devices
                .filter(devices => devices.codename == props.codename)
                .map(device => commit('setDevice', device))
            )
        }

    },
})