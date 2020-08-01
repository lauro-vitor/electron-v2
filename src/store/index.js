import Vuex from 'vuex';
import Vue from 'vue';
import ModulesUser from './modules/user';
import ModulePerson from './modules/person';
import createCache from 'vuex-cache'
Vue.use(Vuex);

const store = new Vuex.Store({
    plugins:[createCache()],
    modules:{
        users: ModulesUser,
        persons: ModulePerson
    }
});

export default store;   