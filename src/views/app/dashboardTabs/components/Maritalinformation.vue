<template>
  <section v-if="userInfo.bio.employee.maritalStatus === 'married'">
    <h2 class="section-title">Marital information</h2>

    <div class="personal-details">
      <div class="inputs-container">
        <div class="input">
          <TextInput
            :required="true"
            label="Spouse's name"
            placeholder="Enter spouse's name"
            @update-value="
              (data) => (userInfo.bio.maritalInformation.name = data)
            "
          />
        </div>
        <div class="input">
          <TextInput
            :required="true"
            label="Spouse's phone number"
            type="number"
            placeholder="Enter spouse's phone number"
            @update-value="
              (data) => (userInfo.bio.maritalInformation.phoneNumber = data)
            "
          />
        </div>
        <div class="input">
          <TextInput
            :required="true"
            label="Spouse's profession"
            placeholder="Enter spouse's profession"
            @update-value="
              (data) => (userInfo.bio.maritalInformation.profession = data)
            "
          />
        </div>
      </div>

      <div class="inputs-container">
        <div class="input">
          <TextInput
            :required="true"
            label="Residential address"
            placeholder="Enter spouse's residential address"
            @update-value="
              (data) =>
                (userInfo.bio.maritalInformation.residentialAddress = data)
            "
          />
        </div>

        <div class="input">
          <TextInput
            :required="true"
            label="Number of children"
            type="number"
            placeholder="Enter number of children"
            min="0"
            @update-value="
              (data) =>
                (userInfo.bio.maritalInformation.numberOfChildren = data)
            "
          />
        </div>

        <div class="input">
          <TextInput
            :required="true"
            label="Date of Birth"
            type="date"
            min="1960-01-01"
            max="2010-01-01"
            @update-value="
              (data) => (userInfo.bio.maritalInformation.dateOfBirth = data)
            "
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TextInput from "@/components/TextInput.vue";
import { mapState } from "vuex";

export default {
  name: "Maritalinformation",
  components: { TextInput },
  computed: {
    ...mapState("appStore", ["userInfo", "user"]),
  },
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
