import { createWebHistory, createRouter } from 'vue-router'

import Dashboard from '@/views/app/Dashboard.vue'
import NotFound from '@/views/general/NotFound.vue'
import Login from '@/views/auth/Login.vue'
import Signup from '@/views/auth/Signup.vue'
import Bio from '@/views/app/Bio.vue'
import Job from '@/views/app/Job.vue'
import EmploymentHistory from '@/views/app/EmploymentHistory.vue'
import Certifications from '@/views/app/Certifications.vue'
import Confirmation from '@/views/app/Confirmation.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: { title: 'Dashboard' },
    children: [
      { path: '/bio', component: Bio },
      { path: '/job', component: Job },
      { path: '/employment-history', component: EmploymentHistory },
      { path: '/certifications', component: Certifications },
      { path: '/confirmation', component: Confirmation },
    ],
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
