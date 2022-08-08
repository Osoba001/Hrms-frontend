<template>
  <div class="employees-container">
    <h2>List of Employees</h2>

    <div class="employees">
      <div
        class="employee"
        v-for="employee in employees"
        :key="employee.id"
        :class="{ bgWhite: employee.id % 2 === 0 }"
      >
        <p class="name">{{ employee.name }}</p>
        <p class="role">{{ employee.role }}</p>
        <div class="btn-container">
          <button @click="toggleModal(employee.id)" class="role-edit-btn">
            <span class="material-symbols-outlined"> edit </span>
          </button>
        </div>
      </div>
    </div>

    <teleport to=".modals" v-if="showModal">
      <ModalBackdrop @close="toggleModal">
        <form class="edit-modal" @submit.prevent="handleSubmit">
          <h2 class="modal-title">Edit employee details</h2>

          <label for="name">Name</label>
          <TextInput :placeholder="employeeToBeEdited.name" />

          <label for="role">New Role</label>
          <select
            name="role"
            id="role"
            :value="employeeToBeEdited.role.toLowerCase()"
          >
            <!-- Ensure all option values correspond with the role of the employees in lowercase -->
            <option value="general manager">General Manager</option>
            <option value="manager">Manager</option>
            <option value="director">Director</option>
            <option value="staff">Staff</option>
            <option value="consultant">Consultant</option>
            <option value="corper">Corper</option>
            <option value="intern">Intern</option>
          </select>

          <div class="save-btn-container">
            <button class="edit-save-btn">
              <span class="material-symbols-outlined"> save </span>
              Save
            </button>
          </div>
        </form>
      </ModalBackdrop>
    </teleport>
  </div>
</template>

<script>
import ModalBackdrop from '@/components/ModalBackdrop.vue'
import TextInput from '@/components/TextInput.vue'

export default {
  name: 'Employees',
  components: { ModalBackdrop, TextInput },
  data() {
    return {
      showModal: false,
      employees: [
        {
          id: 1,
          name: 'Emeka Duruzor',
          role: 'General Manager',
        },
        {
          id: 2,
          name: 'Ani Udoh',
          role: 'Director',
        },
        {
          id: 3,
          name: 'Nehemiah Igben',
          role: 'Staff',
        },
        {
          id: 4,
          name: 'Isaac Aku',
          role: 'Corper',
        },
        {
          id: 5,
          name: 'Aseb D',
          role: 'Intern',
        },
        {
          id: 6,
          name: 'Emeka Duruzor',
          role: 'General Manager',
        },
        {
          id: 7,
          name: 'Ani Udoh',
          role: 'Director',
        },
        {
          id: 8,
          name: 'Nehemiah Igben',
          role: 'Staff',
        },
        {
          id: 9,
          name: 'Isaac Aku',
          role: 'Corper',
        },
        {
          id: 10,
          name: 'Aseb D',
          role: 'Intern',
        },
        {
          id: 11,
          name: 'Emeka Duruzor',
          role: 'General Manager',
        },
        {
          id: 12,
          name: 'Ani Udoh',
          role: 'Director',
        },
        {
          id: 13,
          name: 'Nehemiah Igben',
          role: 'Staff',
        },
        {
          id: 14,
          name: 'Isaac Aku',
          role: 'Corper',
        },
        {
          id: 15,
          name: 'Aseb D',
          role: 'Intern',
        },
      ],
      employeeToBeEdited: null,
    }
  },
  methods: {
    handleSubmit() {},
    toggleModal(employeeId) {
      if (this.showModal === false) {
        this.employeeToBeEdited = this.employees.find(
          (employee) => employee.id === employeeId
        )
      }
      this.showModal = !this.showModal
    },
  },
}
</script>

<style scoped>
.employees-container {
  margin-top: 0.3rem;
  padding: 1.5rem;
  background-color: #fff;
  min-height: 350px;
  overflow-y: auto;
  flex: 1;
}
h2 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #ca1310;
}
.employees {
  outline: 2px solid #ddd;
}
.employee {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  background-color: #eee;
  padding: 0.5rem;
}
.employee.bgWhite {
  background-color: transparent;
}
.employee > * {
  flex: 1;
}
.name {
  margin-left: 0.5rem;
  font-weight: 600;
}
.role {
  text-align: center;
}
.btn-container {
  display: flex;
}
button.role-edit-btn {
  padding: 0.3em 0.4em;
  background-color: #2b9de9;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms ease;
  margin-left: auto;
}
.role-edit-btn span {
  font-size: 1.2rem;
}
.role-edit-btn:hover {
  background-color: #255eb4;
}

.modal-title {
  text-align: center;
}
.edit-modal {
  flex: 1;
}
.edit-modal label {
  display: block;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
}
.edit-modal input,
.edit-modal select {
  width: 100%;
  padding: 0.7em 1em;
  font-size: 0.875rem;
  margin-bottom: 0.7rem;
  border: 1px solid #cad6e4;
  border-radius: 5px;
  font-family: 'Lato', Helvetica, sans-serif;
}
.edit-modal .save-btn-container {
  display: flex;
}
.edit-modal button {
  padding: 0.5em 1em;
  background-color: #2b9de9;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms ease;
  margin-left: auto;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.edit-modal button:hover {
  background-color: #255eb4;
}
.edit-modal button span {
  font-size: 1.1rem;
}
</style>
