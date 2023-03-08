import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App.vue'
import router from './router'
import store from './store'

import './assets/main.css'

Vue.use(Vuetify)
const opts = {}
export default new Vuetify(opts)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

