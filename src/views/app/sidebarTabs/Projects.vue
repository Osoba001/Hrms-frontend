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
      <button>
        <span class="material-symbols-rounded" data-v-3fdc887e=""> add </span>
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
</template>

<script>
import Project from '@/components/Project.vue'
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
    }
  },
  components: { Project },
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
</style>
