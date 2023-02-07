<template>
  <div class="project-container">
    <div class="project-section-title-container">
      <h2 class="section-title">Projects</h2>
      <button
        class="add-project-btn"
        @click="toggleManagerAddProjectsModal"
        v-if="user.accountType === ACCOUNT_TYPES.manager"
      >
        <span class="material-symbols-rounded"> add </span>
        Add Project
      </button>
    </div>

    <section class="projects-container" v-if="!isLoading">
      <h4 v-if="!isLoading && !projects.length">You don't have any Projects</h4>
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

    <section class="personal-projects" v-if="!isLoading">
      <h4 v-if="!isLoading && !personalProjects.length">
        You don't have any Personal Projects
      </h4>
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
      <form
        class="add-experience-modal"
        @submit.prevent="handlePersonalProjectSubmit"
      >
        <h2 class="section-title">Add personal project</h2>
        <div class="modal-input">
          <TextInput
            label="Title"
            placeholder="e.g, Project 1"
            @update-value="(data) => (form.personalProject.title = data)"
          />
        </div>
        <div class="modal-input">
          <TextInput
            label="Github link"
            placeholder="https://github.com/example-001"
            @update-value="(data) => (form.personalProject.github = data)"
          />
        </div>
        <div class="modal-input">
          <TextInput
            label="Live link"
            placeholder="https://myliveproject.com"
            @update-value="(data) => (form.personalProject.liveLink = data)"
          />
        </div>
        <div class="modal-input">
          <label class="form-label" for="status">Project status</label>
          <select
            name="status"
            id="status"
            v-model="form.personalProject.status"
          >
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div class="modal-input">
          <TextInput
            label="Description"
            placeholder="..."
            @update-value="(data) => (form.personalProject.description = data)"
          />
        </div>
        <button type="submit" class="add-experience-btn modal-add-btn">
          Add
        </button>
      </form>
    </ModalBackdrop>
  </teleport>

  <teleport to=".modals" v-if="showManagerAddProjectsModal">
    <ManagerAddProjectModal :toggleModal="toggleManagerAddProjectsModal" />
  </teleport>
</template>

<script>
import Project from "@/components/Project.vue";
import ModalBackdrop from "@/components/ModalBackdrop.vue";
import TextInput from "@/components/TextInput.vue";
import { mapState } from "vuex";
import ManagerAddProjectModal from "@/components/modals/ManagerAddProjectModal.vue";
import Loader from "@/components/Loader.vue";
import { ACCOUNT_TYPES } from "@/global/accountTypes";
import axios from "axios";

export default {
  name: "Projects",
  data() {
    return {
      ACCOUNT_TYPES,
      isLoading: false,
      projects: [],
      personalProjects: [],
      showAddPersonalProjectsModal: false,
      showManagerAddProjectsModal: false,
      form: {
        personalProject: {
          github: "",
          liveLink: "",
          description: "",
          title: "",
          status: "",
        },
      },
    };
  },
  components: {
    Project,
    ModalBackdrop,
    TextInput,
    ManagerAddProjectModal,
    Loader,
  },
  methods: {
    toggleAddPersonalProjectsModal() {
      this.showAddPersonalProjectsModal = !this.showAddPersonalProjectsModal;
    },
    toggleManagerAddProjectsModal() {
      this.showManagerAddProjectsModal = !this.showManagerAddProjectsModal;
    },
    async handlePersonalProjectSubmit() {
      const data = {
        employeeId: this.user.id,
        name: this.form.personalProject.title,
        link: this.form.personalProject.liveLink,
        status: 0,
        description: this.form.personalProject.description,
      };
      try {
        const response = await axios.post("/EmployeeProject", {
          ...data,
        });
        console.log(response);
        // window.location.reload();
        return response;
      } catch (err) {
        alert("Failed to add project", err.message);
        console.log("Error", err.message);
      }
    },
    async fetchProjects() {
      try {
        const response = await axios.get("/CompanyProject");
        return response.data;
      } catch (err) {
        console.log(err.message);
      }
    },
    async fetchPersonalProjects() {
      try {
        const response = await axios.get(
          `/EmployeeProject/byemployeeid?employeeId=${this.user.id}`
        );
        console.log(response);
        return response.data;
      } catch (err) {
        console.log(err.message);
      }
    },
  },
  async mounted() {
    this.isLoading = true;
    this.projects = this.user.companyProjects;
    //   this.personalProjects = this.user.employeeProjects;
    // this.projects = await this.fetchProjects();
    this.personalProjects = await this.fetchPersonalProjects();
    this.isLoading = false;
  },
  computed: {
    ...mapState("appStore", ["user"]),
  },
};
</script>

<style scoped>
.project-container {
  flex: 1;
  padding: 0.5rem 1rem;
  overflow-y: auto;
}

section {
  min-height: 250px;
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
