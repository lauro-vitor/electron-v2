import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import personRouter from './personRouter'
import userRouter from './userRouter'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ...userRouter,
  ...personRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
