<template>
  <ModalBackdrop @close="toggleModal">
    <form @submit.prevent="addManagerProject">
      <h2 class="section-title">Create project</h2>
      <div>
        <TextInput label="Project title" placeholder="Project..." />
      </div>

      <div class="input-flex">
        <div>
          <label class="form-label" for="status">Status</label>
          <select name="status" id="status">
            <option value="ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
            <option value="not-started">Not started</option>
          </select>
        </div>
        <div>
          <TextInput label="Team Lead" placeholder="John Stephen" />
        </div>
      </div>

      <div class="add-collaborator-container">
        <button @click="addToCollaborators" class="add-collaborator-btn">
          Add
        </button>
        <TextInput
          label="Other members"
          placeholder="Jane Doe"
          @update-value="updateCollaborator"
          clearOnFocus
        />

        <article v-if="collaborators.length" class="other-collaborators">
          <h3>Collaborators</h3>
          <p
            class="collaborator"
            v-for="collaborator in collaborators"
            :key="collaborator.id"
          >
            {{ collaborator.name }}

            <span
              @click="removeCollaborator(collaborator.id)"
              class="material-symbols-outlined p-ripple"
              v-ripple
            >
              delete
            </span>
          </p>
        </article>
      </div>

      <button type="submit" class="add-experience-btn modal-add-btn">
        Create project
      </button>
    </form>
  </ModalBackdrop>
</template>

<script>
import ModalBackdrop from "@/components/ModalBackdrop.vue";
import axios from "axios";
import TextInput from "../TextInput.vue";

export default {
  name: "ManagerAddProjectModal",
  components: { ModalBackdrop, TextInput },
  props: ["toggleModal"],
  data() {
    return {
      collaborators: [],
      collaborator: "",
    };
  },
  methods: {
    updateCollaborator(data) {
      this.collaborator = data;
    },
    addToCollaborators() {
      this.collaborators.push({
        id: Math.random(),
        name: this.collaborator,
      });
    },
    removeCollaborator(collaboratorId) {
      this.collaborators = this.collaborators.filter(
        (collaborator) => collaborator.id !== collaboratorId
      );
    },
    async addManagerProject() {
      const data = {
        teamLeadId: "675a2a09-e879-4af5-5bb0-08da9c75b1e0",
        name: "Our new project III",
        teamMemberIds: ["43f28d19-6caa-473b-5bb1-08da9c75b1e0"],
      };

      const response = await axios.post(
        "http://creshr.svr.cyphercrescent.com:44386/api/CompanyProject",
        {
          ...data,
        }
      );

      console.log(response);
      return response.data;
    },
  },
};
</script>

<style scoped>
form {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
}

form .section-title {
  margin-bottom: 0;
}

form .input-flex {
  display: flex;
  gap: 1rem;
}

form .input-flex > div {
  flex: 0.5;
}

.add-collaborator-container {
  position: relative;
}

.add-collaborator-btn {
  position: absolute;
  top: -5px;
  right: 0;
  background-color: #192041;
  padding: 0.3em 0.7em;
  border-radius: 4px;
  color: #fff;
  font-size: 0.75rem;
  cursor: pointer;
  transition: background-color 200ms ease;
}
.add-collaborator-btn:hover {
  background-color: #303c76;
}

.other-collaborators {
  background-color: #eee;
  padding: 0.5rem;
  margin-top: 0.5rem;
}

.other-collaborators h3 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.collaborator {
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.collaborator span {
  font-size: 1.3rem;
  color: #ca1310;
  cursor: pointer;
}

.collaborator + .collaborator {
  margin-top: 0.3rem;
}

.modal-add-btn {
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
  padding-inline: 2em;
}
</style>
