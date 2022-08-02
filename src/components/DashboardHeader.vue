<template>
  <header>
    <div class="project-title">
      <h2>CCL Human Resource Management System</h2>

      <div class="logo">
        <img src="@/assets/images/cyphercrescent-logo.svg" />
      </div>

      <button
        @click="toggleModal"
        v-if="accountType === 'admin'"
        class="create-staff-btn"
      >
        <span class="material-symbols-rounded"> add </span>
        Create staff
      </button>
    </div>

    <DashboardTopTabNavigator v-if="displayTab(this.$route.path)" />
  </header>

  <teleport to=".modals" v-if="showModal">
    <ModalBackdrop @close="toggleModal">
      <div class="modal-inner">
        <h3>Create new staff</h3>

        <div class="modal-text-inputs">
          <label for="email">Email</label>
          <TextInput
            placeholder="E.g, john.doe@cyphercrescent.com.ng"
            type="email"
          />
          <label for="password">Password</label>
          <TextInput placeholder="*******" type="password" />
        </div>

        <div class="active-directory">
          <h2>Use active directory</h2>

          <div class="radio-btn-container">
            <input type="radio" id="yes" name="active_directory" value="yes" />
            <label for="yes">Yes</label><br />
          </div>
          <div class="radio-btn-container">
            <input type="radio" id="no" name="active_directory" value="no" />
            <label for="no">No</label><br />
          </div>
        </div>

        <div class="modal-btn-container">
          <button class="configure-button">Configure</button>
        </div>
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
}

.project-title .create-staff-btn {
  padding: 0.5em 1em;
  background-color: #2b9de9;
  color: #fff;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms ease;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.create-staff-btn:hover {
  background-color: #255eb4;
}

.logo img {
  display: none;
  object-fit: contain;
  width: 150px;
}

.project-title h2 {
  font-size: 1.2rem;
  color: #192041;
}

/* Modal */
.modal-inner h3 {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #ca1310;
}
.modal-text-inputs label {
  display: block;
  margin-bottom: 0.5rem;
  margin-top: 0.8rem;
  font-weight: 600;
}
.modal-btn-container {
  display: flex;
}
.configure-button {
  padding: 0.5em 1em;
  background-color: #2b9de9;
  color: #fff;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms ease;
  margin-left: auto;
}
.configure-button:hover {
  background-color: #255eb4;
}
.active-directory {
  margin-block: 1rem;
}
</style>
