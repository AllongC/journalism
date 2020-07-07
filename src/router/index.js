import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


import LoginPage from '@/views/LoginPage'
import RegisterPage from '@/views/RegisterPage'

import DetailPage from '../views/category/DetailPage'

import CenterPage from '@/views/personal/CenterPage'
import EditPage from '@/views/personal/EditPage'
import FocusPage from '@/views/personal/FocusPage'
import CollectPage from '@/views/personal/CollectPage'
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
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },

  {
    path: '/detail/:id',
    name: 'Detail',
    component: DetailPage
  },

  {
    path: '/center',
    name: 'Center',
    component: CenterPage,
    meta: {
      auth: true
    }
  },
  {
    path: '/edit',
    name: 'Edit',
    component: EditPage,
    meta: {
      auth: true
    }
  },
  {
    path: '/focus',
    name: 'Focus',
    component: FocusPage,
    meta: {
      auth: true
    }
  },
  {
    path: '/collect',
    name: 'Collect',
    component: CollectPage,
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
