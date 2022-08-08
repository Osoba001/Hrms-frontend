<template>
  <div class="employment-history-container tab-container">
    <!-- <section class="previous-experience">
      <h2>Previous work experience</h2>

      <h4>Do you have any previous work experience</h4>
      <div class="radio-btns">
        <div class="radio-btn-container">
          <input type="radio" id="yes" name="first-degree" value="yes" />
          <label for="yes">Yes</label>
        </div>
        <div class="radio-btn-container">
          <input type="radio" id="no" name="first-degree" value="no" />
          <label for="no">No</label>
        </div>
      </div>

      <button class="add-experience-btn" @click="toggleModal">
        <span class="material-symbols-rounded"> add </span>
        Add experience
      </button>
    </section> -->

    <section>
      <header>
        <h2>Previous employment history</h2>
        <button class="add-experience-btn" @click="toggleModal">
          <span class="material-symbols-rounded"> add </span>
          Add experience
        </button>
      </header>

      <article
        v-for="employment in previousEmployments"
        v-bind:key="employment.id"
        class="previous-employment"
      >
        <div class="organisation-logo"></div>
        <div class="ëmployment-details">
          <h3>{{ employment.role }}</h3>
          <p class="organisation-name">{{ employment.organisation }}</p>
          <p class="duration">{{ employment.duration }}</p>
          <p class="location">{{ employment.location }}</p>
        </div>
      </article>
    </section>

    <dashboard-bottom-buttons-nav
      backRoute="/job"
      nextRoute="/certifications"
    />

    <teleport to=".modals" v-if="showModal">
      <ModalBackdrop @close="toggleModal">
        <form class="add-experience-modal" @submit.prevent="handleSubmit">
          <h2>Add experience</h2>
          <div class="modal-input">
            <TextInput label="Experience" placeholder="..." />
          </div>
          <button class="add-experience-btn">Add</button>
        </form>
      </ModalBackdrop>
    </teleport>
  </div>
</template>

<script>
import DashboardBottomButtonsNav from '@/components/DashboardBottomButtonsNav.vue'
import ModalBackdrop from '@/components/ModalBackdrop.vue'
import TextInput from '@/components/TextInput.vue'

export default {
  components: { DashboardBottomButtonsNav, ModalBackdrop, TextInput },
  data() {
    return {
      showModal: false,
      previousEmployments: [
        {
          id: 1,
          role: 'Snr. Petroleum Engineer',
          organisation: 'Shell Petroleum Development Company',
          duration: 'Jul 2022 - Present · 2mos',
          location: 'Port Harcourt, Rivers, Nigeria',
        },
        {
          id: 2,
          role: 'Software Engineer',
          organisation: 'CypherCrescent Limited',
          duration: 'Jul 2021 - Present · 2mos',
          location: 'Port Harcourt, Rivers, Nigeria',
        },
        {
          id: 3,
          role: 'Petroleum and Gas Engineer Intern',
          organisation: 'Schlumberger',
          duration: 'Jul 2022 - Present · 2mos',
          location: 'Port Harcourt, Rivers, Nigeria',
        },
      ],
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
  },
}
</script>

<style scoped>
.employment-history-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

section {
  flex: 1;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  overflow-y: auto;
}

header {
  display: flex;
  align-items: center;
}

h4 {
  margin-bottom: 0.5rem;
}

.radio-btns {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.radio-btn-container {
  margin-top: 0;
}
.radio-btn-container label {
  margin-left: 0.5rem;
}

.add-experience-btn {
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
  margin-left: auto;
}

.add-skill-btn:hover {
  background-color: #255eb4;
}

.add-experience-modal {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.add-experience-modal h2 {
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  color: #ca1310;
}

.add-experience-modal .modal-input {
  margin-top: -4rem;
}

article.previous-employment {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding-block: 1rem;
}

.previous-employment + .previous-employment {
  border-top: 1px solid #eee;
}

.organisation-logo {
  width: 50px;
  height: 50px;
  background: #eee;
  border-radius: 6px;
}

.previous-employment h3 {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
}

.previous-employment p.organisation-name {
  color: #000000e6;
}

.previous-employment p {
  font-weight: 500;
  color: #00000099;
  font-size: 0.875rem;
  line-height: 1.4rem;
}
</style>
