<template>
  <div class="leave-container">
    <section class="statistics">
      <div class="stat-container">
        <h1 class="stat">24</h1>
        <p class="label">Annual Leave</p>
      </div>
      <div class="stat-container">
        <h1 class="stat">5</h1>
        <p class="label">Sick Leave</p>
      </div>
      <div class="stat-container">
        <h1 class="stat">5</h1>
        <p class="label">Casual Leave</p>
      </div>
    </section>

    <section
      class="employees-detail"
      v-motion
      :initial="{
        opacity: 0,
        y: -30,
      }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          type: 'keyframes',
        },
      }"
    >
      <button class="back-btn" @click="$router.back()">
        <span class="material-symbols-outlined"> arrow_back </span>
        Back
      </button>

      <table>
        <tr>
          <th>Name</th>
          <th>Leave type</th>
          <th>Status</th>
          <th>Period</th>
        </tr>
        <tr v-for="(leave, index) in leaves" :key="index">
          <td>{{leave.employeeName}}</td>
          <td>Annual</td>
          <td><span class="leave-status">Ongoing</span></td>
          <td>{{leave.period}}</td>
        </tr>


        <!-- <tr>
          <td>Antoine Griezmann</td>
          <td>Casual</td>
          <td><span class="leave-status">Ongoing</span></td>
          <td>11th May - 21th May</td>
        </tr>
        <tr>
          <td>Isaac Aku</td>
          <td>Annual</td>
          <td><span class="leave-status">Ongoing</span></td>

          <td>11th May - 21th May</td>
        </tr>
        <tr>
          <td>Benjamin Sunday</td>
          <td>Sick</td>
          <td><span class="leave-status">Ongoing</span></td>

          <td>11th May - 21th May</td>
        </tr>
        <tr>
          <td>Friday Marvelous</td>
          <td>Annual</td>
          <td><span class="leave-status">Ongoing</span></td>

          <td>11th May - 21th May</td>
        </tr>
        <tr>
          <td>Kelvin Emmanuel</td>
          <td>Examination</td>
          <td><span class="leave-status">Ongoing</span></td>

          <td>11th May - 21th May</td>
        </tr>
        <tr>
          <td>John Michael</td>
          <td>Casual</td>
          <td><span class="leave-status">Ongoing</span></td>

          <td>11th May - 21th May</td>
        </tr>
        <tr>
          <td>James Mack</td>
          <td>Casual</td>
          <td><span class="leave-status">Ongoing</span></td>

          <td>11th May - 21th May</td>
        </tr> -->

        
      </table>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data(){
    return {
      leaves: []
    }
  },
  methods: {
    ...mapActions("appStore", ["getUserId", "getAllOnGoingLeaves"]),

  },
  async mounted() {
    const responseLeaves = await this.getAllOnGoingLeaves();

    this.leaves = responseLeaves.map(l =>  ({
      employeeName: l.employeeName,
      leaveType: "Fun",
      status: "On Going",
      period: `${(new Date(l.startDate)).toLocaleDateString("en-US")} - ${(new Date(l.endDate)).toLocaleDateString("en-US")}`
    }))
    console.log("Mounted", responseLeaves)
  }
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
  gap: 1rem;
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

section.employees-detail {
  margin-top: 0.3rem;
  padding: 1.5rem;
  background-color: #fff;
  flex: 1;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.back-btn {
  padding: 0.5em 1em;
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
  margin-bottom: 1rem;
}

table {
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #eee;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #eee;
}

.leave-status {
  padding: 0.2em 0.4em;
  border: 1px solid orange;
  font-size: 0.875rem;
  border-radius: 4px;
  color: orange;
}

@media (max-width: 580px) {
  table {
    font-size: 0.875rem;
  }
}
@media (max-width: 450px) {
  table {
    white-space: nowrap;
  }
}
</style>
