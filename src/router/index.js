import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboar from '@/views/Dashboar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Dashboar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
