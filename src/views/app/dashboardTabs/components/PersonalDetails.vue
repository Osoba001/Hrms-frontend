<template>
  <section class="personal-details">
    <h2 class="section-title">Personal details</h2>

    <div class="personal-details">
      <div class="inputs-container">
        <div class="input">
          <TextInput
            :required="true"
            label="Surname"
            placeholder="Enter your surname"
            @update-value="(data) => (userInfo.bio.employee.surname = data)"
            :value="user.surname"
          />
        </div>
        <div class="input">
          <TextInput
            :required="true"
            label="First name"
            placeholder="Enter your first name"
            @update-value="(data) => (userInfo.bio.employee.firstName = data)"
            :value="user.firstName"
          />
        </div>
        <div class="input">
          <TextInput
            :required="true"
            label="Email address"
            type="email"
            placeholder="Enter your email"
            @update-value="(data) => (userInfo.bio.employee.email = data)"
            :value="user.email"
            :readonly="true"
          />
        </div>
        <div class="input">
          <TextInput
            :required="true"
            label="Phone number"
            type="number"
            placeholder="Enter your phone number"
            @update-value="(data) => (userInfo.bio.employee.phoneNumber = data)"
            :value="user.phoneNo"
          />
        </div>
        <div class="input">
          <TextInput
            :required="true"
            label="Residential address"
            placeholder="Enter your residential address"
            @update-value="
              (data) => (userInfo.bio.employee.residentialAddress = data)
            "
            :value="user.contactAddress"
          />
        </div>
      </div>

      <div class="inputs-container">
        <div class="input">
          <TextInput
            :required="true"
            label="State of origin"
            placeholder="Enter your state of origin"
            @update-value="
              (data) => (userInfo.bio.employee.stateOfOrigin = data)
            "
            :value="user.stateOfOrigin"
          />
        </div>
        <div class="input">
          <TextInput
            :required="true"
            label="Date of Birth"
            type="date"
            min="1960-01-01"
            max="2010-01-01"
            @update-value="(data) => (userInfo.bio.employee.dateOfBirth = data)"
            :value="user.dob"
          />
        </div>
        <div class="input">
          <TextInput
            :required="true"
            label="Date of hire"
            type="date"
            min="2012-01-01"
            max="2040-01-01"
            @update-value="(data) => (userInfo.bio.employee.dateOfHire = data)"
            :value="user.dateEmployed"
          />
        </div>
        <div class="input">
          <label class="form-label" for="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            v-model="userInfo.bio.employee.gender"
          >
            <option value="male" :selected="user.gender === 'm'">Male</option>
            <option value="female" :selected="user.gender === 'female'">
              Female
            </option>
          </select>
        </div>
        <div class="input">
          <label class="form-label" for="marital-status">Marital status</label>
          <select
            name="marital-status"
            id="marital-status"
            v-model="userInfo.bio.employee.maritalStatus"
          >
            <option :selected="user.maritalStatus === 'single'" value="single">
              Single
            </option>
            <option
              :selected="user.maritalStatus === 'married'"
              value="married"
            >
              Married
            </option>
          </select>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TextInput from "@/components/TextInput.vue";
import { mapState } from "vuex";

export default {
  name: "BioPersonalDetails",
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
