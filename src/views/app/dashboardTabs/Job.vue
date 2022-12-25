<template>
	<div class="job-container tab-container">
		<form @submit.prevent="handleSubmit">
			<div class="sections-container">
				<section class="work-details">
					<h2 class="section-title">Work details</h2>

					<div class="inputs-container">
						<div class="input">
							<label for="department">Department</label>
							<select
								name="Department"
								id="department"
								v-model="userInfo.job.workDetails.department"
							>
								<option
									v-for="department in departments"
									:key="department.id"
									:value="department.id"
								>
									{{ department.name }}
								</option>
							</select>
						</div>

						<div class="inputs-container">
							<div class="input">
								<TextInput
									:required="true"
									label="Job role"
									placeholder="Enter your job role"
									@update-value="
										(data) =>
											(userInfo.bio.employee.stateOfOrigin =
												data)
									"
									:value="user.stateOfOrigin"
								/>
							</div>
						</div>

						<div class="input-flex">
							<div class="input">
								<label for="worktype">Job Location</label>
								<select
									name="worktype"
									id="worktype"
									v-model="userInfo.job.workDetails.workType"
								>
									<option value="1">Remote</option>
									<option value="0">On-site</option>
									<option value="1">Hybrid</option>
									<option value="0">WFH</option>
								</select>
							</div>

							<div class="input">
								<label for="contract-type">Contract type</label>
								<select
									name="contract-type"
									id="contract-type"
									v-model="
										userInfo.job.workDetails.contractType
									"
								>
									<option value="0">Full Time</option>
									<option value="1">Contract</option>
									<option value="1">Internship</option>
								</select>
							</div>
						</div>

						<div class="input-flex">
							<div class="input">
								<TextInput
									label="Date of hire"
									type="date"
									min="2012-01-01"
									max="2040-01-01"
									@update-value="
										(data) =>
											(userInfo.job.workDetails.dateOfHire =
												data)
									"
								/>
							</div>
						</div>

						<div class="radio-btns-wrapper">
							<h4>Offer letter status</h4>
							<div class="radio-btns">
								<div class="radio-btn-container">
									<input
										type="radio"
										id="received"
										name="offer-letter-status"
										:value="true"
										v-model="
											userInfo.job.workDetails
												.offerLetterStatus
										"
									/>
									<label for="received">Received</label><br />
								</div>
								<div class="radio-btn-container">
									<input
										type="radio"
										id="not-received"
										name="offer-letter-status"
										:value="false"
										v-model="
											userInfo.job.workDetails
												.offerLetterStatus
										"
									/>
									<label for="not-received"
										>Not received</label
									><br />
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<h2 class="section-title">Previous role</h2>
					<div class="personal-details">
						<div class="inputs-container">
							<div class="input">
								<TextInput
									:required="true"
									label="Department"
									placeholder="Department"
									@update-value="
										(data) =>
											(userInfo.bio.employee.stateOfOrigin =
												data)
									"
									:value="user.stateOfOrigin"
								/>
							</div>

							<div class="inputs-container">
								<div class="input">
									<TextInput
										:required="true"
										label="Job role"
										placeholder="Enter your job role"
										@update-value="
											(data) =>
												(userInfo.bio.employee.stateOfOrigin =
													data)
										"
										:value="user.stateOfOrigin"
									/>
								</div>
							</div>

							<div class="input">
								<label for="">Reason for change</label>
								<textarea
									name="reason-for-change"
									id="reason-for-change"
									v-model="
										userInfo.job.previousRole
											.reasonForChange
									"
									cols="30"
									rows="10"
								></textarea>
							</div>
						</div>
					</div>
				</section>
			</div>

			<button type="submit" class="save-btn">Save</button>
		</form>
	</div>
</template>

<script>
import TextInput from "@/components/TextInput.vue"
import { mapState } from "vuex"
import { ROUTES } from "@/global/routes"
import axios from "axios"

export default {
	name: "Job",
	components: { TextInput },
	computed: {
		...mapState("appStore", ["userInfo", "user"]),
	},
	data() {
		return {
			ROUTES,
			departments: null,
		}
	},
	methods: {
		async handleSubmit() {
			console.log(
				"Work type",
				this.userInfo.job.workDetails.offerLetterStatus
			)

			let recievedOfferLetter =
				this.userInfo.job.workDetails.offerLetterStatus

			try {
				const postData = {
					id: this.user.id,
					confirmedStatus: true,
					recievedOfferLetter,
					lastDatePromoted: "2022-10-18T11:24:47.491Z",
					staffId: "ccl/0/0",
					contractType: 0,
					workType: Number(this.userInfo.job.workDetails.workType),
					jobRole: Number(this.userInfo.job.workDetails.role),
					jobLocation: 0,
				}

				await axios.patch("/Employee/update-Job-details", postData)

				if (this.userInfo.job.workDetails.department) {
					await axios.patch("/Employee/update-employee-department", {
						employId: this.user.id,
						departmentId: this.userInfo.job.workDetails.department,
					})
				}

				// window.location.reload()
			} catch (err) {
				alert(
					"Failed to add. Please ensure all input fields are valid."
				)
				console.log(err)
			}
		},
	},
	async mounted() {
		try {
			const { data } = await axios.get("/Department")
			this.departments = data
		} catch (err) {
			alert("Failed to fetch departments", err.message)
			console.log(err.message)
		}
	},
}
</script>

<style scoped>
.job-container {
	width: 100%;
}

form .sections-container {
	display: flex;
	gap: 0.5rem;
}

form .sections-container section {
	background-color: #fff;
	padding: 1.5rem;
	border-radius: 0.5rem;
	flex: 0.5;
}

.inputs-container {
	flex: 0.5;
	max-width: 420px;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
}

.inputs-container .input-flex {
	display: flex;
	gap: 1rem;
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
	font-family: "Lato", Helvetica, sans-serif;
}

.job-container .radio-btns-wrapper {
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
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

.save-btn {
	padding: 0.7em 1.5em;
	background-color: #2b9de9;
	color: #fff;
	font-weight: 600;
	border-radius: 4px;
	cursor: pointer;
	transition: background-color 250ms ease;
	display: block;
	margin-block: 2rem;
	margin-left: auto;
	margin-right: 1.5rem;
}
.save-btn:hover {
	background-color: #255eb4;
}

@media (max-width: 890px) {
	form .sections-container {
		flex-direction: column;
	}
	.inputs-container {
		max-width: 100%;
	}
}
</style>
