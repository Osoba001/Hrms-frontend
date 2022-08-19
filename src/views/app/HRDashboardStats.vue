<template>
  <div class="container">
    <section class="grid">
      <article class="chart-container">
        <Chart type="doughnut" :data="rolesData" :options="lightOptions" />
      </article>
      <article class="chart-container">
        <Chart type="pie" :data="ageData" :options="lightOptions" />
      </article>

      <article class="chart-container">
        <Chart type="doughnut" :data="locationData" :options="lightOptions" />
      </article>

      <article class="chart-container">
        <Chart
          type="bar"
          :data="departmentsData"
          :options="horizontalOptions"
        />
      </article>

      <article class="chart-container">
        <Chart type="pie" :data="worktypeData" :options="lightOptions" />
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
          title: 'SEPAL 3.0',
          status: 'ongoing',
        },
        {
          id: 2,
          title: 'Nodal Analysis',
          status: 'not started',
        },
        {
          id: 3,
          title: 'BFS Economics',
          status: 'ongoing',
        },
        {
          id: 4,
          title: 'EPT',
          status: 'completed',
        },
        {
          id: 5,
          title: 'SMBS',
          status: 'cancelled',
        },
        {
          id: 6,
          title: 'WIMS',
          status: 'ongoing',
        },
      ],
      rolesData: {
        labels: [
          'Staff',
          'Intern',
          'Manager',
          'Contract',
          'Team Lead',
          'General Manager',
          'Director',
        ],
        datasets: [
          {
            data: [51, 13, 8, 6, 20, 4, 1],
            backgroundColor: [
              'coral',
              '#36A2EB',
              '#FFCE56',
              '#FF6384',
              'violet',
              '#FFCE56',
              '#FF6384',
            ],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      },
      ageData: {
        labels: ['0-21', '21-25', '26-30', '31-40', '41-50', '51-60', '61-70'],
        datasets: [
          {
            data: [9, 17, 22, 20, 31, 27, 3],
            backgroundColor: [
              '#36A2EB',
              '#FFCE56',
              '#FF6384',
              'violet',
              '#FFCE56',
              '#FF6384',
              'coral',
            ],
            hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D'],
          },
        ],
      },
      locationData: {
        labels: ['Port Harcourt', 'Benin', 'Lagos', 'Warri'],
        datasets: [
          {
            data: [80, 15, 10, 7],
            backgroundColor: ['#0854cc', '#09b579', '#FFA726', 'coral'],
            hoverBackgroundColor: ['#0854cc', '#09b579', '#FFA726', 'coral'],
          },
        ],
      },
      worktypeData: {
        labels: ['On-site', 'Remote', 'Hybrid'],
        datasets: [
          {
            data: [53, 45, 39],
            backgroundColor: ['#0854cc', '#09b579', '#FFA726'],
            hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D'],
          },
        ],
      },
      departmentsData: {
        labels: [
          'CTO Office',
          'MD/CEO Office',
          'Corporate Finance',
          'Business Development',
          'Corporate Services',
          'ETDS',
          'Integrated Asset Management',
          'Data Democratisation',
          'Research and Development',
        ],
        datasets: [
          {
            label: 'Distribution by Department',
            backgroundColor: '#FFA726',
            data: [28, 48, 40, 19, 86, 27, 90, 134, 35],
          },
        ],
      },
      lightOptions: {
        plugins: {
          legend: {
            labels: {
              color: '#495057',
            },
          },
        },
      },
      horizontalOptions: {
        indexAxis: 'y',
        plugins: {
          legend: {
            labels: {
              color: '#495057',
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: '#495057',
            },
            grid: {
              color: '#ebedef',
            },
          },
          y: {
            ticks: {
              color: '#495057',
            },
            grid: {
              color: '#ebedef',
            },
          },
        },
      },
    }
  },
}
</script>

<style scoped>
.container {
  flex: 1;
  width: 100%;
  padding: 0.5rem 0.5rem 1rem;
  overflow-y: auto;
}
section {
  margin-bottom: 1rem;
  gap: 0.7rem;
}
section.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

article {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 4px 4px 5px 4px rgba(182, 182, 182, 0.219);
}

/* Personal info card */
article.personal-info {
  flex: 0.4;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Chart card */
article.chart-container {
  padding: 1rem;
}

section.bottom {
  display: flex;
}

.chart-container:nth-child(1) {
  order: 1;
}
.chart-container:nth-child(2) {
  order: 2;
}
.chart-container:nth-child(3) {
  order: 3;
}
.chart-container:nth-child(4) {
  order: 4;
  grid-column: 1 / span 2;
}
.chart-container:nth-child(5) {
  order: 5;
}

@media (max-width: 1024px) {
  .chart-container:nth-child(4) {
    order: 5;
  }
  .chart-container:nth-child(5) {
    order: 4;
  }
}

@media (max-width: 523px) {
  .chart-container:nth-child(4) {
    grid-column: 1;
  }
}
</style>
