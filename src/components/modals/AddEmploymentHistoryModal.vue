<template>
  <ModalBackdrop @close="toggleModal">
    <form class="add-experience-modal" @submit.prevent="handleAddExperience">
      <h2 class="section-title">Add experience</h2>
      <div class="modal-input">
        <TextInput
          label="Organisation"
          placeholder="e.g, CypherCrescent Ltd."
          @update-value="(data) => (form.organisation = data)"
          @validate="validate('organisation')"
          :error="errors.organisation"
        />
      </div>
      <div class="modal-input">
        <TextInput
          label="Role"
          placeholder="e.g, Director"
          @update-value="(data) => (form.role = data)"
          @validate="validate('role')"
          :error="errors.role"
        />
      </div>
      <div class="modal-input">
        <TextInput
          label="Location"
          placeholder="e.g, Port Harcourt, Rivers, Nigeria"
          @update-value="(data) => (form.location = data)"
          @validate="validate('location')"
          :error="errors.location"
        />
      </div>
      <div class="modal-input">
        <TextInput
          label="Start date"
          type="date"
          min="1960-01-01"
          max="2040-01-01"
          @update-value="(data) => (form.startDate = data)"
          @validate="validate('startDate')"
          :error="errors.startDate"
        />
      </div>
      <div class="modal-input">
        <TextInput
          label="End date"
          type="date"
          min="1960-01-01"
          max="2040-01-01"
          @update-value="(data) => (form.endDate = data)"
          @validate="validate('endDate')"
          :error="errors.endDate"
        />
      </div>
      <button type="submit" class="add-experience-btn modal-add-btn">
        Add
      </button>
    </form>
  </ModalBackdrop>
</template>

<script>
import { mapGetters } from 'vuex'
import ModalBackdrop from '../ModalBackdrop.vue'
import TextInput from '../TextInput.vue'
import { date, object, string } from 'yup'

const schema = object().shape({
  organisation: string().required(),
  location: string().required(),
  role: string().required(),
  startDate: date().required(),
  endDate: date().required(),
})

export default {
  components: { ModalBackdrop, TextInput },
  props: ['toggleModal'],
  data() {
    return {
      form: {
        organisation: '',
        role: '',
        location: '',
        startDate: '',
        endDate: '',
      },
      errors: {
        organisation: '',
        role: '',
        location: '',
        startDate: '',
        endDate: '',
      },
    }
  },
  methods: {
    handleAddExperience(e) {
      schema
        .validate(this.form, { abortEarly: false })
        .then(() => {
          if (
            !this.form.organisation ||
            !this.form.role ||
            !this.form.location ||
            !this.form.startDate ||
            !this.form.endDate
          ) {
            return
          }
          this.userInfo.employmentHistory.push({
            id: Math.random(),
            ...this.form,
          })
          e.target.reset()
          this.toggleModal()
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
    ...mapGetters('appStore', ['userInfo']),
  },
}
</script>

<style scoped>
.add-skill-btn:hover {
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
  padding-inline: 2em;
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
}
</style>
