<template>
  <ModalBackdrop @close="toggleModal">
    <div class="modal-inner">
      <button class="edit-btn" @click="handleEdit">Validate</button>

      <div class="modal-top">
        <div class="left">
          <h3 class="modal-title">Profile image</h3>
          <div class="img-container">
            <img
              src="https://randomuser.me/api/portraits/men/0.jpg"
              alt="user"
            />
          </div>
        </div>

        <div class="right">
          <div class="projects-worked">
            <h3 class="modal-title">Projects worked on</h3>
            <article>
              <p>SEPAL BFS Web Version</p>
              <p>BFS ECONOMICS</p>
              <p>SEPAL EPT</p>
              <p>SEPAL 2021</p>
            </article>
          </div>

          <div class="skills">
            <h3 class="modal-title">Skills</h3>
            <span class="skill"> Vue.js, </span>
            <span class="skill"> C#, </span>
            <span class="skill"> .Net Core, </span>
            <span class="skill"> PHP, </span>
          </div>
        </div>
      </div>

      <div class="modal-bottom">
        <div class="left">
          <h3 class="modal-title">Employee Details</h3>
          <div class="info-container">
            <span class="label">First Name</span>
            <p>Michael</p>
          </div>
          <div class="info-container">
            <span class="label">Last Name</span>
            <p>Jordan</p>
          </div>
          <div class="info-container">
            <span class="label">Email Address</span>
            <p>michael.jordan@nba.com</p>
          </div>
          <div class="info-container">
            <span class="label">Position</span>
            <p>iOS Developer</p>
          </div>
          <div class="info-container">
            <span class="label">Department</span>
            <p>Research and Development</p>
          </div>
        </div>

        <div class="right">
          <div class="info-container">
            <span class="label">Marital status</span>
            <p>Single</p>
          </div>
          <div class="info-container">
            <span class="label">Next of Kin</span>
            <p>Mrs. Emmanuel</p>
          </div>
          <div class="info-container">
            <span class="label">Gender</span>
            <p>Male</p>
          </div>
          <div class="info-container">
            <span class="label">Department</span>
            <p>Research and Development</p>
          </div>
          <div class="info-container">
            <span class="label">Contact</span>
            <p>08081112224</p>
          </div>
        </div>
      </div>
    </div>
  </ModalBackdrop>
</template>

<script>
import ModalBackdrop from './ModalBackdrop.vue'

export default {
  name: 'EmployeeModalInfo',
  components: { ModalBackdrop },
  props: ['toggleModal'],
  methods: {
    handleEdit() {
      alert('Edit employee')
    },
  },
}
</script>

<style scoped>
.modal-inner {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: auto;
}

.modal-inner::-webkit-scrollbar {
  width: 7px;
}

.modal-inner .edit-btn {
  padding: 0.3em 1em;
  background-color: #192041;
  border: 1px solid #192041;
  border-radius: 4px;
  color: #fff;
  margin-left: auto;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 300ms ease;
}

.modal-inner .edit-btn:hover {
  background-color: transparent;
  color: #192041;
}

.modal-top,
.modal-bottom {
  display: flex;
  gap: 0.7rem;
}

.modal-top .left {
  flex: 0.35;
}

.modal-top .right {
  flex: 0.65;
}

.modal-bottom .left {
  flex: 0.5;
}

.modal-bottom .right {
  flex: 0.5;
  margin-top: 1.7rem;
}

.img-container {
  border-radius: 8px;
  overflow: hidden;
}

.img-container img {
  width: 100%;
  height: 100%;
}

.modal-title {
  font-size: 0.875rem;
  color: #ca1310;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-weight: 600;
}

.info-container {
  background-color: rgba(222, 222, 222, 0.422);
  padding: 1.4rem 0.7rem 0.3rem;
  border-radius: 8px;
  position: relative;
}

.info-container + .info-container {
  margin-top: 0.7rem;
}

.info-container .label {
  font-size: 0.75rem;
  position: absolute;
  top: 5px;
  color: #00000080;
}

.info-container p {
  font-size: 0.875rem;
  color: #000;
}

.skills {
  margin-top: 0.5rem;
}

.projects-worked article {
  background-color: rgba(222, 222, 222, 0.422);
  border-radius: 8px;
  padding: 0.7rem;
}

.projects-worked p {
  font-size: 0.875rem;
}
.projects-worked p + p {
  margin-top: 0.5rem;
}

@media (max-width: 580px) {
  .modal-inner {
    padding-top: 3rem;
  }
  .modal-top,
  .modal-bottom {
    flex-direction: column;
  }
  .img-container {
    width: 150px;
    height: 150px;
  }
  .skills {
    margin-top: 1rem;
  }
  .modal-bottom .right {
    margin-top: 0;
  }
}
</style>
