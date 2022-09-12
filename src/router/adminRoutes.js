import { ROUTES } from '@/global/routes'
import EmployeesVue from '@/views/app/admin/Employees.vue'
import DepartmentVue from '@/views/app/sidebarTabs/Department.vue'

const routes = [
  {
    path: '/admin/employees',
    name: ROUTES.admin.employees,
    component: EmployeesVue,
  },
  {
    path: '/admin/departments',
    name: ROUTES.admin.departments,
    component: DepartmentVue,
  },
]

export default routes
