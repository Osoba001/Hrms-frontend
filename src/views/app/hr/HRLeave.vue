<template>
	<section class="employees-detail">
		<table
			v-motion
			:initial="{
				opacity: 0,
				y: -30,
			}"
			:enter="{
				opacity: 1,
				y: 0,
			}"
		>
			<tr>
				<th>Name</th>
				<th>Leave type</th>
				<th>Status</th>
				<th>Period</th>
			</tr>
			<tr>
				<td>Jude Chinedu</td>
				<td>Annual</td>
				<td><span class="leave-status">Ongoing</span></td>
				<td>11th May - 21th May</td>
			</tr>
			<tr>
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
			</tr>
		</table>
	</section>
</template>

<script>
import axios from "axios";

export default {
	name: "HRLeave",
	data() {
		return {
			isLoading: false,
			leaveInfo: null,
		};
	},
	async mounted() {
		try {
			this.isLoading = true;
			const { data } = await axios.get("/Leave");
			this.leaveInfo = data;
			this.isLoading = false;
		} catch (err) {
			console.log(err.message);
			this.isLoading = false;
		}
	},
};
</script>

<style scoped>
section.employees-detail {
	margin-top: 0.3rem;
	padding: 1.5rem;
	background-color: #fff;
	flex: 1;
	border-top-left-radius: 12px;
	border-top-right-radius: 12px;
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
