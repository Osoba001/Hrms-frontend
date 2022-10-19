<template>
	<div class="employees-container">
		<h2 class="section-title">
			{{ !importedEmails.length ? "List of Employees" : "Add Employees" }}
		</h2>

		<div
			class="cancel-btn p-ripple"
			v-if="importedEmails.length"
			v-ripple
			@click="REMOVE_IMPORTED_EMAILS"
		>
			<span class="material-symbols-rounded"> close </span>
		</div>

		<section
			class="employees"
			v-if="!importedEmails.length && !isLoading"
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
			<EmployeeCard
				v-for="employee in employees"
				v-bind:key="employee.id"
				:employee="employee"
			/>
		</section>
		<div v-if="isLoading" style="flex: 1" class="loader-container">
			<Loader />
		</div>

		<AddMultipleEmployees
			v-if="importedEmails.length"
			:data="importedEmails"
		/>
	</div>
</template>

<script>
import EmployeeCard from "@/components/EmployeeCard.vue";
import AddMultipleEmployees from "@/components/AddMultipleEmployees.vue";
import { mapMutations, mapState } from "vuex";
import Loader from "@/components/Loader.vue";
import axios from "axios";

export default {
	name: "Employees",
	components: { EmployeeCard, AddMultipleEmployees, Loader },
	data() {
		return {
			isLoading: false,
			showModal: false,
			employees: [],
			employeeToBeEdited: null,
		};
	},
	methods: {
		...mapMutations("appStore", ["REMOVE_IMPORTED_EMAILS"]),
		async fetchEmployees() {
			try {
				const response = await axios.get("/Employee");
				return response.data;
			} catch (err) {
				console.log(err.message);
			}
		},
		toggleModal(employeeId) {
			if (this.showModal === false) {
				this.employeeToBeEdited = this.employees.find(
					(employee) => employee.id === employeeId
				);
			}
			this.showModal = !this.showModal;
		},
	},
	computed: {
		...mapState("appStore", ["user", "importedEmails"]),
	},
	async mounted() {
		this.isLoading = true;
		this.employees = await this.fetchEmployees();
		this.isLoading = false;
	},
};
</script>

<style scoped>
.employees-container {
	position: relative;
	margin-top: 0.3rem;
	padding: 1.5rem;
	padding-top: 0.5rem;
	min-height: 350px;
	overflow-y: auto;
	flex: 1;

	display: flex;
	flex-direction: column;
}

.cancel-btn {
	position: absolute;
	right: 1.5rem;
	top: 0.5rem;
	padding: 0.3em;
	border-radius: 50%;
	background-color: #fff;
	display: grid;
	place-items: center;
	cursor: pointer;
}

.employees {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
	gap: 1.5rem;
}

@media (max-width: 450px) {
	.employees-container {
		padding: 1rem;
	}
}
</style>
