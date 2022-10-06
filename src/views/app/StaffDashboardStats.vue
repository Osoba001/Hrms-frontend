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
				transition: {
					type: 'keyframes',
				},
			}"
		>
			<article class="personal-info">
				<div class="item">
					<div class="icon">
						<span class="material-symbols-outlined"> domain </span>
					</div>
					<div class="item-info">
						<h5>Department</h5>
						<p>{{ user.departmentName }}</p>
					</div>
				</div>
				<div class="item">
					<div class="icon">
						<span class="material-symbols-outlined">
							my_location
						</span>
					</div>
					<div class="item-info">
						<h5>Location</h5>
						<p>{{ user.jobLocation }}</p>
					</div>
				</div>
				<div class="item">
					<div class="icon">
						<span class="material-symbols-outlined"> person </span>
					</div>
					<div class="item-info">
						<h5>Manager</h5>
						<p>{{ user.manager }}</p>
					</div>
				</div>
				<div class="item">
					<div class="icon">
						<span class="material-symbols-outlined">
							calendar_today
						</span>
					</div>
					<div class="item-info">
						<h5>Work Anniversary</h5>
						<p>{{ new Date(user.dateEmployed).toDateString() }}</p>
					</div>
				</div>
				<div class="item">
					<div class="icon">
						<span class="material-symbols-outlined">
							timelapse
						</span>
					</div>
					<div class="item-info">
						<h5>Time in company</h5>
						<p>{{ user.timeInCompany }}</p>
					</div>
				</div>
			</article>

			<article class="projects">
				<h4 class="title">Projects</h4>

				<div
					class="project"
					v-for="project in projects"
					:key="project.id"
				>
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
				<Chart type="pie" :data="chartData" :options="lightOptions" />
			</article>

			<article class="leave-card-container">
				<h4 class="title">Available leave days</h4>

				<div
					class="leave-item"
					v-for="leave in leaveData"
					:key="leave.id"
				>
					<div class="leave-item-top">
						<p>{{ leave.type }} leave</p>
						<p class="days-info">
							{{ leave.availableDays }} of
							{{ leave.totalDays }} day(s)
						</p>
					</div>
					<ProgressBar
						:value="(leave.availableDays / leave.totalDays) * 100"
						:showValue="false"
						style="height: 10px; border-radius: 4px"
					/>
				</div>
			</article>
		</section>
	</div>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";

export default {
	data() {
		return {
			projects: [],
			chartData: {
				labels: ["A", "B", "C"],
				datasets: [
					{
						data: [300, 100, 170],
						backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
						hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
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
			leaveData: [],
		};
	},
	methods: {
		...mapActions("appStore", ["fetchProjects"]),
		async fetchLeaveData() {
			try {
				const response = await axios.get("http://localhost:3000/leave");
				return response.data;
			} catch (err) {
				console.log(err.message);
			}
		},
	},
	computed: {
		...mapGetters("appStore", ["user"]),
	},
	async mounted() {
		this.projects = await this.fetchProjects();
		this.leaveData = await this.fetchLeaveData();
	},
};
</script>

<style scoped>
.container {
	width: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 0.5rem 0.5rem 1rem;
	overflow-y: auto;
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

/* Leave card */
.leave-item p {
	font-size: 0.875rem;
}

.leave-card-container h4 {
	margin-bottom: 1rem;
}

.leave-item + .leave-item {
	margin-top: 0.7rem;
}

.leave-item .leave-item-top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 5px;
}

.leave-item .days-info {
	color: rgb(181, 181, 181);
	font-size: 0.75rem;
}
</style>
