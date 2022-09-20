<template>
  <div class="job-container tab-container">
    <form @submit.prevent="handleSubmit">
      <div class="sections-container">
        <section class="work-details">
          <h2 class="section-title">Work details</h2>

          <div class="inputs-container">
            <div class="input">
              <label for="department">Department</label>
              <select
                name="Department"
                id="department"
                v-model="userInfo.job.workDetails.department"
              >
                <option value="Research and Development">
                  Research and Development
                </option>
                <option value="Learning and Development">
                  Learning and Development
                </option>
                <option value="EDTS">EDTS</option>
                <option value="P.E.C">P.E.C</option>
              </select>
            </div>

            <div class="input">
              <label for="job-role">Job role</label>
              <select
                name="job-role"
                id="job-role"
                v-model="userInfo.job.workDetails.role"
              >
                <option value="software-development">
                  Software Development
                </option>
                <option value="ui/ux">UI/UX</option>
              </select>
            </div>

            <div class="input-flex">
              <div class="input">
                <label for="worktype">Work type</label>
                <select
                  name="worktype"
                  id="worktype"
                  v-model="userInfo.job.workDetails.workType"
                >
                  <option value="office">On-site</option>
                  <option value="remote">Remote</option>
                  <option value="office">Hybrid</option>
                </select>
              </div>

              <div class="input">
                <label for="contract-type">Contract type</label>
                <select
                  name="contract-type"
                  id="contract-type"
                  v-model="userInfo.job.workDetails.contractType"
                >
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                </select>
              </div>
            </div>

            <div class="input-flex">
              <div class="input">
                <label for="contract-type">Manager</label>
                <select
                  name="contract-type"
                  id="contract-type"
                  v-model="userInfo.job.workDetails.manager"
                >
                  <option value="eno-udonkwo">Eno Udonkwo</option>
                  <option value="emeka-duruzor">Emeka Duruzor</option>
                </select>
              </div>

              <div class="input">
                <TextInput
                  label="Date of hire"
                  type="date"
                  min="2012-01-01"
                  max="2040-01-01"
                  @update-value="
                    (data) => (userInfo.job.workDetails.dateOfHire = data)
                  "
                />
              </div>
            </div>

            <div class="radio-btns-wrapper">
              <h4>Offer letter status</h4>
              <div class="radio-btns">
                <div class="radio-btn-container">
                  <input
                    type="radio"
                    id="received"
                    name="offer-letter-status"
                    value="received"
                    v-model="userInfo.job.workDetails.offerLetterStatus"
                  />
                  <label for="received">Received</label><br />
                </div>
                <div class="radio-btn-container">
                  <input
                    type="radio"
                    id="not-received"
                    name="offer-letter-status"
                    value="not-received"
                    v-model="userInfo.job.workDetails.offerLetterStatus"
                  />
                  <label for="not-received">Not received</label><br />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="section-title">Previous role</h2>
          <div class="personal-details">
            <div class="inputs-container">
              <div class="input">
                <label for="contract-type">Department</label>
                <select
                  name="department"
                  id="department"
                  v-model="userInfo.job.previousRole.department"
                >
                  <option value="petroleum-consulting">
                    Petroleum consulting
                  </option>
                  <option value="petroleum-consulting">
                    Petroleum consulting
                  </option>
                </select>
              </div>

              <div class="input">
                <label for="previous-job-role">Job role</label>
                <select
                  name="previous-job-role"
                  id="previous-job-role"
                  v-model="userInfo.job.previousRole.role"
                >
                  <option value="petroleum-engineer">Petroleum engineer</option>
                  <option value="petroleum-engineer">Petroleum engineer</option>
                </select>
              </div>

              <div class="input">
                <label for="">Reason for change</label>
                <textarea
                  name="reason-for-change"
                  id="reason-for-change"
                  v-model="userInfo.job.previousRole.reasonForChange"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
          </div>
        </section>
      </div>

      <dashboard-bottom-buttons-nav
        :backRoute="{name: ROUTES.bio}"
        :nextRoute="{name: ROUTES.employmentHistory}"
      />
    </form>
  </div>
</template>

<script>
import TextInput from '@/components/TextInput.vue'
import DashboardBottomButtonsNav from '@/components/DashboardBottomButtonsNav.vue'
import { mapState } from 'vuex'
import { ROUTES } from '@/global/routes' 

export default {
  name: 'Job',
  components: { TextInput, DashboardBottomButtonsNav,  },
  computed: {
    ...mapState('appStore', ['userInfo']),
  },
  data() {
    return {
      ROUTES
    }
  }
}
</script>

<style scoped>
.job-container {
  width: 100%;
}

form .sections-container {
  display: flex;
  gap: 0.5rem;
}

form .sections-container section {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  flex: 0.5;
}

.inputs-container {
  flex: 0.5;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.inputs-container .input-flex {
  display: flex;
  gap: 1rem;
}

.input {
  width: 100%;
}
.input label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}
.input select,
.input textarea {
  width: 100%;
  padding: 0.7em 1em;
  font-size: 0.875rem;
  border: 1px solid #cad6e4;
  border-radius: 5px;
  font-family: 'Lato', Helvetica, sans-serif;
}

.job-container .radio-btns-wrapper {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.job-container .radio-btns {
  display: flex;
  gap: 2rem;
}

.job-container .radio-btn-container {
  margin-top: 0;
}
.job-container .radio-btn-container label {
  margin-left: 0.5rem;
}

@media (max-width: 890px) {
  form .sections-container {
    flex-direction: column;
  }
  .inputs-container {
    max-width: 100%;
  }
}
</style>
