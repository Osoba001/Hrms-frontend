<template>
  <div class="employees-container">
    <h2>List of Employees</h2>

    <div class="employees">
      <article
        class="employee"
        v-for="employee in employees"
        v-bind:key="employee.id"
      >
        <header class="employee-status-wrapper">
          <div class="status">
            <span>Active</span>
          </div>
          <span class="material-symbols-outlined more-icon"> more_horiz </span>
        </header>

        <div class="employee-info-top">
          <div class="img-container">
            <img :src="employee.image" alt="user" />
          </div>
          <h3 class="name">{{ employee.name }}</h3>
          <p class="role">{{ employee.role }}</p>
        </div>

        <div class="employee-info-bottom">
          <div class="bottom-info">
            <div>
              <h4>Department</h4>
              <p>{{ employee.department }}</p>
            </div>
            <div>
              <h4>Date Hired</h4>
              <p>Aug 5, 2022</p>
            </div>
          </div>
          <div class="contact-info">
            <div class="contact">
              <span class="material-symbols-outlined"> mail </span>
              <p>{{ employee.email }}</p>
            </div>
            <div class="contact">
              <span class="material-symbols-outlined"> call </span>
              <p>+234-803-389-8620</p>
            </div>
          </div>
        </div>
      </article>
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
          department: 'Development',
          image: 'https://randomuser.me/api/portraits/thumb/women/8.jpg',
          email: 'emeka.duruzor@ccl.com.ng',
        },
        {
          id: 2,
          name: 'Ani Udoh',
          role: 'Director',
          department: 'Design',
          image: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
          email: 'ani.udoh@ccl.com.ng',
        },
        {
          id: 3,
          name: 'Nehemiah Igben',
          role: 'Staff',
          department: 'Development',
          image: 'https://randomuser.me/api/portraits/thumb/men/71.jpg',
          email: 'nehemiah.igben@ccl.com.ng',
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
          name: 'Aseb D',
          role: 'Intern',
          department: 'Development',
          image: 'https://randomuser.me/api/portraits/thumb/women/52.jpg',
          email: 'aseb.d@ccl.com.ng',
        },
        {
          id: 6,
          name: 'Emeka Duruzor',
          role: 'General Manager',
          department: 'Design',
          image: 'https://randomuser.me/api/portraits/thumb/men/35.jpg',
          email: 'emeka.duruzor@ccl.com.ng',
        },
        {
          id: 7,
          name: 'Ani Udoh',
          role: 'Director',
          department: 'Development',
          image: 'https://randomuser.me/api/portraits/thumb/men/23.jpg',
          email: 'emeka.duruzor@ccl.com.ng',
        },
        {
          id: 8,
          name: 'Nehemiah Igben',
          role: 'Staff',
          department: 'Design',
          image: 'https://randomuser.me/api/portraits/thumb/women/78.jpg',
          email: 'nehemiah.igben@ccl.com.ng',
        },
        {
          id: 9,
          name: 'Isaac Aku',
          role: 'Corper',
          department: 'Development',
          image: 'https://randomuser.me/api/portraits/thumb/men/36.jpg',
          email: 'emeka.duruzor@ccl.com.ng',
        },
        {
          id: 10,
          name: 'Aseb D',
          role: 'Intern',
          department: 'Design',
          image: 'https://randomuser.me/api/portraits/thumb/women/18.jpg',
          email: 'aseb.d@ccl.com.ng',
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.5rem;
}
.employee {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  padding: 0.7rem;
  min-height: 200px;
  border-radius: 6px;
  box-shadow: 4px 4px 5px 4px rgba(182, 182, 182, 0.219);
}

.employee-status-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
}

.employee .status {
  cursor: default;
  background-color: rgba(74, 201, 154, 0.1);
  border-radius: 4px;
  padding: 3px 7px;
  border: 1.5px solid #0acb4b;
  color: #0bbd58;
  font-size: 0.75rem;
  font-weight: 700;
}

.employee-status-wrapper span.more-icon {
  font-size: 1.2rem;
  cursor: pointer;
}

.employee .img-container {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #eee;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.img-container img {
  width: 100%;
  height: 100%;
}
.employee-info-top {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.employee-info-top .name {
  font-size: 1.0875rem;
  font-weight: 700;
  line-height: 1.5rem;
}
.employee-info-top .role {
  font-size: 0.875rem;
  font-weight: 600;
  color: #00000080;
}
.employee-info-bottom {
  background-color: rgba(238, 238, 238, 0.747);
  flex: 1;
  border-radius: 6px;
  padding: 0.7rem;
}

.bottom-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  gap: 0.7rem;
}

.bottom-info > {
  flex: 0.5;
}

.bottom-info h4 {
  font-size: 0.75rem;
  font-weight: 600;
  color: #00000080;
}

.bottom-info p {
  margin-top: 3px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #1c1c1c;
}

.contact-info .contact {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.3rem;
  font-size: 0.75rem;
}

.contact + .contact {
  margin-top: 3px;
}

.contact-info .contact span {
  font-size: 1.3rem;
}

.contact-info .contact p {
  line-height: 1.3rem;
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
