import { ROUTES } from '@/global/routes'
import BioVue from '@/views/app/dashboardTabs/Bio.vue'
import CertificationsVue from '@/views/app/dashboardTabs/Certifications.vue'
import ConfirmationVue from '@/views/app/dashboardTabs/Confirmation.vue'
import EmploymentHistoryVue from '@/views/app/dashboardTabs/EmploymentHistory.vue'
import JobVue from '@/views/app/dashboardTabs/Job.vue'
import LeaveVue from '@/views/app/sidebarTabs/Leave.vue'
import ProjectsVue from '@/views/app/sidebarTabs/Projects.vue'
import StaffDashboardStatsVue from '@/views/app/StaffDashboardStats.vue'

const routes = [
  {
    path: '/staff/dashboard',
    name: ROUTES.staff.dashboard,
    component: StaffDashboardStatsVue,
  },
  {
    path: '/staff/bio',
    name: ROUTES.staff.bio,
    component: BioVue,
  },
  {
    path: '/staff/job',
    name: ROUTES.staff.jobDetails,
    component: JobVue,
  },
  {
    path: '/staff/employment-history',
    name: ROUTES.staff.employmentHistory,
    component: EmploymentHistoryVue,
  },
  {
    path: '/staff/certifications',
    name: ROUTES.staff.certifications,
    component: CertificationsVue,
  },
  {
    path: '/staff/confirmation',
    name: ROUTES.staff.confirmation,
    component: ConfirmationVue,
  },
  {
    path: '/staff/projects',
    name: ROUTES.staff.projects,
    component: ProjectsVue,
  },
  {
    path: '/staff/leave',
    name: ROUTES.staff_leave,
    component: LeaveVue,
  },
]

export default routes
