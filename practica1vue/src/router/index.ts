import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import LoginView from '@/views/login/LoginView.vue'
import RegisterView from '@/views/login/RegisterView.vue'
import RecoveryPasswordView from '@/views/login/RecoveryPasswordView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect(to) {
      return { name: 'login' }
    },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/password-recovery',
    name: 'password-recovery',
    component: RecoveryPasswordView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
