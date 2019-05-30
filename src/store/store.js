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
        fetchSupportedDevices(state){
            fetch("https://krakenapi.andersonmendess.now.sh/devices")
            .then(res => res.json().then(json => state.supportedDevices = json ))
        },
        fetchBuildsByCodename(state, props){
            fetch(`https://krakenapi.andersonmendess.now.sh/devices/${props.codename}/builds`)
            .then(res => res.json().then(json => state.builds = json.builds ))
        },
        setDevice(state, props){            
            state.supportedDevices
            .map(brand => brand.devices
                .filter(devices => devices.codename == props.codename)
                .map(device => state.device = device)
            )

        }
    }
})