import Vue from 'vue'
import Vuex from 'vuex'
import module1 from './modules/module1';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        module1,
    },
    state: {
        systemList: [],
        role: '',
        type: ''
    },
    mutations: {
        SystemList(store, val) {
            store.systemList = val;
        },
        Role(store, val) {
            store.role = val;
        },
        Type(store, val) {
            store.type = val;
            console.log(store.type)
        }
    },
    actions: {}
})
