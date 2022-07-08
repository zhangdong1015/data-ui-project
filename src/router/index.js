import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/components/Login.vue'
import Menu from '@/components/Menu.vue'
import Config from '@/components/Config.vue'
import Template from '@/components/Template.vue'
 

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/Menu',
    name: 'menu',
    component: Menu
  },
  {
    path: '/Config',
    name: 'config',
    component: Config
  },
  {
    path: '/Template',
    name: 'template',
    component: Template
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
