<template>
  <header>
    <div class="project-title">
      <h2>CCL Human Resource Management System</h2>

      <div class="logo">
        <img src="@/assets/images/cyphercrescent-logo.png" />
      </div>

      <form
        @submit.prevent=""
        class="add-staff-container"
        v-if="accountType === 'admin' && $route.path === '/employees'"
      >
        <label class="active-directory-btn" for="active-directory">
          <span class="material-symbols-rounded"> save </span>
          Active-directory</label
        >
        <input
          hidden
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          type="file"
          name="active-directory"
          id="active-directory"
        />

        <button @click="toggleModal" class="create-staff-btn">
          <span class="material-symbols-rounded"> add </span>
          Add staff
        </button>
      </form>
    </div>
    <DashboardTopTabNavigator v-if="displayTab(this.$route.path)" />
  </header>

  <teleport to=".modals">
    <ModalBackdrop @close="toggleModal" v-show="showModal">
      <div class="modal-inner">
        <h3 class="section-title">Add new staff</h3>

        <div class="modal-text-inputs">
          <label for="email">Email</label>
          <TextInput
            placeholder="e.g, john.doe@cyphercrescent.com.ng"
            type="email"
          />
          <label for="role">Role</label>
          <select name="role" id="role">
            <option value="manager">Manager</option>
            <option value="director">Director</option>
            <option value="staff">Staff</option>
            <option value="intern">Intern</option>
            <option value="corper">Corper</option>
          </select>
        </div>

        <!-- <div class="active-directory">
          <h2>Use active directory</h2>

          <div class="radio-btn-container">
            <input type="radio" id="yes" name="active_directory" value="yes" />
            <label for="yes">Yes</label><br />
          </div>
          <div class="radio-btn-container">
            <input type="radio" id="no" name="active_directory" value="no" />
            <label for="no">No</label><br />
          </div>
        </div> -->

        <button class="configure-button">Configure</button>
      </div>
    </ModalBackdrop>
  </teleport>
</template>

<script>
import DashboardTopTabNavigator from '@/components/DashboardTopTabNavigator.vue'
import TextInput from '@/components/TextInput.vue'
import ModalBackdrop from '@/components/ModalBackdrop.vue'

export default {
  name: 'DashboardHeader',
  components: { DashboardTopTabNavigator, TextInput, ModalBackdrop },
  data() {
    return {
      accountType: 'admin',
      showModal: false,
    }
  },
  methods: {
    displayTab(path) {
      const routesToDisplayTab = [
        '/',
        '/bio',
        '/job',
        '/employment-history',
        '/certifications',
        '/confirmation',
      ]
      return routesToDisplayTab.includes(path)
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
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

.project-title .create-staff-btn,
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

/* Modal */
.modal-inner {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.modal-text-inputs label {
  display: block;
  margin-bottom: 0.5rem;
  margin-top: 0.8rem;
  font-weight: 600;
}

.modal-text-inputs select {
  width: 100%;
  padding: 0.7em 1em;
  font-size: 0.875rem;
  margin-bottom: 0.7rem;
  border: 1px solid #cad6e4;
  border-radius: 5px;
  font-family: 'Lato', Helvetica, sans-serif;
}

.configure-button {
  margin-top: 1rem;
  padding: 0.7em 1em;
  background-color: #2b9de9;
  color: #fff;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms ease;
}
.configure-button:hover {
  background-color: #255eb4;
}
.active-directory {
  margin-block: 1rem;
}

@media (max-width: 950px) {
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
