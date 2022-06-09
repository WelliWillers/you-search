import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import GlobalComponents from './components'

import vuetify from './plugins/vuetify'
import toast from './plugins/toast-notifications'
import veevalidate from './plugins/veevalidate'

import {tools} from './functions'
Vue.prototype.$tools = tools

Vue.use(GlobalComponents)

Vue.config.productionTip = false

window._Vue = new Vue({
  router,
  vuetify,
  toast,
  veevalidate,
  store,
  render: h => h(App)
}).$mount('#app')
