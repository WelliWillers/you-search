import Vue from 'vue';
import Vuex from 'vuex'

import video from './video'
import loader from './loader'
import playlist from './playlist'

Vue.use(Vuex)

export const modules = {
  video,
  playlist,
  loader
}

const store = new Vuex.Store({
  modules
})

export default store