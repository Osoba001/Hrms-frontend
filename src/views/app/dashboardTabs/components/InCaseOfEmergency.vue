<template>
  <section>
    <h2 class="section-title">In case of emergency</h2>

    <div class="personal-details">
      <div class="inputs-container">
        <div class="input">
          <TextInput
            :required="true"
            label="Surname"
            placeholder="Enter your surname"
            @update-value="
              (data) => (userInfo.bio.inCaseOfEmergency.surname = data)
            "
          />
        </div>
        <div class="input">
          <TextInput
            :required="true"
            label="First name"
            placeholder="Enter your first name"
            @update-value="
              (data) => (userInfo.bio.inCaseOfEmergency.firstName = data)
            "
          />
        </div>
        <div class="input">
          <TextInput
            :required="true"
            label="Phone number"
            type="number"
            placeholder="Enter your phone number"
            @update-value="
              (data) => (userInfo.bio.inCaseOfEmergency.phoneNumber = data)
            "
          />
        </div>
      </div>

      <div class="inputs-container">
        <div class="input">
          <TextInput
            :required="true"
            label="Residential address"
            placeholder="Enter your residential address"
            @update-value="
              (data) =>
                (userInfo.bio.inCaseOfEmergency.residentialAddress = data)
            "
          />
        </div>

        <div class="input">
          <label class="form-label" for="gender"
            >Relationship with employee</label
          >
          <select
            name="relationship"
            id="relationship"
            v-model="userInfo.bio.inCaseOfEmergency.relationship"
          >
            <option value="father">Father</option>
            <option value="sibling">Sibling</option>
            <option value="mother">Mother</option>
            <option value="uncle">Uncle</option>
            <option value="aunt">Aunt</option>
            <option value="nephew">Nephew</option>
            <option value="niece">Niece</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="input">
          <TextInput
            :required="true"
            label="Date of Birth"
            type="date"
            min="1960-01-01"
            max="2010-01-01"
            @update-value="
              (data) => (userInfo.bio.inCaseOfEmergency.dateOfBirth = data)
            "
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import TextInput from "@/components/TextInput.vue";

export default {
  name: "InCaseOfEmergency",
  computed: {
    ...mapState("appStore", ["userInfo", "user"]),
  },
  components: { TextInput },
};
</script>

<style scoped>
section {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0.5rem;
}
section + section {
  margin-top: 1rem;
}
form {
  background-color: #eee;
}
section > div {
  display: flex;
  gap: 2rem;
}
.inputs-container {
  flex: 0.5;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.input {
  flex: 1;
}

.next-btn {
  padding: 0.7em 1.5em;
  background-color: #2b9de9;
  color: #fff;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms ease;
  margin-left: auto;
  margin-bottom: 1.5rem;
}

.next-btn:hover {
  background-color: #255eb4;
}

@media (max-width: 850px) {
  section > div {
    flex-direction: column;
    gap: 1rem;
  }
  .inputs-container {
    max-width: 100%;
  }
}
</style>
