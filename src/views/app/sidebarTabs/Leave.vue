<template>
  <div class="leave-container">
    <section class="leave-application">
      <h2>Leave Application</h2>
      <div class="personal-details">
        <div class="inputs-container">
          <div class="input">
            <label for="contract-type">Leave Type</label>
            <select name="department" id="department">
              <option value="annual-leave">Annual Leave</option>
              <option value="sick-leave">Sick leave</option>
              <option value="casual-leave">Casual leave</option>
              <option value="examination-leave">Examination leave</option>
              <option value="compassionate-leave">Compassionate leave</option>
              <option value="paternity-leave">Paternity leave</option>
            </select>
          </div>

          <!-- <div class="input">
            <label>Select range of days</label>
            <Datepicker v-model="date" range></Datepicker>
          </div> -->
          <div class="input">
            <label for="startDate">Start date</label>
            <input type="date" name="startDate" id="startDate" />
          </div>
          <div class="input">
            <label for="endDate">End date</label>
            <input type="date" name="endDate" id="endDate" />
          </div>
          <div class="input">
            <label for="handover-colleague">Handover colleague</label>
            <input
              type="text"
              name="handover-colleague"
              id="handover-colleague"
            />
          </div>
        </div>

        <div class="inputs-container">
          <div class="input">
            <label for="">Handover message (Optional)</label>
            <textarea
              name="reason-for-change"
              id="reason-for-change"
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <button class="apply-btn">Apply</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import Datepicker from '@vuepic/vue-datepicker'
// import '@vuepic/vue-datepicker/dist/main.css'

export default {
  name: 'Leave',
  components: {},
  data() {
    return {
      date: null,
    }
  },
}
</script>
<style scoped>
.leave-container {
  display: flex;
  flex-direction: column;
  gap: 2.5px;
  flex: 1;
}

section.statistics {
  padding: 2rem 1.5rem;
  background-color: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

  display: flex;
  justify-content: space-around;
}
.stat-container {
  display: flex;
  align-items: flex-end;
  color: #ca1310;
}
.stat-container h1 {
  font-size: 4rem;
  line-height: 3.3rem;
  margin-right: 0.5rem;
}

section.leave-application {
  margin-top: 0.3rem;
  padding: 1.5rem;
  background-color: #fff;
  flex: 1;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

section h2 {
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  color: #ca1310;
}

section > div {
  display: flex;
  gap: 1.5rem;
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
.input textarea,
input {
  width: 100%;
  padding: 0.7em 1em;
  font-size: 0.875rem;
  border: 1px solid #cad6e4;
  border-radius: 5px;
  font-family: 'Lato', Helvetica, sans-serif;
}

.input textarea {
  height: 247px;
}

.apply-btn {
  padding: 0.5em 1em;
  background-color: #2b9de9;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms ease;
}
.apply-btn:hover {
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
