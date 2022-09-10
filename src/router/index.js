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
import { ACCOUNT_TYPES } from '@/global/accountTypes'
import { ROUTES } from '@/global/routes'

const routes = [
  {
    path: '/login',
    name: ROUTES.login,
    component: Login,
    meta: { title: 'Login' },
  },
  {
    path: '/',
    name: ROUTES.home,
    component: Dashboard,
    meta: { title: 'CypherCrescent Portal' },
    beforeEnter: (to, from, next) => {
      store.getters['appStore/authenticated'] ? next() : next({ name: 'Login' })
    },
    children: [
      {
        path: '/bio',
        component: Bio,
        name: ROUTES.bio,
        beforeEnter: (to, from, next) => {
          if (
            (store.getters['appStore/user']?.accountType ===
              ACCOUNT_TYPES.staff ||
              store.getters['appStore/user']?.accountType ===
                ACCOUNT_TYPES.manager) &&
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
        name: ROUTES.job,
        beforeEnter: (to, from, next) => {
          if (
            (store.getters['appStore/user']?.accountType ===
              ACCOUNT_TYPES.staff ||
              store.getters['appStore/user']?.accountType ===
                ACCOUNT_TYPES.manager) &&
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
        name: ROUTES.employmentHistory,
        beforeEnter: (to, from, next) => {
          if (
            (store.getters['appStore/user']?.accountType ===
              ACCOUNT_TYPES.staff ||
              store.getters['appStore/user']?.accountType ===
                ACCOUNT_TYPES.manager) &&
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
        name: ROUTES.certifications,
        beforeEnter: (to, from, next) => {
          if (
            (store.getters['appStore/user']?.accountType ===
              ACCOUNT_TYPES.staff ||
              store.getters['appStore/user']?.accountType ===
                ACCOUNT_TYPES.manager) &&
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
        name: ROUTES.confirmation,
        component: Confirmation,
        beforeEnter: (to, from, next) => {
          if (
            (store.getters['appStore/user']?.accountType ===
              ACCOUNT_TYPES.staff ||
              store.getters['appStore/user']?.accountType ===
                ACCOUNT_TYPES.manager) &&
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
        name: ROUTES.staffDashboard,
        beforeEnter: (to, from, next) => {
          if (
            store.getters['appStore/user']?.accountType === ACCOUNT_TYPES.admin
          ) {
            next('/employees')
          } else if (
            store.getters['appStore/user']?.accountType === ACCOUNT_TYPES.HR
          ) {
            next('/dashboard/human-resources')
          } else {
            next()
          }
        },
      },
      {
        path: '/dashboard/human-resources',
        component: HRDashboardStats,
        name: ROUTES.hrDashboard,
        beforeEnter: (to, from, next) => {
          store.getters['appStore/user']?.accountType === ACCOUNT_TYPES.HR
            ? next()
            : next('/')
        },
      },
      {
        path: '/employees',
        component: Employees,
        name: ROUTES.employees,
        beforeEnter: (to, from, next) => {
          store.getters['appStore/user']?.accountType === ACCOUNT_TYPES.admin ||
          store.getters['appStore/user']?.accountType === ACCOUNT_TYPES.HR
            ? next()
            : next('/')
        },
      },
      {
        path: '/projects',
        component: Projects,
        name: ROUTES.projects,
        beforeEnter: (to, from, next) => {
          store.getters['appStore/user']?.accountType === ACCOUNT_TYPES.staff ||
          store.getters['appStore/user']?.accountType === ACCOUNT_TYPES.manager
            ? next()
            : next('/')
        },
      },
      {
        path: '/leave',
        component: Leave,
        name: ROUTES.leave,
        beforeEnter: (to, from, next) => {
          if (
            store.getters['appStore/user']?.accountType ===
              ACCOUNT_TYPES.manager ||
            store.getters['appStore/user']?.accountType === ACCOUNT_TYPES.staff
          ) {
            next()
          } else if (
            store.getters['appStore/user']?.accountType === ACCOUNT_TYPES.HR
          ) {
            next('/leave/human-resources')
          } else {
            next('/')
          }
        },
      },
      {
        path: '/leave/human-resources',
        component: HRLeave,
        name: ROUTES.hrLeave,
        beforeEnter(to, from, next) {
          store.getters['appStore/user']?.accountType === ACCOUNT_TYPES.HR
            ? next()
            : next('/leave')
        },
      },
      {
        path: '/leave/team-members',
        name: ROUTES.viewTeamLeaveInfo,
        component: TeamMembersLeave,
        beforeEnter: (to, from, next) => {
          store.getters['appStore/user']?.accountType === ACCOUNT_TYPES.manager
            ? next()
            : next('/leave')
        },
      },
      {
        path: '/department',
        name: ROUTES.departments,
        component: Department,
      },
      { path: '/profile', component: PersonalInfo },
    ],
  },
  {
    path: '/change-password',
    name: ROUTES.changePassword,
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
