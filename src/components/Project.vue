<template>
  <article
    class="project p-ripple"
    :class="{
      ongoing: project.status === 'ongoing',
      cancelled: project.status === 'cancelled',
      'not-started': project.status === 'not started',
      completed: project.status === 'completed',
      small: user.accountType === 'staff' && variant !== 'personal',
      personal: variant === 'personal',
    }"
    @click="handleClick"
    v-ripple
    v-motion
    :initial="{
      opacity: 0,
      scale: 0.85,
    }"
    :enter="{
      opacity: 1,
      scale: 1,
    }"
  >
    <header>
      <div class="project-title">
        <h3>TITLE</h3>
        <p>{{ project.title }}</p>
      </div>

      <div class="links" v-show="variant === 'personal'">
        <a target="_blank" :href="project.github">
          <GithubIcon />
        </a>
        <a target="_blank" :href="project.liveLink">
          <ExternalLinkIcon />
        </a>
      </div>
    </header>

    <div class="project-info-wrapper">
      <!-- To be shown for official projects and to managers only -->
      <div
        v-show="variant !== 'personal'"
        v-if="user.accountType === 'manager'"
      >
        <h3>Info</h3>
        <div class="project-info">
          <div>
            <h4 class="info-title">Persons</h4>
            <p>{{ project.numberOfPeople }}</p>
          </div>
          <div>
            <h4>Duration</h4>
            <p>{{ project.duration }} <span>mos</span></p>
          </div>
        </div>
      </div>

      <!-- To be shown for personal projects -->
      <div
        class="project-info personal-project-info"
        v-show="variant === 'personal'"
      >
        <p class="description">
          {{ project.description }}
        </p>
      </div>
    </div>

    <div
      class="project-status"
      :class="{
        ongoing: project.status === 'ongoing',
        cancelled: project.status === 'cancelled',
        'not-started': project.status === 'not started',
        completed: project.status === 'completed',
      }"
    >
      <span>{{ project.status }}</span>
    </div>
  </article>

  <teleport to=".modals" v-if="showModal">
    <ModalBackdrop @close="toggleModal">
      <div class="modal-inner">
        <h3>Team lead - {{ project.collaborators.teamLead }}</h3>
        <p
          v-for="member in project.collaborators.otherMembers"
          :key="member.id"
        >
          {{ member.name }}
        </p>
      </div>
    </ModalBackdrop>
  </teleport>
</template>

<script>
import GithubIcon from './icons/GithubIcon.vue'
import ExternalLinkIcon from './icons/ExternalLinkIcon.vue'
import ModalBackdrop from './ModalBackdrop.vue'
import { mapState } from 'vuex'

export default {
  name: 'Project',
  props: ['project', 'variant'],
  components: { GithubIcon, ExternalLinkIcon, ModalBackdrop },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    handleClick() {
      if (this.variant !== 'personal') this.toggleModal()
    },
  },
  computed: {
    ...mapState('appStore', ['user']),
  },
}
</script>

<style scoped>
.project {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  padding: 0.7rem;
  padding-top: 1.5rem;
  min-height: 230px;
  border-radius: 6px;
  box-shadow: 4px 4px 5px 4px rgba(182, 182, 182, 0.219);
  cursor: pointer;
}

.project.personal {
  width: 100%;
  max-width: 330px;
}

.project.small {
  min-height: auto;
  gap: 0;
}

.project.completed {
  border-top: 3px solid #0bbd58;
}

.project.ongoing {
  border-top: 3px solid orange;
}

.project.cancelled {
  border-top: 3px solid red;
}

.project.not-started {
  border-top: 3px solid #bfbfbf;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

header .links {
  display: flex;
  gap: 0.7rem;
}

header .links svg {
  width: 21px;
  height: 21px;
  color: rgb(74, 74, 74);
}

.project-title h3 {
  font-size: 0.75rem;
  font-weight: 700;
  color: #28282870;
  margin-bottom: 3px;
}

.project-title p {
  font-size: 1rem;
  font-weight: 700;
}

.project-info-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 0.7rem;
}

.project-info-wrapper h3 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #28282870;
  margin-bottom: 3px;
}

.project-info {
  background-color: rgba(238, 238, 238, 0.747);
  flex: 1;
  display: flex;
  gap: 0.5rem;
  padding: 1rem 0.7rem;
}

.project-info > div {
  flex: 0.5;
  border-left: 2.5px solid #b0b0b0;
  padding-inline: 0.3rem;
}

.project-info h4 {
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  color: #28282890;
}

.project-info p {
  font-size: 1.875rem;
  font-weight: 600;
}
.project-info p span {
  font-size: 0.875rem;
}

.project-status {
  cursor: default;
  background-color: rgba(74, 201, 154, 0.1);
  border-radius: 4px;
  padding: 3px 7px;
  color: #eee;
  font-size: 0.75rem;
  font-weight: 700;
  margin-left: auto;
  margin-top: auto;
  text-transform: capitalize;
}

.project-status.ongoing {
  border: 1.5px solid #ffa500;
  color: #ffa500;
  background-color: rgba(255, 165, 0, 0.1);
}

.project-status.cancelled {
  border: 1.5px solid rgb(255, 0, 0);
  color: rgb(255, 0, 0);
  background-color: rgba(255, 0, 0, 0.1);
}

.project-status.completed {
  border: 1.5px solid #0bbd58;
  color: #0bbd58;
  background-color: rgba(11, 189, 88, 0.1);
}

.project-status.not-started {
  border: 1.5px solid #bfbfbf;
  color: #b4b4b4;
  background-color: rgba(191, 191, 191, 0.1);
}

/* Personal projects */
.personal-project-info .description {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
