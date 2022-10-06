import { ROUTES } from '@/global/routes'
import BioVue from '@/views/app/dashboardTabs/Bio.vue'
import CertificationsVue from '@/views/app/dashboardTabs/Certifications.vue'
import ConfirmationVue from '@/views/app/dashboardTabs/Confirmation.vue'
import EmploymentHistoryVue from '@/views/app/dashboardTabs/EmploymentHistory.vue'
import JobVue from '@/views/app/dashboardTabs/Job.vue'
import TeamMembersLeaveVue from '@/views/app/manager/TeamMembersLeave.vue'
import LeaveVue from '@/views/app/sidebarTabs/Leave.vue'
import ProjectsVue from '@/views/app/sidebarTabs/Projects.vue'
import StaffDashboardStatsVue from '@/views/app/StaffDashboardStats.vue'

const routes = [
  {
    path: '/manager/dashboard',
    name: ROUTES.manager.dashboard,
    component: StaffDashboardStatsVue,
  },
  {
    path: '/manager/bio',
    name: ROUTES.manager.bio,
    component: BioVue,
  },
  {
    path: '/manager/job',
    name: ROUTES.manager.jobDetails,
    component: JobVue,
  },
  {
    path: '/manager/employment-history',
    name: ROUTES.manager.employmentHistory,
    component: EmploymentHistoryVue,
  },
  {
    path: '/manager/certifications',
    name: ROUTES.manager.certifications,
    component: CertificationsVue,
  },
  {
    path: '/manager/confirmation',
    name: ROUTES.manager.confirmation,
    component: ConfirmationVue,
  },
  {
    path: '/manager/projects',
    name: ROUTES.manager.projects,
    component: ProjectsVue,
  },
  {
    path: '/manager/leave',
    name: ROUTES.manager.leave,
    component: LeaveVue,
  },
  {
    path: '/manager/leave/team-members',
    name: ROUTES.manager.viewTeamInfo,
    component: TeamMembersLeaveVue,
  },
]

export default routes
