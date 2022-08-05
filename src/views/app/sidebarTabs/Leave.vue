<template>
<div class="job-container tab-container">
  <section>
        <h2>Leave Application </h2>
        <div class="personal-details">
          <div class="inputs-container">
            <div class="input">
              <label for="contract-type">Leave Type</label>
              <select name="department" id="department">
                <option value="petroleum-consulting">
                 Annual Leave
                </option>
                <option value="petroleum-consulting">
                  Sick leave
                </option>
              </select>
            </div>

            <div class="inputs-container">
            <div class="input">
              <TextInput label="Start Date" type="date" />
            </div>
          </div>
            

            <div class="input">
              <label for="previous-job-role">No of Days</label>
              <select name="previous-job-role" id="previous-job-role">
                <option value="petroleum-engineer">10</option>
                <option value="petroleum-engineer">9</option>
                <option value="petroleum-engineer">8</option>
                <option value="petroleum-engineer">7</option>
                <option value="petroleum-engineer">6</option>
                <option value="petroleum-engineer">5</option>
                <option value="petroleum-engineer">4</option>
                <option value="petroleum-engineer">3</option>
                <option value="petroleum-engineer">2</option>
                <option value="petroleum-engineer">1</option>
              </select>
            </div>

            <div class="inputs-container">
            <div class="input">
              <TextInput label="End Date" type="date" />
            </div>
          </div>
            <div class="input">
              <label for="">Messsage (Optimal)</label>
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
      
      </div>
      
   
</template>

<script>
import TextInput from '@/components/TextInput.vue'

export default {
  name: 'Leave',
  components: { TextInput },
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
  margin-bottom: 1rem;
}
section h2 {
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  color: #ca1310;
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



