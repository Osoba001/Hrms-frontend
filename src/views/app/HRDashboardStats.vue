<template>
  <div class="container">
    <section
      class="grid"
      v-motion
      :initial="{
        opacity: 0,
        y: -50,
      }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
    >
      <article class="card small-card total-employees-card">
        <h2 class="card-title">Total employees</h2>
        <div>
          <p class="numberOfEmployees">151</p>
          <span class="material-symbols-outlined"> diversity_3 </span>
        </div>
      </article>

      <article class="card small-card gender-card">
        <div>
          <span class="material-symbols-outlined"> face_6 </span>
          <h3>Male</h3>
          <p class="number">155</p>
          <p class="percentage">76.16%</p>
        </div>
        <div>
          <span class="material-symbols-outlined"> face_3 </span>
          <h3>Female</h3>
          <p class="number">155</p>
          <p class="percentage">76.16%</p>
        </div>
      </article>

      <article class="card small-card marital-status-card">
        <div>
          <span class="material-symbols-outlined"> group </span>
          <h3>Married</h3>
          <p class="number">155</p>
          <p class="percentage">76.16%</p>
        </div>
        <div>
          <span class="material-symbols-outlined"> person </span>
          <h3>Single</h3>
          <p class="number">155</p>
          <p class="percentage">76.16%</p>
        </div>
      </article>

      <article class="card small-card employment-details">
        <div>
          <h3>Fully employed</h3>
          <p class="number">155</p>
          <p class="percentage">76.16%</p>
        </div>
        <div>
          <h3>Exited</h3>
          <p class="number">155</p>
          <p class="percentage">76.16%</p>
        </div>
      </article>

      <article class="card chart-container">
        <Chart type="doughnut" :data="locationData" :options="lightOptions" />
        <h2 class="chart-title">Distibution by Work Location</h2>
      </article>

      <article class="card chart-container">
        <Chart type="pie" :data="worktypeData" :options="lightOptions" />
        <h2 class="chart-title">Distibution by Work-type</h2>
      </article>

      <article class="card chart-container">
        <Chart type="pie" :data="ageData" :options="lightOptions" />
        <h2 class="chart-title">Distibution by Age</h2>
      </article>

      <div class="card flex-column location-container">
        <article class="small-card active-workers-card active">
          <header>
            <h2 class="card-title">Active workers</h2>

            <div class="percentage-container">
              <span class="material-symbols-outlined green">
                arrow_drop_up
              </span>
              <p>59.22%</p>
            </div>
          </header>

          <div>
            <span class="material-symbols-outlined icon"> verified </span>
            <p class="number">173</p>
            <span />
          </div>
        </article>

        <article class="small-card active-workers-card inactive">
          <header>
            <h2 class="card-title">Inactive workers</h2>

            <div class="percentage-container">
              <span class="material-symbols-outlined red">
                arrow_drop_down
              </span>
              <p>59.22%</p>
            </div>
          </header>

          <div>
            <span class="material-symbols-outlined icon"> person_off </span>
            <p class="number">173</p>
            <span />
          </div>
        </article>
      </div>

      <article class="card chart-container department-chart">
        <Chart
          type="bar"
          :data="departmentsData"
          :options="horizontalOptions"
        />
        <h2 class="chart-title">Distibution by Department</h2>
      </article>

      <article class="card chart-container roles-chart">
        <Chart type="bar" :options="horizontalOptions" :data="roles" />
        <h2 class="chart-title">Distibution by Roles</h2>
      </article>

      <!-- <article class="chart-container line-chart">
        <Chart type="line" :data="lineStylesData" :options="basicOptions" />
      </article> -->
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "SEPAL 3.0",
          status: "ongoing",
        },
        {
          id: 2,
          title: "Nodal Analysis",
          status: "not started",
        },
        {
          id: 3,
          title: "BFS Economics",
          status: "ongoing",
        },
        {
          id: 4,
          title: "EPT",
          status: "completed",
        },
        {
          id: 5,
          title: "SMBS",
          status: "cancelled",
        },
        {
          id: 6,
          title: "WIMS",
          status: "ongoing",
        },
      ],
      roles: {
        labels: [
          "Staff",
          "Intern",
          "Manager",
          "Contract",
          "Team Lead",
          "General Manager",
          "Director",
        ],
        datasets: [
          {
            label: "Distribution by Roles",
            backgroundColor: "rgb(66, 116, 195)",
            data: [51, 13, 8, 6, 20, 4, 1],
          },
        ],
      },
      ageData: {
        labels: ["0-21", "21-25", "26-30", "31-40", "41-50", "51-60", "61-70"],
        datasets: [
          {
            data: [9, 17, 22, 20, 31, 27, 3],
            backgroundColor: [
              "rgb(158, 71, 11)",
              "rgb(66, 116, 195)",
              "#FFCE56",
              "rgb(163, 166, 164)",
              "rgb(60, 59, 60)",
              "rgb(88, 156, 214)",
              "rgb(147, 208, 77)",
            ],
            hoverBackgroundColor: [
              "rgb(158, 71, 11, 0.9)",
              "rgb(66, 116, 195, 0.9)",
              "rgb(148, 50, 31, 0.9)",
              "rgb(163, 166, 164, 0.9)",
              "rgb(60, 59, 60, 0.9)",
              "rgb(88, 156, 214, 0.9)",
              "rgb(147, 208, 77, 0.9)",
            ],
          },
        ],
      },
      locationData: {
        labels: ["Port Harcourt", "Benin", "Lagos", "Warri"],
        datasets: [
          {
            data: [80, 15, 10, 7],
            backgroundColor: [
              "rgb(66, 116, 195)",
              "rgb(60, 59, 60)",
              "rgb(88, 156, 214)",
              "rgb(147, 208, 77)",
            ],
            hoverBackgroundColor: [
              "rgb(66, 116, 195, 0.9)",
              "rgb(60, 59, 60, 0.9)",
              "rgb(88, 156, 214, 0.9)",
              "rgb(147, 208, 77, 0.9)",
            ],
          },
        ],
      },
      worktypeData: {
        labels: ["On-site", "Remote", "Hybrid"],
        datasets: [
          {
            data: [53, 45, 39],
            backgroundColor: [
              "rgb(66, 116, 195)",
              "#192041",
              "rgb(60, 59, 60)",
            ],
            hoverBackgroundColor: [
              "rgba(66, 116, 195, 0.9)",
              "#19204195",
              "rgb(60, 59, 60, 0.9)",
            ],
          },
        ],
      },
      departmentsData: {
        labels: [
          "CTO Office",
          "MD/CEO Office",
          "Corporate Finance",
          "Business Development",
          "Corporate Services",
          "ETDS",
          "Integrated Asset Management",
          "Data Democratisation",
          "Research and Development",
        ],
        datasets: [
          {
            label: "Distribution by Department",
            backgroundColor: "rgb(66, 116, 195)",
            data: [28, 48, 40, 19, 86, 27, 90, 134, 35],
          },
        ],
      },
      lightOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
      },
      horizontalOptions: {
        indexAxis: "y",
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#495057",
            },
            grid: {
              color: "#ebedef",
            },
          },
          y: {
            ticks: {
              color: "#495057",
            },
            grid: {
              color: "#ebedef",
            },
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.container {
  flex: 1;
  width: 100%;
  padding: 0.5rem 0.5rem 1rem;
  overflow-y: auto;
  max-width: 1146px;
  /* margin-inline: auto; */
}
section {
  margin-bottom: 1rem;
  gap: 0.7rem;
}
section.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
}

