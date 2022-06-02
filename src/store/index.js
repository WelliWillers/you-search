import Vue from 'vue';
import Vuex from 'vuex'

import video from './video'

Vue.use(Vuex)

export const modules = {
  video
}

const store = new Vuex.Store({
  modules
})

export default store