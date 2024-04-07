import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import LoginView from '@/views/login/LoginView.vue'
import RegisterView from '@/views/login/RegisterView.vue'
import RecoveryPasswordView from '@/views/login/RecoveryPasswordView.vue'
import NoAuthView from '@/views/NoAuthView.vue'
import ProtectedView from '@/views/login/ProtectedView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: NoAuthView,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/password-recovery',
    name: 'password-recovery',
    component: RecoveryPasswordView,
    meta: {
      requireAuth: false
    }    
  },
  {
    path: '/protected-url',
    name: 'protected-url',
    component: ProtectedView,
    meta: {
      requireAuth: true
    }    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to,from.next)=>{
//   const auth = getAuth().currentUser != null
//   const needAuth = to.meta.requireAuth
//   if(needAuth && !auth) {
//     next('login')
//   }
// })

export default router
