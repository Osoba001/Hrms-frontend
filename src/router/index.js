import { createWebHistory, createRouter } from 'vue-router'

import Dashboard from '@/views/app/Dashboard.vue'
import NotFound from '@/views/general/NotFound.vue'
import Bio from '@/views/app/dashboardTabs/Bio.vue'
import Job from '@/views/app/dashboardTabs/Job.vue'
import EmploymentHistory from '@/views/app/dashboardTabs/EmploymentHistory.vue'
import Certifications from '@/views/app/dashboardTabs/Certifications.vue'
import Confirmation from '@/views/app/dashboardTabs/Confirmation.vue'
import Employees from '@/views/app/admin/Employees.vue'
import Department from '@/views/app/sidebarTabs/Department'
import Leave from '@/views/app/sidebarTabs/Leave'
import HRLeave from '@/views/app/hr/HRLeave'
import TeamMembersLeave from '@/views/app/manager/TeamMembersLeave.vue'
import PersonalInfo from '@/views/app/sidebarTabs/PersonalInfo'
import Projects from '@/views/app/sidebarTabs/Projects'
import StaffDashboardStats from '@/views/app/StaffDashboardStats.vue'
import HRDashboardStats from '@/views/app/HRDashboardStats.vue'
import ChangePassword from '@/views/auth/ChangePassword.vue'
import Login from '@/views/auth/Login.vue'

import store from '@/store'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: 'Login' },
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: { title: 'CypherCrescent Portal' },
    beforeEnter: (to, from, next) => {
      store.getters['appStore/authenticated'] ? next() : next('/login')
    },
    children: [
      {
        path: '/bio',
        component: Bio,
        beforeEnter: (to, from, next) => {
          if (
            (store.getters['appStore/user']?.accountType === 'staff' ||
              store.getters['appStore/user']?.accountType === 'manager') &&
            !store.getters['appStore/user']?.userInfoUpdated
          ) {
            next()
          } else {
            next('/dashboard')
          }
        },
      },
      {
        path: '/job',
        component: Job,
        beforeEnter: (to, from, next) => {
          if (
            (store.getters['appStore/user']?.accountType === 'staff' ||
              store.getters['appStore/user']?.accountType === 'manager') &&
            !store.getters['appStore/user']?.userInfoUpdated
          ) {
            next()
          } else {
            next('/dashboard')
          }
        },
      },
      {
        path: '/employment-history',
        component: EmploymentHistory,
        beforeEnter: (to, from, next) => {
          if (
            (store.getters['appStore/user']?.accountType === 'staff' ||
              store.getters['appStore/user']?.accountType === 'manager') &&
            !store.getters['appStore/user']?.userInfoUpdated
          ) {
            next()
          } else {
            next('/dashboard')
          }
        },
      },
      {
        path: '/certifications',
        component: Certifications,
        beforeEnter: (to, from, next) => {
          if (
            (store.getters['appStore/user']?.accountType === 'staff' ||
              store.getters['appStore/user']?.accountType === 'manager') &&
            !store.getters['appStore/user']?.userInfoUpdated
          ) {
            next()
          } else {
            next('/dashboard')
          }
        },
      },
      {
        path: '/confirmation',
        component: Confirmation,
        beforeEnter: (to, from, next) => {
          if (
            (store.getters['appStore/user']?.accountType === 'staff' ||
              store.getters['appStore/user']?.accountType === 'manager') &&
            !store.getters['appStore/user']?.userInfoUpdated
          ) {
            next()
          } else {
            next('/dashboard')
          }
        },
      },
      {
        path: '/dashboard',
        component: StaffDashboardStats,
        beforeEnter: (to, from, next) => {
          if (store.getters['appStore/user']?.accountType === 'admin') {
            next('/employees')
          } else if (store.getters['appStore/user']?.accountType === 'HR') {
            next('/dashboard/human-resources')
          } else {
            next()
          }
        },
      },
      {
        path: '/dashboard/human-resources',
        component: HRDashboardStats,
        beforeEnter: (to, from, next) => {
          store.getters['appStore/user']?.accountType === 'HR'
            ? next()
            : next('/')
        },
      },
      {
        path: '/employees',
        component: Employees,
        beforeEnter: (to, from, next) => {
          store.getters['appStore/user']?.accountType === 'admin' ||
          store.getters['appStore/user']?.accountType === 'HR'
            ? next()
            : next('/')
        },
      },
      {
        path: '/projects',
        component: Projects,
        beforeEnter: (to, from, next) => {
          store.getters['appStore/user']?.accountType === 'staff' ||
          store.getters['appStore/user']?.accountType === 'manager'
            ? next()
            : next('/')
        },
      },
      {
        path: '/leave',
        component: Leave,
        beforeEnter: (to, from, next) => {
          if (
            store.getters['appStore/user']?.accountType === 'manager' ||
            store.getters['appStore/user']?.accountType === 'staff'
          ) {
            next()
          } else if (store.getters['appStore/user']?.accountType === 'HR') {
            next('/leave/human-resources')
          } else {
            next('/')
          }
        },
      },
      {
        path: '/leave/human-resources',
        component: HRLeave,
        beforeEnter(to, from, next) {
          store.getters['appStore/user']?.accountType === 'HR'
            ? next()
            : next('/leave')
        },
      },
      {
        path: '/leave/team-members',
        component: TeamMembersLeave,
        beforeEnter: (to, from, next) => {
          store.getters['appStore/user']?.accountType === 'manager'
            ? next()
            : next('/leave')
        },
      },
      { path: '/department', component: Department },
      { path: '/profile', component: PersonalInfo },
    ],
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: ChangePassword,
    meta: { title: 'Change Password' },
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound,
    meta: { title: '404 Page not found' },
  },
]

const appRouter = createRouter({
  history: createWebHistory(),
  routes: routes,
})

appRouter.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default appRouter
