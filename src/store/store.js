import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        supportedDevices: [],
        device: [],
    },
    mutations: {
        fetchSupportedDevices(state){
            fetch("https://krakenapi.andersonmendess.now.sh/devices")
            .then(res => res.json().then(json => state.supportedDevices = json ))
        }
    }
})