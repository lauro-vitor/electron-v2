import Vue from 'vue'
import App from './App.vue'
import router from './router/'

Vue.config.productionTip = false

import store from './store/'
import vuetify from './plugins/vuetify';

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
