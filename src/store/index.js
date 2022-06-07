import Vue from 'vue';
import Vuex from 'vuex'

import video from './video'
import loader from './loader'

Vue.use(Vuex)

export const modules = {
  video,
  loader
}

const store = new Vuex.Store({
  modules
})

export default store