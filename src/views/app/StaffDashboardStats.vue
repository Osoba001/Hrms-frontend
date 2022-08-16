<template>
  <div class="container">
    <section class="grid">
      <article class="personal-info">
        <div class="item">
          <div class="icon">
            <span class="material-symbols-outlined"> domain </span>
          </div>
          <div class="item-info">
            <h5>Department</h5>
            <p>Software Development</p>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <span class="material-symbols-outlined"> my_location </span>
          </div>
          <div class="item-info">
            <h5>Location</h5>
            <p>Port Harcourt</p>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <span class="material-symbols-outlined"> person </span>
          </div>
          <div class="item-info">
            <h5>Supervisor</h5>
            <p>Jane Doe</p>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <span class="material-symbols-outlined"> calendar_today </span>
          </div>
          <div class="item-info">
            <h5>Work Anniversary</h5>
            <p>June 3rd</p>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <span class="material-symbols-outlined"> timelapse </span>
          </div>
          <div class="item-info">
            <h5>Time in company</h5>
            <p>36 months</p>
          </div>
        </div>
      </article>

      <article class="projects">
        <h4 class="title">Projects</h4>

        <div class="project" v-for="project in projects" :key="project.id">
          <p>{{ project.title }}</p>
          <div
            class="status"
            :class="{
              ongoing: project.status === 'ongoing',
              cancelled: project.status === 'cancelled',
              'not-started': project.status === 'not started',
              completed: project.status === 'completed',
            }"
          >
            <span>{{ project.status }}</span>
          </div>
        </div>
      </article>

      <article class="chart-container">
        <Chart type="doughnut" :data="chartData" :options="lightOptions" />
      </article>

      <article>
        <h4 class="title">Leave</h4>

        <div class="leave-item">
          <p>Casual leave</p>
          <ProgressBar value="59" />
        </div>
      </article>
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
      chartData: {
        labels: ['A', 'B', 'C'],
        datasets: [
          {
            data: [300, 100, 170],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
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
    }
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 0.5rem;
}
section {
  margin-top: 0.5rem;
}
section.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 0.7rem;
}

article {
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 4px 4px 5px 4px rgba(182, 182, 182, 0.219);
}

/* Personal info card */
article.personal-info {
  flex: 0.4;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.personal-info .item {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.personal-info .icon {
  background-color: #eee;
  width: 38px;
  height: 38px;
  border-radius: 4px;
  display: grid;
  place-items: center;
}
.personal-info .icon span {
  font-size: 1.15rem;
  color: #192041;
}
.personal-info h5 {
  color: #00000060;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-family: sans-serif;
  margin-bottom: 3px;
}
.personal-info p {
  font-size: 0.875rem;
}

/* Projects card */
article.projects {
}
article .title {
  margin-bottom: 0.5rem;
}
.projects .project {
  display: flex;
  align-items: center;
  padding-block: 0.5rem;
  font-size: 0.875rem;
}
.project .status {
  border-radius: 3px;
  font-size: 0.7rem;
  margin-left: auto;
  width: 75px;
  height: 20px;
  display: grid;
  place-items: center;
}

.status.ongoing {
  border: 1.5px solid #ffa500;
  color: #ffa500;
  background-color: rgba(255, 165, 0, 0.1);
}

.status.cancelled {
  border: 1.5px solid rgb(255, 0, 0);
  color: rgb(255, 0, 0);
  background-color: rgba(255, 0, 0, 0.1);
}

.status.completed {
  border: 1.5px solid #0bbd58;
  color: #0bbd58;
  background-color: rgba(11, 189, 88, 0.1);
}

.status.not-started {
  border: 1.5px solid #bfbfbf;
  color: #b4b4b4;
  background-color: rgba(191, 191, 191, 0.1);
}

/* Chart card */
article.chart-container {
  padding: 1rem;
}
</style>
