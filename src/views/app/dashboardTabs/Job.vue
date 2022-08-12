<template>
  <div class="job-container tab-container">
    <form @submit.prevent="">
      <section class="work-details">
        <h2 class="section-title">Work details</h2>

        <div>
          <div class="inputs-container">
            <div class="input">
              <label for="department">Department</label>
              <select name="Department" id="department">
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
              <label for="worktype">Work type</label>
              <select name="worktype" id="worktype">
                <option value="remote">Remote</option>
                <option value="office">Office</option>
              </select>
            </div>

            <div class="input">
              <label for="job-role">Job role</label>
              <select name="job-role" id="job-role">
                <option value="remote">Software Development</option>
                <option value="office">UI/UX</option>
              </select>
            </div>

            <div class="input">
              <label for="contract-type">Contract type</label>
              <select name="contract-type" id="contract-type">
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
              </select>
            </div>

            <div class="input">
              <label for="contract-type">Manager</label>
              <select name="contract-type" id="contract-type">
                <option value="eno-udonkwo">Eno Udonkwo</option>
                <option value="emeka-duruzor">Emeka Duruzor</option>
              </select>
            </div>
          </div>

          <div class="inputs-container">
            <div class="input">
              <TextInput label="Date of Employment" type="date" />
            </div>

            <div>
              <h4>Confirmation Status</h4>
              <div class="radio-btns">
                <div class="radio-btn-container">
                  <input
                    type="radio"
                    id="yes"
                    name="employment-confirmation"
                    value="yes"
                  />
                  <label for="yes">Yes</label><br />
                </div>
                <div class="radio-btn-container">
                  <input
                    type="radio"
                    id="no"
                    name="employment-confirmation"
                    value="no"
                  />
                  <label for="no">No</label><br />
                </div>
              </div>
            </div>

            <div>
              <h4>Offer letter status</h4>
              <div class="radio-btns">
                <div class="radio-btn-container">
                  <input
                    type="radio"
                    id="received"
                    name="offer-letter-status"
                    value="received"
                  />
                  <label for="received">Received</label><br />
                </div>
                <div class="radio-btn-container">
                  <input
                    type="radio"
                    id="not-received"
                    name="offer-letter-status"
                    value="not-received"
                  />
                  <label for="not-received">Not received</label><br />
                </div>
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
              <select name="department" id="department">
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
              <select name="previous-job-role" id="previous-job-role">
                <option value="petroleum-engineer">Petroleum engineer</option>
                <option value="petroleum-engineer">Petroleum engineer</option>
              </select>
            </div>

            <div class="input">
              <label for="">Reason for change</label>
              <textarea
                name="reason-for-change"
                id="reason-for-change"
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
        </div>
      </section>

      <dashboard-bottom-buttons-nav
        backRoute="/bio"
        nextRoute="/employment-history"
      />
    </form>
  </div>
</template>

<script>
import TextInput from '@/components/TextInput.vue'
import DashboardBottomButtonsNav from '@/components/DashboardBottomButtonsNav.vue'

export default {
  name: 'Job',
  components: { TextInput, DashboardBottomButtonsNav },
}
</script>

<style scoped>
.job-container {
  width: 100%;
}
section {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0.5rem;
}
section.work-details {
  margin-bottom: 1rem;
}
section h4 {
  font-weight: 400;
  margin-bottom: 0.7rem;
  font-size: 0.875rem;
}
form {
  display: flex;
  flex-direction: column;
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