article {
  border-radius: 8px;
  box-shadow: 4px 4px 5px 4px rgba(182, 182, 182, 0.219);
  background-color: #fff;
}

.small-card {
  padding: 1rem;
  height: 140px;
  background-color: #192041;
  color: rgb(218, 218, 218);
}

.flex-column {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

/* Total employees card */
.total-employees-card {
  display: flex;
  flex-direction: column;
}

.total-employees-card > div {
  flex: 1;
  display: flex;
  align-items: flex-end;
}

.total-employees-card span {
  font-size: 4rem;
  margin-left: auto;
  color: #fff;
}

.numberOfEmployees {
  font-size: 2.7rem;
  margin-top: 0.5rem;
  color: #fff;
}

h2.card-title {
  font-size: 1rem;
  font-weight: 500;
}

/* Gender info card and marital status */
.gender-card,
.marital-status-card,
.employment-details {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

.gender-card span,
.marital-status-card span,
.employment-details span {
  font-size: 2rem;
  color: #fff;
}

.gender-card h3,
.marital-status-card h3,
.employment-details h3 {
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: 0.3rem;
}

.gender-card p.number,
.marital-status-card p.number,
.employment-details p.number {
  font-size: 1.4rem;
  font-weight: 600;
  margin-block: 2.5px;
  color: #fff;
}

.employment-details p.number {
  margin-block: 1rem;
}

.gender-card p.percentage,
.marital-status-card p.percentage,
.employment-details p.percentage {
  font-size: 0.875rem;
  opacity: 0.8;
}

/* Active workers */
.active-workers-card {
  display: flex;
  flex-direction: column;
}

.active-workers-card header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
}

.active-workers-card > div {
  flex: 1;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 50px;
}

.active-workers-card span.icon {
  position: absolute;
  font-size: 3rem;
  color: #fff;
  top: 100%;
  transform: translateY(-100%);
  left: 0;
}

.active-workers-card .number {
  font-size: 2.7rem;
  color: #fff;
}

.active-workers-card .percentage-container {
  display: flex;
  align-items: center;
}

.active-workers-card .percentage-container {
  font-size: 1rem;
}

.active-workers-card .percentage-container .green {
  color: green;
}
.active-workers-card .percentage-container .red {
  color: red;
}

.active-workers-card .percentage-container p {
  font-size: 0.875rem;
}

/* Chart card */
article.chart-container {
  padding: 1rem;
}

.chart-container h2 {
  text-align: center;
  font-size: 1rem;
  margin-top: 0.5rem;
}

.chart-container.department-chart {
  grid-column: span 2;
}
.chart-container.roles-chart {
  grid-column: span 2;
}

.card:nth-child(1) {
  order: 1;
}
.card:nth-child(2) {
  order: 2;
}
.card:nth-child(3) {
  order: 3;
}
.card:nth-child(4) {
  order: 4;
}
.card:nth-child(5) {
  order: 5;
}
.card:nth-child(6) {
  order: 6;
}
.card:nth-child(7) {
  order: 7;
}
.card:nth-child(8) {
  order: 8;
}
.card:nth-child(9) {
  order: 9;
}
.card:nth-child(10) {
  order: 10;
}

@media (max-width: 1221px) {
  .card:nth-child(1) {
    order: 1;
  }
  .card:nth-child(2) {
    order: 2;
  }
  .card:nth-child(3) {
    order: 3;
  }
  .card:nth-child(4) {
    order: 10;
  }
  .card:nth-child(5) {
    order: 4;
  }
  .card:nth-child(6) {
    order: 5;
  }
  .card:nth-child(7) {
    order: 6;
  }
  .card:nth-child(8) {
    order: 7;
  }
  .card:nth-child(9) {
    order: 8;
  }
  .card:nth-child(10) {
    order: 9;
  }
}

@media (max-width: 956px) {
  .card:nth-child(1) {
    order: 1;
  }
  .card:nth-child(2) {
    order: 2;
  }
  .card:nth-child(3) {
    order: 3;
  }
  .card:nth-child(4) {
    order: 4;
  }
  .card:nth-child(5) {
    order: 5;
  }
  .card:nth-child(6) {
    order: 6;
  }
  .card:nth-child(7) {
    order: 8;
  }
  .card:nth-child(8) {
    order: 7;
  }
  .card:nth-child(9) {
    order: 9;
  }
  .card:nth-child(10) {
    order: 10;
  }
}

@media (max-width: 780px) {
  .card:nth-child(1) {
    order: 1;
  }
  .card:nth-child(2) {
    order: 2;
  }
  .card:nth-child(3) {
    order: 3;
  }
  .card:nth-child(4) {
    order: 10;
  }
  .card:nth-child(5) {
    order: 5;
  }
  .card:nth-child(6) {
    order: 6;
  }
  .card:nth-child(7) {
    order: 7;
  }
  .card:nth-child(8) {
    order: 4;
  }
  .card:nth-child(9) {
    order: 8;
  }
  .card:nth-child(10) {
    order: 9;
  }
}
@media (max-width: 728px) {
  .card:nth-child(1) {
    order: 1;
  }
  .card:nth-child(2) {
    order: 2;
  }
  .card:nth-child(3) {
    order: 3;
  }
  .card:nth-child(4) {
    order: 4;
  }
  .card:nth-child(5) {
    order: 5;
  }
  .card:nth-child(6) {
    order: 6;
  }
  .card:nth-child(7) {
    order: 7;
  }
  .card:nth-child(8) {
    order: 8;
  }
  .card:nth-child(9) {
    order: 9;
  }
  .card:nth-child(10) {
    order: 10;
  }
}
@media (max-width: 487px) {
  .chart-container.department-chart {
    grid-column: 1;
  }
  .chart-container.roles-chart {
    grid-column: 1;
  }
}
</style>
