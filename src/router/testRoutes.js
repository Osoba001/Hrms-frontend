import { ROUTES } from '@/global/routes'
import LoginVue from '@/views/auth/Login.vue'
import { createRouter, createWebHistory } from 'vue-router'
import adminRoutes from '@/router/adminRoutes'
import hrRoutes from '@/router/hrRoutes'
import managerRoutes from '@/router/managerRoutes'
import staffRoutes from '@/router/staffRoutes'
import store from '@/store'

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    children: [
      { path: '/auth/login', name: ROUTES.login, component: LoginVue },
    ],
  },
  {
    path: '/admin',
    name: 'Admin',
    beforeEnter: (to, from, next) => {
      store.getters['appStore/authenticated'] ? next() : next({ name: 'Login' })
    },
    children: adminRoutes,
  },
  {
    path: '/hr',
    name: 'Human Resource',
    beforeEnter: (to, from, next) => {
      store.getters['appStore/authenticated'] ? next() : next({ name: 'Login' })
    },
    children: hrRoutes,
  },
  {
    path: '/manager',
    name: 'Manager',
    beforeEnter: (to, from, next) => {
      store.getters['appStore/authenticated'] ? next() : next({ name: 'Login' })
    },
    children: managerRoutes,
  },
  {
    path: '/staff',
    name: 'Staff',
    beforeEnter: (to, from, next) => {
      store.getters['appStore/authenticated'] ? next() : next({ name: 'Login' })
    },
    children: staffRoutes,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router

// import store from '@/store'
// import EmployeesVue from '@/views/app/admin/Employees.vue'
// import BioVue from '@/views/app/dashboardTabs/Bio.vue'
// import CertificationsVue from '@/views/app/dashboardTabs/Certifications.vue'
// import ConfirmationVue from '@/views/app/dashboardTabs/Confirmation.vue'
// import EmploymentHistoryVue from '@/views/app/dashboardTabs/EmploymentHistory.vue'
// import JobVue from '@/views/app/dashboardTabs/Job.vue'
// import HRLeaveVue from '@/views/app/hr/HRLeave.vue'
// import HRDashboardStatsVue from '@/views/app/HRDashboardStats.vue'
// import TeamMembersLeaveVue from '@/views/app/manager/TeamMembersLeave.vue'
// import DepartmentVue from '@/views/app/sidebarTabs/Department.vue'
// import LeaveVue from '@/views/app/sidebarTabs/Leave.vue'
// import ProjectsVue from '@/views/app/sidebarTabs/Projects.vue'
// import StaffDashboardStatsVue from '@/views/app/StaffDashboardStats.vue'
// import LoginVue from '@/views/auth/Login.vue'
// import { ROUTES } from '@/global/routes'

// const routes = [
//   {
//     path: '/auth',
//     name: 'Auth',
//     children: [
//       { path: '/auth/login', name: ROUTES.login, component: LoginVue },
//     ],
//   },
//   {
//     path: '/staff',
//     name: 'Staff',
//     beforeEnter: (to, from, next) => {
//       store.getters['appStore/authenticated'] ? next() : next({ name: 'Login' })
//     },
//     children: [
//       { path: '/staff/dashboard', component: StaffDashboardStatsVue },
//       { path: '/staff/bio', component: BioVue },
//       { path: '/staff/job', component: JobVue },
//       { path: '/staff/employment-history', component: EmploymentHistoryVue },
//       { path: '/staff/certifications', component: CertificationsVue },
//       { path: '/staff/confirmation', component: ConfirmationVue },
//       { path: '/staff/projects', component: ProjectsVue },
//       { path: '/staff/leave', component: LeaveVue },
//     ],
//   },
//   {
//     path: '/hr',
//     name: 'Human Resource',
//     beforeEnter: (to, from, next) => {
//       store.getters['appStore/authenticated'] ? next() : next({ name: 'Login' })
//     },
//     children: [
//       { path: '/hr/dashboard', component: HRDashboardStatsVue },
//       { path: '/hr/employees', component: EmployeesVue },
//       { path: '/hr/leave', component: HRLeaveVue },
//     ],
//   },
//   {
//     path: '/admin',
//     name: 'Admin',
//     beforeEnter: (to, from, next) => {
//       store.getters['appStore/authenticated'] ? next() : next({ name: 'Login' })
//     },
//     children: [
//       { path: '/admin/employees', component: EmployeesVue },
//       { path: '/admin/departments', component: DepartmentVue },
//     ],
//   },
//   {
//     path: '/manager',
//     name: 'Manager',
//     beforeEnter: (to, from, next) => {
//       store.getters['appStore/authenticated'] ? next() : next({ name: 'Login' })
//     },
//     children: [
//       { path: '/manager/dashboard', component: StaffDashboardStatsVue },
//       { path: '/manager/bio', component: BioVue },
//       { path: '/manager/job', component: JobVue },
//       { path: '/manager/employment-history', component: EmploymentHistoryVue },
//       { path: '/manager/certifications', component: CertificationsVue },
//       { path: '/manager/confirmation', component: ConfirmationVue },
//       { path: '/manager/projects', component: ProjectsVue },
//       { path: '/manager/leave', component: LeaveVue },
//       { path: '/manager/leave/team-members', component: TeamMembersLeaveVue },
//     ],
//   },
// ]
