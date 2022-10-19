<template>
	<div class="bio-container tab-container">
		<form @submit.prevent="handleSubmit">
			<PersonalDetails />
			<NextOfKin />
			<!-- <InCaseOfEmergency /> -->
			<!-- <Maritalinformation /> -->

			<button type="submit" class="save-btn">Save</button>
		</form>

		<!-- <DashboardBottomButtonsNav :nextRoute="{ name: ROUTES.job }" /> -->
	</div>
</template>

<script>
import { ROUTES } from "@/global/routes"
import NextOfKin from "./components/NextOfKin.vue"
import PersonalDetails from "./components/PersonalDetails.vue"
import axios from "axios"
import { mapState } from "vuex"

export default {
	name: "Bio",
	components: {
		NextOfKin,
		PersonalDetails,
	},
	data() {
		return {
			ROUTES,
		}
	},
	computed: {
		...mapState("appStore", ["userInfo", "user"]),
	},
	methods: {
		async handleSubmit() {
			console.log(this.userInfo.bio.employee.maritalStatus)

			// Convert gender to enum
			let gender = this.userInfo.bio.employee.gender
			if (gender === "male ") {
				gender = 0
			} else if (gender === "female") {
				gender = 1
			}

			// Conver marital info to enum
			let maritalInfo = this.userInfo.bio.employee.maritalStatus
			if (!maritalInfo) {
				maritalInfo = 0
			}

			try {
				const data = {
					id: this.user.id,
					dob: this.userInfo.bio.employee.dobISO,
					firstName: this.userInfo.bio.employee.firstName,
					surname: this.userInfo.bio.employee.surname,
					contactAddress:
						this.userInfo.bio.employee.residentialAddress,
					stateOfOrigin: this.userInfo.bio.employee.stateOfOrigin,
					phoneNo: this.userInfo.bio.employee.phoneNumber.toString(),
					nationality: "Nigerian",
					nextOfKingEmail: this.userInfo.bio.nextOfKin.email,
					nextOfKingAddress:
						this.userInfo.bio.nextOfKin.residentialAddress,
					nextOfKingFirstName: this.userInfo.bio.nextOfKin.firstName,
					nextOfKingPhoneNo:
						this.userInfo.bio.nextOfKin.phoneNumber.toString(),
					nextOfKingSurName: this.userInfo.bio.nextOfKin.surname,
					gender: Number(this.userInfo.bio.employee.gender),
					relationship: 0,
					maritalInfo: Number(maritalInfo),
					otherName: " ",
				}

				const res = await axios.patch("/Employee", data)
				console.log(res.data)
				window.location.reload()
			} catch (err) {
				console.log(err)
				alert(
					"Failed to update. Please ensure all input fields are valid."
				)
			}
		},
	},
}
</script>

<style scoped>
.bio-container {
	width: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
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
</style>
