import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import LoginPage from '@/views/LoginPage'
import RegisterPage from '@/views/RegisterPage'

import CenterPage from '@/views/personal/CenterPage'
import editPage from '@/views/personal/editPage'
import text from '@/views/personal/text'


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
  },
  {
    path: '/edit',
    name: 'editPage',
    component: editPage,
    meta: {
      auth: true
    }
  },
  {
    path: '/text',
    name: ' text',
    component: text,
    meta: {
      auth: true
    }
  }

]

const router = new VueRouter({
  routes
})

export default router
