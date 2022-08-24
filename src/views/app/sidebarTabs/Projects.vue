<template>
  <div class="project-container">
    <h2 class="section-title">Projects</h2>

    <section class="projects-container">
      <Project
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </section>

    <div class="personal-projects-container">
      <h2 class="section-title">Personal projects</h2>
      <button @click="toggleModal">
        <span class="material-symbols-rounded"> add </span>
        Add Project
      </button>
    </div>
    <section class="personal-projects">
      <Project
        v-for="project in personalProjects"
        :key="project.id"
        :project="project"
        variant="personal"
      />
    </section>
  </div>

  <!-- <teleport to=".modals" v-if="showModal">
    <ModalBackdrop @close="toggleModal">
      <div class="modal-inner"></div>
    </ModalBackdrop>
  </teleport> -->

  <teleport to=".modals" v-if="showModal">
    <ModalBackdrop @close="toggleModal">
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
</template>

<script>
import Project from '@/components/Project.vue'
import ModalBackdrop from '@/components/ModalBackdrop.vue'
import TextInput from '@/components/TextInput.vue'

export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'SEPAL 3.0',
          numberOfPeople: 17,
          duration: 4,
          status: 'ongoing',
        },
        {
          id: 2,
          title: 'Nodal Analysis',
          numberOfPeople: 22,
          duration: 4,
          status: 'not started',
        },
        {
          id: 3,
          title: 'BFS Economics',
          numberOfPeople: 18,
          duration: 4,
          status: 'ongoing',
        },
        {
          id: 4,
          title: 'EPT',
          numberOfPeople: 6,
          duration: 4,
          status: 'completed',
        },
        {
          id: 5,
          title: 'SMBS',
          numberOfPeople: 10,
          duration: 4,
          status: 'cancelled',
        },
        {
          id: 6,
          title: 'WIMS',
          numberOfPeople: 7,
          duration: 4,
          status: 'ongoing',
        },
      ],
      personalProjects: [
        {
          id: 1,
          title: 'WIMS',
          status: 'ongoing',
          github: '#',
          liveLink: '#',
          description: `
          Voluptates blanditiis numquam magni nostrum odit libero,
          dignissimos magnam dolorum officia veniam saepe cum eveniet,
          doloremque tenetur. Blanditiis, repellat.
          `,
        },
        {
          id: 2,
          title: 'WIMS',
          status: 'completed',
          github: '#',
          liveLink: '#',
          description: `
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          dolor voluptates blanditiis numquam magni nostrum odit libero,
          dignissimos magnam dolorum officia veniam saepe cum eveniet,
          doloremque tenetur. Blanditiis, repellat assumenda!
          `,
        },
        {
          id: 3,
          title: 'Web API integration',
          status: 'completed',
          github: '#',
          liveLink: '#',
          description: `
          Voluptates blanditiis numquam magni nostrum odit libero,
          dignissimos magnam dolorum officia veniam saepe cum eveniet,
          doloremque tenetur. Blanditiis, repellat.
          `,
        },
      ],
      showModal: false,
    }
  },
  components: { Project, ModalBackdrop, TextInput },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
  },
}
</script>

<style scoped>
.project-container {
  flex: 1;
  padding: 0.5rem 1rem;
  overflow-y: auto;
}

section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.personal-projects-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 0.7rem;
}

.personal-projects-container .section-title {
  margin-bottom: 0;
}

.personal-projects-container button {
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

.personal-projects-container button:hover {
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
