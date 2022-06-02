import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import GlobalComponents from './components'
import vuetify from './plugins/vuetify'
import veevalidate from './plugins/veevalidate'

Vue.use(GlobalComponents)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  veevalidate,
  store,
  render: h => h(App)
}).$mount('#app')
