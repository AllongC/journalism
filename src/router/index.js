import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginPage from '@/views/LoginPage'
import RegisterPage from '@/views/RegisterPage'
import CenterPage from '@/views/personal/CenterPage'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  },

  {
    path: '/center',
    name: 'CenterPage',
    component: CenterPage,
    meta: {
      auth: true
    }
  }

]

const router = new VueRouter({
  routes
})

export default router
