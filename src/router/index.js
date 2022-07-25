import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'
import Login from '@/views/auth/Login.vue'
import Signup from '@/views/auth/Signup.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home' },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: 'Login' },
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: { title: 'Signup' },
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound,
    meta: { title: '404 Page not found' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
