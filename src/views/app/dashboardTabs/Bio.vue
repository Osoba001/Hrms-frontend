<template>
  <div class="bio-container tab-container">
    <form>
      <!-- Personal details -->
      <section class="personal-details">
        <h2 class="section-title">Personal details</h2>

        <div class="personal-details">
          <div class="inputs-container">
            <div class="input">
              <TextInput
                label="Surname"
                placeholder="Enter your surname"
                @update-value="(data) => (userInfo.bio.employee.surname = data)"
              />
            </div>
            <div class="input">
              <TextInput
                label="First name"
                placeholder="Enter your first name"
                @update-value="
                  (data) => (userInfo.bio.employee.firstName = data)
                "
              />
            </div>
            <div class="input">
              <TextInput
                label="Email address"
                type="email"
                placeholder="Enter your email"
                @update-value="(data) => (userInfo.bio.employee.email = data)"
              />
            </div>
            <div class="input">
              <TextInput
                label="Phone number"
                type="number"
                placeholder="Enter your phone number"
                @update-value="
                  (data) => (userInfo.bio.employee.phoneNumber = data)
                "
              />
            </div>
            <div class="input">
              <TextInput
                label="Residential address"
                placeholder="Enter your residential address"
                @update-value="
                  (data) => (userInfo.bio.employee.residentialAddress = data)
                "
              />
            </div>
          </div>

          <div class="inputs-container">
            <div class="input">
              <TextInput
                label="State of origin"
                @update-value="
                  (data) => (userInfo.bio.employee.stateOfOrigin = data)
                "
              />
            </div>
            <div class="input">
              <TextInput
                label="Date of Birth"
                type="date"
                min="1960-01-01"
                max="2010-01-01"
                @update-value="
                  (data) => (userInfo.bio.employee.dateOfBirth = data)
                "
              />
            </div>
            <div class="input">
              <TextInput
                label="Date of hire"
                type="date"
                min="2012-01-01"
                max="2040-01-01"
                @update-value="
                  (data) => (userInfo.bio.employee.dateOfHire = data)
                "
              />
            </div>
            <div class="input">
              <label class="form-label" for="gender">Gender</label>
              <select
                name="gender"
                id="gender"
                v-model="userInfo.bio.employee.gender"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div class="input">
              <label class="form-label" for="marital-status"
                >Marital status</label
              >
              <select
                name="marital-status"
                id="marital-status"
                v-model="userInfo.bio.employee.maritalStatus"
              >
                <option value="single">Single</option>
                <option value="married">Married</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <!-- Next of Kin -->
      <section>
        <h2 class="section-title">Next of Kin details</h2>

        <div class="personal-details">
          <div class="inputs-container">
            <div class="input">
              <TextInput
                label="Surname"
                placeholder="Enter your surname"
                @update-value="
                  (data) => (userInfo.bio.nextOfKin.surname = data)
                "
              />
            </div>
            <div class="input">
              <TextInput
                label="First name"
                placeholder="Enter your first name"
                @update-value="
                  (data) => (userInfo.bio.nextOfKin.firstName = data)
                "
              />
            </div>
            <div class="input">
              <TextInput
                label="Phone number"
                type="number"
                placeholder="Enter your phone number"
                @update-value="
                  (data) => (userInfo.bio.nextOfKin.phoneNumber = data)
                "
              />
            </div>
          </div>

          <div class="inputs-container">
            <div class="input">
              <TextInput
                label="Email address"
                type="email"
                placeholder="Enter your email"
                @update-value="(data) => (userInfo.bio.nextOfKin.email = data)"
              />
            </div>
            <div class="input">
              <TextInput
                label="Residential address"
                placeholder="Enter your residential address"
                @update-value="
                  (data) => (userInfo.bio.nextOfKin.residentialAddress = data)
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
                v-model="userInfo.bio.nextOfKin.relationship"
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
          </div>
        </div>
      </section>

      <!-- In case of emergency -->
      <section v-if="userInfo.bio.employee.maritalStatus">
        <h2 class="section-title">In case of emergency</h2>

        <div class="personal-details">
          <div class="inputs-container">
            <div class="input">
              <TextInput
                label="Surname"
                placeholder="Enter your surname"
                @update-value="
                  (data) => (userInfo.bio.inCaseOfEmergency.surname = data)
                "
              />
            </div>
            <div class="input">
              <TextInput
                label="First name"
                placeholder="Enter your first name"
                @update-value="
                  (data) => (userInfo.bio.inCaseOfEmergency.firstName = data)
                "
              />
            </div>
            <div class="input">
              <TextInput
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

      <!-- Marital information -->
      <section v-if="userInfo.bio.employee.maritalStatus === 'married'">
        <h2 class="section-title">Marital information</h2>

        <div class="personal-details">
          <div class="inputs-container">
            <div class="input">
              <TextInput
                label="Spouse's name"
                placeholder="Enter spouse's name"
                @update-value="
                  (data) => (userInfo.bio.maritalInformation.name = data)
                "
              />
            </div>
            <div class="input">
              <TextInput
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
    </form>

    <DashboardBottomButtonsNav nextRoute="/job" />
  </div>
</template>

<script>
import TextInput from '@/components/TextInput.vue'
import DashboardBottomButtonsNav from '@/components/DashboardBottomButtonsNav.vue'
import { mapState } from 'vuex'

export default {
  name: 'Bio',
  components: { TextInput, DashboardBottomButtonsNav },
  computed: {
    ...mapState('appStore', ['userInfo']),
  },
}
</script>

<style scoped>
.bio-container {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}
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
