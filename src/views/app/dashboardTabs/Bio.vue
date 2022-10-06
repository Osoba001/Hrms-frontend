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
import { ROUTES } from "@/global/routes";
import NextOfKin from "./components/NextOfKin.vue";
import PersonalDetails from "./components/PersonalDetails.vue";
import axios from "axios";
import { mapState } from "vuex";

export default {
	name: "Bio",
	components: {
		NextOfKin,
		PersonalDetails,
	},
	data() {
		return {
			ROUTES,
		};
	},
	computed: {
		...mapState("appStore", ["userInfo", "user"]),
	},
	methods: {
		async handleSubmit() {
			console.log("User", this.user);

			// "id": "ebe1ff46-7e00-41e5-25aa-08daa2b4799b",
			// "firstName": "Abubakar",
			// "surname": "Mana",
			// "contactAddress": "Oyigbo",
			// "stateOfOrigin": "Adamawa",
			// "phoneNo": "09033889352",
			// "dob": "2002-10-04T08:08:32.756Z",
			// "nationality": "Nigerian",
			// "confirmedStatus": true,
			// "recievedOfferLetter": true,
			// "nextOfKingFirstName": "Jaafar",
			// "nextOfKingSurName": "Abbas",
			// "nextOfKingPhoneNo": "08082813527",
			// "nextOfKingEmail": "jaafar.abbas@gmail.com",
			// "dateEmployed": "2009-10-04T08:08:32.756Z",
			// "nextOfKingAddress": "Gwarimpa",
			// "lastDatePromoted": "2021-10-04T08:08:32.756Z",
			// "contractType": 0,
			// "workType": 0,
			// "gender": 0,
			// "jobRole": 0,
			// "jobLocation": 0,
			// "relationship": 0,
			// "managerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
			// "otherName": "Sadiq",
			// "departmentId": "0ce262ac-da25-439b-12bc-08da934e02d1",
			// "staffId": "ccl/1/12"

			try {
				const data = {
					// ...this.user,
					id: this.user.id,
					firstName: this.userInfo.bio.employee.firstName,
					surname: this.userInfo.bio.employee.surname,
					phoneNo: this.userInfo.bio.employee.phoneNumber,
					contactAddress:
						this.userInfo.bio.employee.residentialAddress,
					stateOfOrigin: this.userInfo.bio.employee.stateOfOrigin,
					dob: new Date(this.userInfo.bio.employee.dateOfBirth),
					dateEmployed: new Date(
						this.userInfo.bio.employee.dateOfHire
					),
					gender: this.userInfo.bio.employee.gender,
					nextOfKingAddress:
						this.userInfo.bio.nextOfKin.residentialAddress,
					nextOfKingEmail: this.userInfo.bio.nextOfKin.email,
					nextOfKingFirstName: this.userInfo.bio.nextOfKin.firstName,
					nextOfKingPhoneNo: this.userInfo.bio.nextOfKin.phoneNumber,
					nextOfKingSurName: this.userInfo.bio.nextOfKin.surname,
					nationality: "Nigerian",
				};
				console.log(data);
				const res = await axios.patch("/Employee", data);
				console.log(res.data);
			} catch (err) {
				console.log(err);
			}
		},
	},
};
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
