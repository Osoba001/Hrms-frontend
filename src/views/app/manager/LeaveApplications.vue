<template>
	<div
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
		class="wrapper"
	>
		<button class="back-btn" @click="$router.back()">
			<span class="material-symbols-outlined"> arrow_back </span>
			Back
		</button>
		<section class="employees-detail">
			<h2 class="title">Pending leave applications</h2>

			<table class="pending-applications">
				<thead>
					<tr>
						<th>Name</th>
						<th>Leave type</th>
						<th>Period</th>
					</tr>
				</thead>

				<tbody>
					<tr @click="toggleModal">
						<td>Antoine Griezmann</td>
						<td>Casual</td>
						<td>11th May - 21th May</td>
					</tr>
					<tr @click="toggleModal">
						<td>Isaac Aku</td>
						<td>Annual</td>
						<td>11th May - 21th May</td>
					</tr>
				</tbody>
			</table>
		</section>
		<section class="employees-detail">
			<h2 class="title">Approved leave applications</h2>

			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Leave type</th>
						<th>Period</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>Antoine Griezmann</td>
						<td>Casual</td>
						<td>11th May - 21th May</td>
					</tr>
					<tr>
						<td>Isaac Aku</td>
						<td>Annual</td>
						<td>11th May - 21th May</td>
					</tr>
				</tbody>
			</table>
		</section>
	</div>

	<teleport to=".modals" v-if="showModal">
		<LeaveApproveOrDeclineModal :toggleModal="toggleModal" />
	</teleport>
</template>

<script>
import LeaveApproveOrDeclineModal from "./LeaveApproveOrDeclineModal.vue"

export default {
	components: { LeaveApproveOrDeclineModal },
	data() {
		return {
			showModal: false,
		}
	},
	methods: {
		toggleModal() {
			this.showModal = !this.showModal
		},
	},
}
</script>

<style scoped>
.wrapper {
	flex: 1;
	padding-right: 0.5rem;
	padding-top: 0.5rem;
}
section.employees-detail {
	margin-top: 0.5rem;
	padding: 1.5rem;
	background-color: #fff;
	flex: 1;
	border-radius: 12px;
}

h2.title {
	margin-bottom: 1rem;
	font-size: 1.25rem;
	color: #ca1310;
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
tbody tr {
	cursor: pointer;
}

.pending-applications tbody tr:hover {
	background-color: rgba(238, 238, 238, 0.401);
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
