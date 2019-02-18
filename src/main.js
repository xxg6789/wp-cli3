import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

import './assets/css/style.css'
import './assets/css/base.css'
import './assets/css/bootstrap.css'

import axios from './plugins/axios';
Vue.use(axios);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
