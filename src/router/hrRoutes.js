import { ROUTES } from '@/global/routes'
import EmployeesVue from '@/views/app/admin/Employees.vue'
import HRLeaveVue from '@/views/app/hr/HRLeave.vue'
import HRDashboardStatsVue from '@/views/app/HRDashboardStats.vue'

const routes = [
  {
    path: '/hr/dashboard',
    name: ROUTES.hr.dashboard,
    component: HRDashboardStatsVue,
  },
  {
    path: '/hr/employees',
    name: ROUTES.hr.employees,
    component: EmployeesVue,
  },
  { path: '/hr/leave', name: ROUTES.hrLeave, component: HRLeaveVue },
]
export default routes
