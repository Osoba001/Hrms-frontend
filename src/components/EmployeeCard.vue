<template>
  <article
    class="employee p-ripple"
    @click="employee.status === 'active' && toggleModal()"
    v-ripple
  >
    <header class="employee-status-wrapper">
      <div class="status" :class="{ inactive: employee.status === 'inactive' }">
        <span>{{ employee.status }}</span>
      </div>
      <div
        v-if="employee.status === 'active'"
        class="icon-container p-ripple"
        @click="handleClick"
        v-ripple
      >
        <span class="material-symbols-outlined icon"> more_horiz </span>
      </div>
    </header>

    <div class="employee-info-top">
      <div class="img-container">
        <img v-if="employee.image" :src="employee.image" alt="user" />
        <span v-if="!employee.image" class="material-symbols-outlined">
          person
        </span>
      </div>
      <h3 class="name">{{ !employee.name ? '-' : employee.name }}</h3>
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
          <p>
            {{ new Date(employee.dateHired).toLocaleDateString() }}
          </p>
        </div>
      </div>
      <div class="contact-info">
        <div class="contact">
          <span class="material-symbols-outlined"> mail </span>
          <p>{{ employee.email }}</p>
        </div>
      </div>
    </div>
  </article>

  <teleport to=".modals" v-if="showModal">
    <EmployeeModalInfo :toggleModal="toggleModal" />
  </teleport>
</template>

<script>
import EmployeeModalInfo from './EmployeeModalInfo.vue'

export default {
  name: 'EmployeeCard',
  props: ['employee'],
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
  },
  components: { EmployeeModalInfo },
}
</script>

<style scoped>
.employee {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  padding: 0.7rem;
  min-height: 200px;
  border-radius: 6px;
  box-shadow: 2px 2px 5px 2px rgba(182, 182, 182, 0.219);
  transition: box-shadow 250ms ease;
  cursor: pointer;
}

.employee:hover {
  background-color: rgba(255, 255, 255, 0.793);
  box-shadow: 4px 4px 5px 4px rgba(135, 135, 135, 0.282);
}

.employee-status-wrapper {
  display: flex;
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
  margin-right: auto;
  text-transform: capitalize;
}
.status.inactive {
  background-color: rgba(255, 166, 0, 0.159);
  border: 1.5px solid orange;
  color: orange;
}

.employee .icon-container {
  width: 30px;
  height: 30px;
  background-color: rgba(229, 229, 229, 0.566);
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: background-color 300ms ease;
}

.employee .icon-container:hover {
  background-color: rgb(229, 229, 229);
}

.employee-status-wrapper span.icon {
  font-size: 1.1rem;
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
.img-container span {
  font-size: 2em;
  color: #333;
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
  text-transform: capitalize;
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
</style>
