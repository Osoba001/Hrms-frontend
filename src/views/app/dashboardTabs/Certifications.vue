<template>
  <div class="certifications-container tab-container">
    <section class="add-certificate">
      <h2 class="section-title">Upload supporting document</h2>

      <div class="upload-container">
        <h4>First degree cetificate</h4>
        <div class="radio-btns">
          <div class="radio-btn-container">
            <input type="radio" id="yes" name="first-degree" value="yes" />
            <label for="yes">Yes</label>
          </div>
          <div class="radio-btn-container">
            <input type="radio" id="no" name="first-degree" value="no" />
            <label for="no">No</label>
          </div>

          <input
            type="file"
            name="first-degree-certificate"
            id="first-degree-certificate"
            hidden
          />
          <label class="upload-btn" for="first-degree-certificate"
            >Upload</label
          >
        </div>
      </div>

      <div class="upload-container">
        <h4>Other cetificates</h4>
        <div class="radio-btns">
          <div class="radio-btn-container">
            <input type="radio" id="yes" name="first-degree" value="yes" />
            <label for="yes">Yes</label>
          </div>
          <div class="radio-btn-container">
            <input type="radio" id="no" name="first-degree" value="no" />
            <label for="no">No</label>
          </div>

          <input
            type="file"
            name="other-certificate"
            id="other-certificate"
            hidden
          />
          <label class="upload-btn" for="other-certificate">Upload</label>
        </div>
      </div>
    </section>

    <section class="skills-container">
      <h2 class="section-title">Skills</h2>

      <div class="skills-wrapper">
        <span v-for="skill in skills" :key="skill" class="skill">
          {{ skill }}
        </span>
      </div>

      <button class="add-skill-btn" @click="toggleModal">
        <span class="material-symbols-rounded"> add </span>
        Add skill
      </button>
    </section>

    <dashboard-bottom-buttons-nav
      backRoute="/employment-history"
      nextRoute="/confirmation"
    />

    <teleport to=".modals" v-if="showModal">
      <ModalBackdrop @close="toggleModal">
        <form class="add-skill-modal" @submit.prevent="handleSubmit">
          <h2 class="section-title">Add skill</h2>
          <div class="modal-input">
            <TextInput label="Skill" placeholder="E.g, React Native" />
          </div>
          <button class="add-skill-btn">Add</button>
        </form>
      </ModalBackdrop>
    </teleport>
  </div>
</template>

<script>
import DashboardBottomButtonsNav from '@/components/DashboardBottomButtonsNav.vue'
import TextInput from '@/components/TextInput.vue'
import ModalBackdrop from '@/components/ModalBackdrop.vue'

export default {
  components: { DashboardBottomButtonsNav, TextInput, ModalBackdrop },
  data() {
    return {
      showModal: false,
      skills: [
        'React.js',
        'React Native',
        'ASP.Net',
        'C#',
        'WPF',
        'Vue.js',
        'TypeScript',
        'Node.js',
        'Django',
        'GoLang',
        'Ruby on rails',
        'R',
        'Python',
        'Rust',
        'JavaScript',
      ],
    }
  },
  methods: {
    handleSubmit() {},
    toggleModal() {
      this.showModal = !this.showModal
    },
  },
}
</script>

<style scoped>
.certifications-container {
  flex: 1;
}

section {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0.5rem;
}
section.add-certificate {
  margin-bottom: 1rem;
}

.upload-container {
  margin-bottom: 1rem;
}

.upload-container h4 {
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

.upload-btn {
  padding: 0.2em 1em;
  border-radius: 2px;
  cursor: pointer;
  background: #eee;
  font-size: 0.875rem;
  border: 1px solid rgb(133, 133, 133);
}

section.skills-container {
  min-height: 250px;
}

.add-skill-btn {
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
  /* margin-top: 1rem; */
  margin-left: auto;
}

.add-skill-btn:hover {
  background-color: #255eb4;
}

.skills-wrapper {
  padding-block: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  max-width: 650px;
}

.skill {
  display: block;
  background-color: #eee;
  padding: 0.5em 1.2em;
  border-radius: 50px;
  cursor: pointer;
  transition: all 300ms ease;
  font-size: 0.875rem;
}
.skill:hover {
  transform: scale(1.05);
  background-color: #aaa;
}
.add-skill-modal {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.add-skill-modal .modal-input {
  margin-top: -4rem;
}
</style>
