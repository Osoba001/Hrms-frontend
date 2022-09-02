<template>
  <ModalBackdrop @close="toggleModal">
    <form class="add-experience-modal" @submit.prevent="handleSubmit">
      <h2 class="section-title">Add experience</h2>
      <div class="modal-input">
        <TextInput
          label="Organisation"
          placeholder="e.g, CypherCrescent Ltd."
          @update-value="(data) => (form.organisation = data)"
        />
      </div>
      <div class="modal-input">
        <TextInput
          label="Role"
          placeholder="e.g, Director"
          @update-value="(data) => (form.role = data)"
        />
      </div>
      <div class="modal-input">
        <TextInput
          label="Location"
          placeholder="e.g, Port Harcourt, Rivers, Nigeria"
          @update-value="(data) => (form.location = data)"
        />
      </div>
      <div class="modal-input">
        <TextInput
          label="Start date"
          type="date"
          min="1960-01-01"
          max="2040-01-01"
          @update-value="(data) => (form.startDate = data)"
        />
      </div>
      <div class="modal-input">
        <TextInput
          label="End date"
          type="date"
          min="1960-01-01"
          max="2040-01-01"
          @update-value="(data) => (form.endDate = data)"
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
    }
  },
  methods: {
    handleSubmit(e) {
      if (
        !this.form.organisation ||
        !this.form.role ||
        !this.form.location ||
        !this.form.startDate ||
        !this.form.endDate
      ) {
        return
      }
      this.userInfo.employmentHistory.push({ id: Math.random(), ...this.form })
      e.target.reset()
      this.toggleModal()
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
