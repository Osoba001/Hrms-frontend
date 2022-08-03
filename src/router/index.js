import { createWebHistory, createRouter } from 'vue-router'

import Dashboard from '@/views/app/Dashboard.vue'
import NotFound from '@/views/general/NotFound.vue'
import Login from '@/views/auth/Login.vue'
import Signup from '@/views/auth/Signup.vue'
import Bio from '@/views/app/dashboardTabs/Bio.vue'
import Job from '@/views/app/dashboardTabs/Job.vue'
import EmploymentHistory from '@/views/app/dashboardTabs/EmploymentHistory.vue'
import Certifications from '@/views/app/dashboardTabs/Certifications.vue'
import Confirmation from '@/views/app/dashboardTabs/Confirmation.vue'
import Admin from '@/views/auth/Admin.vue'
import Employees from '@/views/app/admin/Employees.vue'
import Department from '@/views/app/sidebarTabs/Department'
import Leave from '@/views/app/sidebarTabs/Leave'
import PersonalInfo from '@/views/app/sidebarTabs/PersonalInfo'
import Projects from '@/views/app/sidebarTabs/Projects'

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
      { path: '/employees', component: Employees },
      { path: '/projects', component: Projects },
      { path: '/leave', component: Leave },
      { path: '/department', component: Department },
      { path: '/profile', component: PersonalInfo },
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
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: { title: 'Admin' },
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
