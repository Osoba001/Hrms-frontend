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
import Employees from '@/views/app/admin/Employees.vue'
import Department from '@/views/app/sidebarTabs/Department'
import Leave from '@/views/app/sidebarTabs/Leave'
import TeamMembersLeave from '@/views/app/manager/TeamMembersLeave.vue'
import PersonalInfo from '@/views/app/sidebarTabs/PersonalInfo'
import Projects from '@/views/app/sidebarTabs/Projects'
import StaffDashboardStats from '@/views/app/StaffDashboardStats.vue'
import HRDashboardStats from '@/views/app/HRDashboardStats.vue'

import { account_type, user_info_updated } from '@/data'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: { title: 'CypherCrescent Portal' },
    children: [
      {
        path: '/bio',
        component: Bio,
        beforeEnter: (to, from, next) => {
          account_type === 'staff' && !user_info_updated
            ? next()
            : next('/dashboard')
        },
      },
      {
        path: '/job',
        component: Job,
        beforeEnter: (to, from, next) => {
          account_type === 'staff' && !user_info_updated
            ? next()
            : next('/dashboard')
        },
      },
      {
        path: '/employment-history',
        component: EmploymentHistory,
        beforeEnter: (to, from, next) => {
          account_type === 'staff' && !user_info_updated
            ? next()
            : next('/dashboard')
        },
      },
      {
        path: '/certifications',
        component: Certifications,
        beforeEnter: (to, from, next) => {
          account_type === 'staff' && !user_info_updated
            ? next()
            : next('/dashboard')
        },
      },
      {
        path: '/confirmation',
        component: Confirmation,
        beforeEnter: (to, from, next) => {
          account_type === 'staff' && !user_info_updated
            ? next()
            : next('/dashboard')
        },
      },
      {
        path: '/dashboard',
        component:
          account_type === 'HR'
            ? HRDashboardStats
            : account_type === 'staff'
            ? StaffDashboardStats
            : StaffDashboardStats,
        beforeEnter: (to, from, next) => {
          account_type === 'admin' ? next('/employees') : next()
        },
      },
      {
        path: '/employees',
        component: Employees,
        beforeEnter: (to, from, next) => {
          account_type === 'admin' || account_type === 'HR' ? next() : next('/')
        },
      },
      {
        path: '/projects',
        component: Projects,
        beforeEnter: (to, from, next) => {
          account_type === 'staff' || account_type === 'manager'
            ? next()
            : next('/')
        },
      },
      {
        path: '/leave',
        component: Leave,
        beforeEnter: (to, from, next) => {
          account_type === 'manager' || account_type === 'staff'
            ? next()
            : next('/dashboard')
        },
      },
      {
        path: '/leave/team-members',
        component: TeamMembersLeave,
        beforeEnter: (to, from, next) => {
          account_type === 'manager' ? next() : next('/leave')
        },
      },
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
