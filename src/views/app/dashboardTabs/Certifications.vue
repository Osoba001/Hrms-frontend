<template>
  <div class="certifications-container tab-container">
    <section class="add-certificate">
      <h2 class="section-title">Upload supporting document</h2>

      <div class="upload-container">
        <h4>Cetificate</h4>
        <input
          type="file"
          name="other-certificate"
          id="other-certificate"
          accept="image/*"
        />
      </div>
    </section>

    <section class="skills-container">
      <h2 class="section-title">Skills</h2>

      <div class="skills-wrapper" v-show="userInfo.skills.length">
        <span v-for="item in userInfo.skills" :key="item.id" class="skill">
          {{ item.skill }}
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
        <form class="add-skill-modal" @submit.prevent="handleAddSkill">
          <h2 class="section-title">Add skill</h2>
          <div class="modal-input">
            <TextInput
              label="Skill"
              placeholder="E.g, React Native"
              @update-value="(data) => (form.skill = data)"
              @validate="validate('skill')"
              :error="errors.skill"
            />
          </div>
          <div class="modal-input">
            <label for="proficiency">Proficiency</label>
            <select
              name="proficiency"
              id="proficiency"
              class="proficiency"
              :class="{ error: errors.proficiency }"
              v-model="form.proficiency"
              @blur="validate(proficiency)"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <button type="submit" class="add-skill-btn modal-add-btn">Add</button>
        </form>
      </ModalBackdrop>
    </teleport>
  </div>
</template>

<script>
import DashboardBottomButtonsNav from '@/components/DashboardBottomButtonsNav.vue'
import TextInput from '@/components/TextInput.vue'
import ModalBackdrop from '@/components/ModalBackdrop.vue'
import { mapState } from 'vuex'
import { object, string } from 'yup'

const schema = object().shape({
  skill: string().min(1).max(255).required(),
  proficiency: string().required(),
})

export default {
  components: { DashboardBottomButtonsNav, TextInput, ModalBackdrop },
  data() {
    return {
      showModal: false,
      form: {
        skill: '',
        proficiency: '',
      },
      errors: {
        skill: '',
        proficiency: '',
      },
    }
  },
  methods: {
    onSubmit(e) {
      if (!this.form.skill || !this.form.proficiency) return
      this.userInfo.skills.push({ ...this.form })
      this.form.skill = ''
      this.form.proficiency = ''
      e.target.reset()
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    handleAddSkill(e) {
      schema
        .validate(this.form, { abortEarly: false })
        .then(() => {
          this.onSubmit(e)
        })
        .catch((err) => {
          err.inner.forEach((error) => {
            this.errors = { ...this.errors, [error.path]: error.message }
          })
        })
    },
    validate(field) {
      schema
        .validateAt(field, this.form)
        .then(() => {
          this.errors[field] = ''
        })
        .catch((err) => {
          this.errors[err.path] = err.message
        })
    },
  },
  computed: {
    ...mapState('appStore', ['userInfo']),
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
  justify-content: center;
  gap: 1.5rem;
}

.add-skill-modal .modal-input label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.add-skill-modal .modal-add-btn {
  margin-left: 0;
}

select.error {
  border: 1px solid red;
}
</style>
