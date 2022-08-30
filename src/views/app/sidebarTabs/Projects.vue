<template>
  <div class="project-container">
    <div class="project-section-title-container">
      <h2 class="section-title">Projects</h2>
      <button
        class="add-project-btn"
        @click="toggleManagerAddProjectsModal"
        v-if="user.accountType === 'manager'"
      >
        <span class="material-symbols-rounded"> add </span>
        Add Project
      </button>
    </div>

    <section class="projects-container" v-if="projects.length">
      <Project
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </section>
    <div class="loader-container" v-else>
      <Loader />
    </div>

    <div class="project-section-title-container personal-projects-title">
      <h2 class="section-title">Personal projects</h2>
      <button class="add-project-btn" @click="toggleAddPersonalProjectsModal">
        <span class="material-symbols-rounded"> add </span>
        Add Project
      </button>
    </div>

    <section class="personal-projects" v-if="personalProjects.length">
      <Project
        v-for="project in personalProjects"
        :key="project.id"
        :project="project"
        variant="personal"
      />
    </section>
    <div v-else class="loader-container">
      <Loader />
    </div>
  </div>

  <teleport to=".modals" v-if="showAddPersonalProjectsModal">
    <ModalBackdrop @close="toggleAddPersonalProjectsModal">
      <form class="add-experience-modal" @submit.prevent="handleSubmit">
        <h2 class="section-title">Add project</h2>
        <div class="modal-input">
          <TextInput
            label="Github link"
            placeholder="https://github.com/example-001"
          />
        </div>
        <div class="modal-input">
          <TextInput
            label="Live link"
            placeholder="https://myliveproject.com"
          />
        </div>
        <div class="modal-input">
          <TextInput label="Description" placeholder="..." />
        </div>
        <button class="add-experience-btn modal-add-btn">Add</button>
      </form>
    </ModalBackdrop>
  </teleport>

  <teleport to=".modals" v-if="showManagerAddProjectsModal">
    <ManagerAddProjectModal :toggleModal="toggleManagerAddProjectsModal" />
  </teleport>
</template>

<script>
import Project from '@/components/Project.vue'
import ModalBackdrop from '@/components/ModalBackdrop.vue'
import TextInput from '@/components/TextInput.vue'
import { mapActions, mapState } from 'vuex'
import ManagerAddProjectModal from '@/components/modals/ManagerAddProjectModal.vue'
import Loader from '@/components/Loader.vue'

export default {
  name: 'Projects',
  data() {
    return {
      projects: [],
      personalProjects: [],
      showAddPersonalProjectsModal: false,
      showManagerAddProjectsModal: false,
    }
  },
  components: {
    Project,
    ModalBackdrop,
    TextInput,
    ManagerAddProjectModal,
    Loader,
  },
  methods: {
    ...mapActions('appStore', ['fetchPersonalProjects', 'fetchProjects']),
    toggleAddPersonalProjectsModal() {
      this.showAddPersonalProjectsModal = !this.showAddPersonalProjectsModal
    },
    toggleManagerAddProjectsModal() {
      this.showManagerAddProjectsModal = !this.showManagerAddProjectsModal
    },
  },
  async created() {
    setTimeout(async () => {
      this.projects = await this.fetchProjects()
      this.personalProjects = await this.fetchPersonalProjects()
    }, 1000)
  },
  computed: {
    ...mapState('appStore', ['user']),
  },
}
</script>

<style scoped>
.project-container {
  flex: 1;
  padding: 0.5rem 1rem;
  overflow-y: auto;
}

section.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1rem;
}

section.personal-projects {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.project-section-title-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 0.7rem;
}

.personal-projects-title {
  margin-top: 3rem;
}

.project-container .section-title {
  margin-bottom: 0;
}

.add-project-btn {
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

.add-project-btn:hover {
  background-color: #255eb4;
}

.add-experience-modal {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
}

.add-experience-modal .section-title {
  margin-bottom: 0;
}

.modal-add-btn {
  padding: 0.7em 1em;
  background-color: #2b9de9;
  color: #fff;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding-inline: 2em;
}
</style>
