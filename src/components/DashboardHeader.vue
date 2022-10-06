<template>
  <header>
    <div class="project-title">
      <h2>CCL Human Resource Management System</h2>

      <div class="logo">
        <img src="@/assets/images/cyphercrescent-logo.png" />
      </div>

      <!-- For Admin to add employees -->
      <form
        @submit.prevent=""
        class="add-staff-container"
        v-if="
          user.accountType === ACCOUNT_TYPES.admin &&
          $route.name === ROUTES.employees
        "
      >
        <label class="active-directory-btn" for="active-directory">
          <span class="material-symbols-rounded"> save </span>
          Active-directory</label
        >
        <input
          hidden
          accept=".xlsx"
          type="file"
          name="active-directory"
          id="active-directory"
          @click="removeCurrentExcelFile"
          @change="readExcel"
        />

        <button @click="toggleModal">
          <span class="material-symbols-rounded"> add </span>
          Add employee
        </button>
      </form>

      <!-- For manager to view leave information of team members under the manager -->
      <button
        @click="handleManagerLeave"
        v-if="
          user.accountType === ACCOUNT_TYPES.manager &&
          $route.name === ROUTES.leave
        "
        class="team-info-btn"
      >
        View Team Info
      </button>
    </div>
    <DashboardTopTabNavigator v-if="displayTab(this.$route.name)" />
  </header>

  <teleport to=".modals" v-if="showModal">
    <AddNewEmployeeModal :toggleModal="toggleModal" />
  </teleport>
</template>

<script>
import DashboardTopTabNavigator from '@/components/DashboardTopTabNavigator.vue'
import readXlsxFile from 'read-excel-file'
import { mapMutations, mapState } from 'vuex'
import AddNewEmployeeModal from './modals/AddNewEmployeeModal.vue'
import { ACCOUNT_TYPES } from '@/global/accountTypes'
import { ROUTES } from '@/global/routes'

export default {
  name: 'DashboardHeader',
  components: {
    DashboardTopTabNavigator,
    AddNewEmployeeModal,
  },
  data() {
    return {
      showModal: false,
      ACCOUNT_TYPES,
      ROUTES,
    }
  },
  methods: {
    ...mapMutations('appStore', ['SET_ACTIVE_DIRECTORY']),
    displayTab(path) {
      const routesToDisplayTab = [
        ROUTES.userInfo,
        ROUTES.bio,
        ROUTES.job,
        ROUTES.employmentHistory,
        ROUTES.certifications,
        ROUTES.confirmation,
      ]
      return (
        (this.user.accountType === ACCOUNT_TYPES.staff ||
          this.user.accountType === ACCOUNT_TYPES.manager) &&
        !this.user.userInfoUpdated &&
        routesToDisplayTab.includes(path)
      )
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    handleManagerLeave() {
      this.$router.push('/leave/team-members')
    },
    readExcel(event) {
      readXlsxFile(event.target.files[0]).then((rows) => {
        const emailsArray = []
        // Pick first column of every row and push to array
        rows.map((row, index) => {
          // Remove the first row cause its the header
          index !== 0 && emailsArray.push(row[0])
        })
        this.SET_ACTIVE_DIRECTORY(emailsArray)
      })
    },
    removeCurrentExcelFile(event) {
      event.target.value = ''
    },
  },
  computed: {
    ...mapState('appStore', ['user']),
  },
}
</script>

<style scoped>
header {
  border-bottom: 3px solid #eee;
  display: flex;
  flex-direction: column;
  gap: 2.5px;
}

header > div {
  padding: 3px;
  background: #fff;
}

header .project-title {
  display: flex;
  align-items: center;
  padding: 0.5rem 1.5rem;
  height: 54px;
}

.project-title button,
.active-directory-btn {
  padding: 0.5em 1em;
  background-color: #2b9de9;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.project-title .team-info-btn {
  margin-left: auto;
}
.add-staff-container {
  margin-left: auto;
  display: flex;
  gap: 1rem;
}
.create-staff-btn:hover,
.active-directory-btn:hover {
  background-color: #255eb4;
}

.logo {
  flex: 1;
  display: none;
  height: 100%;
  max-width: 180px;
  margin-right: 1rem;
}

.logo img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

.project-title h2 {
  font-size: 1.2rem;
  color: #192041;
}

.active-directory {
  margin-block: 1rem;
}

@media (max-width: 980px) {
  .project-title h2 {
    display: none;
  }
  .logo {
    display: block;
  }
}

@media (max-width: 450px) {
  header .project-title {
    padding-inline: 1rem;
  }
}
</style>
