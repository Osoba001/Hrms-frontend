<template>
  <div class="employees-container">
    <h2 class="section-title">
      {{ !importedEmails.length ? 'List of Employees' : 'Add Employees' }}
    </h2>

    <div
      class="cancel-btn p-ripple"
      v-if="importedEmails.length"
      v-ripple
      @click="REMOVE_IMPORTED_EMAILS"
    >
      <span class="material-symbols-rounded"> close </span>
    </div>

    <section class="employees" v-if="!importedEmails.length">
      <EmployeeCard
        v-for="employee in employees"
        v-bind:key="employee.id"
        :employee="employee"
      />
    </section>

    <AddMultipleEmployees v-if="importedEmails.length" :data="importedEmails" />

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
import EmployeeCard from '@/components/EmployeeCard.vue'
import AddMultipleEmployees from '@/components/AddMultipleEmployees.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Employees',
  components: { ModalBackdrop, TextInput, EmployeeCard, AddMultipleEmployees },
  data() {
    return {
      showModal: false,
      employees: [
        {
          id: 1,
          name: 'John Doe',
          role: 'General Manager',
          department: 'Development',
          image: 'https://randomuser.me/api/portraits/thumb/women/8.jpg',
          email: 'john.doe@ccl.com.ng',
        },
        {
          id: 2,
          name: 'Antoine Griezmann',
          role: 'Director',
          department: 'Design',
          image: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
          email: 'antoine.griezmann@ccl.com.ng',
        },
        {
          id: 3,
          name: 'John Michael',
          role: 'Staff',
          department: 'Development',
          image: 'https://randomuser.me/api/portraits/thumb/men/71.jpg',
          email: 'john.michael@ccl.com.ng',
        },
        {
          id: 4,
          name: 'Isaac Aku',
          role: 'Corper',
          department: 'Design',
          image: 'https://randomuser.me/api/portraits/thumb/men/5.jpg',
          email: 'isaac.aku@ccl.com.ng',
        },
        {
          id: 5,
          name: 'Gabriel John',
          role: 'Intern',
          department: 'Development',
          image: 'https://randomuser.me/api/portraits/thumb/women/52.jpg',
          email: 'gabriel.john@ccl.com.ng',
        },
        {
          id: 6,
          name: 'Sunday Mike',
          role: 'General Manager',
          department: 'Design',
          image: 'https://randomuser.me/api/portraits/thumb/men/35.jpg',
          email: 'sunday.mike@ccl.com.ng',
        },
        {
          id: 7,
          name: 'Victor Chinedu',
          role: 'Director',
          department: 'Development',
          image: 'https://randomuser.me/api/portraits/thumb/men/23.jpg',
          email: 'victor.chinedu@ccl.com.ng',
        },
        {
          id: 8,
          name: 'Innocent Samuel',
          role: 'Staff',
          department: 'Design',
          image: 'https://randomuser.me/api/portraits/thumb/women/78.jpg',
          email: 'innocent.samuel@ccl.com.ng',
        },
        {
          id: 9,
          name: 'Paul Emmanuel',
          role: 'Corper',
          department: 'Development',
          image: 'https://randomuser.me/api/portraits/thumb/men/36.jpg',
          email: 'paul.emmanuel@ccl.com.ng',
        },
        {
          id: 10,
          name: 'Marvelous Jack',
          role: 'Intern',
          department: 'Design',
          image: 'https://randomuser.me/api/portraits/thumb/women/18.jpg',
          email: 'marvelous.jack@ccl.com.ng',
        },
      ],
      employeeToBeEdited: null,
    }
  },
  methods: {
    ...mapMutations('appStore', ['REMOVE_IMPORTED_EMAILS']),
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
  computed: {
    ...mapState('appStore', ['accountType', 'importedEmails']),
  },
}
</script>

<style scoped>
.employees-container {
  position: relative;
  margin-top: 0.3rem;
  padding: 1.5rem;
  padding-top: 0.5rem;
  min-height: 350px;
  overflow-y: auto;
  flex: 1;
}

.cancel-btn {
  position: absolute;
  right: 1.5rem;
  top: 0.5rem;
  padding: 0.3em;
  border-radius: 50%;
  background-color: #fff;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.employees {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
  gap: 1.5rem;
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

@media (max-width: 450px) {
  .employees-container {
    padding: 1rem;
  }
}
</style>
