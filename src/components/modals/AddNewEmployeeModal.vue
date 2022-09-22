<template>
  <ModalBackdrop @close="toggleModal">
    <form @submit.prevent="handleAddEmployee" class="modal-inner">
      <h3 class="section-title">Add new employee</h3>

      <div class="modal-text-inputs">
        <label for="email">Email</label>
        <TextInput
          placeholder="e.g, john.doe@cyphercrescent.com.ng"
          type="email"
          @update-value="(data) => (form.email = data)"
          @validate="validate('email')"
          :error="errors.email"
        />
        <label for="role">Role</label>
        <select
          name="role"
          id="role"
          v-model="form.role"
          @blur="validate('role')"
          :class="{ error: errors.role }"
        >
          <option value="manager">Manager</option>
          <option value="director">Director</option>
          <option value="staff">Staff</option>
          <option value="intern">Intern</option>
          <option value="corper">Corper</option>
        </select>
      </div>

      <button type="submit" class="configure-button">Configure</button>
    </form>
  </ModalBackdrop>
</template>

<script>
import ModalBackdrop from "../ModalBackdrop.vue";
import TextInput from "../TextInput.vue";
import { object, string } from "yup";
import { mapActions } from "vuex";

const schema = object().shape({
  email: string().email().required(),
  role: string().required(),
});

export default {
  components: { ModalBackdrop, TextInput },
  props: ["toggleModal"],
  data() {
    return {
      form: {
        email: "",
        role: "",
      },
      errors: {
        email: "",
        role: "",
      },
    };
  },
  methods: {
    ...mapActions("appStore", ["addEmployee"]),
    handleAddEmployee() {
      schema
        .validate(this.form, { abortEarly: false })
        .then(() => {
          this.addEmployee({
            ...this.form,
          });
        })
        .catch((err) => {
          err.inner.forEach((error) => {
            this.errors = { ...this.errors, [error.path]: error.message };
          });
        });
    },
    validate(field) {
      schema
        .validateAt(field, this.form)
        .then(() => {
          this.errors[field] = "";
        })
        .catch((err) => {
          this.errors[err.path] = err.message;
        });
    },
  },
};
</script>

<style scoped>
.modal-inner {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.modal-text-inputs label {
  display: block;
  margin-bottom: 0.5rem;
  margin-top: 0.8rem;
  font-weight: 500;
}

.configure-button {
  margin-top: 1rem;
  padding: 0.7em 1em;
  background-color: #2b9de9;
  color: #fff;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms ease;
}
.configure-button:hover {
  background-color: #255eb4;
}

select.error {
  border: 1px solid rgb(220, 43, 43);
}
</style>
