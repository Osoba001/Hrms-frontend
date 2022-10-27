<template>
	<section>
		<h2 class="section-title">Next of Kin details</h2>

		<div class="personal-details">
			<div class="inputs-container">
				<div class="input">
					<TextInput
						:required="true"
						label="Surname"
						placeholder="Enter your surname"
						@update-value="
							(data) => (userInfo.bio.nextOfKin.surname = data)
						"
						:value="user.nextOfKingSurName"
					/>
				</div>
				<div class="input">
					<TextInput
						:required="true"
						label="First name"
						placeholder="Enter your first name"
						@update-value="
							(data) => (userInfo.bio.nextOfKin.firstName = data)
						"
						:value="user.nextOfKingFirstName"
					/>
				</div>
				<div class="input">
					<TextInput
						:required="true"
						label="Phone number"
						type="number"
						placeholder="Enter your phone number"
						@update-value="
							(data) =>
								(userInfo.bio.nextOfKin.phoneNumber = data)
						"
						:value="user.nextOfKingPhoneNo"
					/>
				</div>
			</div>

			<div class="inputs-container">
				<div class="input">
					<TextInput
						:required="true"
						label="Email address"
						type="email"
						placeholder="Enter your email"
						@update-value="
							(data) => (userInfo.bio.nextOfKin.email = data)
						"
						:value="user.nextOfKingEmail"
					/>
				</div>
				<div class="input">
					<TextInput
						:required="true"
						label="Residential address"
						placeholder="Enter your residential address"
						@update-value="
							(data) =>
								(userInfo.bio.nextOfKin.residentialAddress =
									data)
						"
						:value="user.nextOfKingAddress"
					/>
				</div>

				<div class="input">
					<label class="form-label" for="gender"
						>Relationship with employee</label
					>
					<select
						name="relationship"
						id="relationship"
						v-model="userInfo.bio.nextOfKin.relationship"
					>
						<option
							value="father"
							:selected="user.relationship === 'father'"
						>
							Father
						</option>
						<option
							value="mother"
							:selected="user.relationship === 'mother'"
						>
							Mother
						</option>
						<option
							value="sibling"
							:selected="user.relationship === 'sibling'"
						>
							Brother
						</option>
						<option
							value="uncle"
							:selected="user.relationship === 'uncle'"
						>
						Sister
						</option>
						<option
							value="uncle"
							:selected="user.relationship === 'uncle'"
						>
						Sibling
						</option>
						<option
							value="uncle"
							:selected="user.relationship === 'uncle'"
						>
							Uncle
						</option>
						<option
							value="aunt"
							:selected="user.relationship === 'aunt'"
						>
							Aunt
						</option>
						<option
							value="nephew"
							:selected="user.relationship === 'nephew'"
						>
							Nephew
						</option>
						<option
							value="niece"
							:selected="user.relationship === 'niece'"
						>
							Niece
						</option>
						<option
							value="other"
							:selected="user.relationship === 'other'"
						>
							Other
						</option>
					</select>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { mapState } from "vuex";
import TextInput from "@/components/TextInput.vue";

export default {
	name: "NextOfKin",
	computed: {
		...mapState("appStore", ["userInfo", "user"]),
	},
	components: { TextInput },
};
</script>

<style scoped>
section {
	background-color: #fff;
	padding: 1.5rem;
	border-radius: 0.5rem;
}
section + section {
	margin-top: 1rem;
}
form {
	background-color: #eee;
}
section > div {
	display: flex;
	gap: 2rem;
}
.inputs-container {
	flex: 0.5;
	max-width: 420px;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
}
.input {
	flex: 1;
}

.next-btn {
	padding: 0.7em 1.5em;
	background-color: #2b9de9;
	color: #fff;
	font-weight: 600;
	border-radius: 4px;
	cursor: pointer;
	transition: background-color 250ms ease;
	margin-left: auto;
	margin-bottom: 1.5rem;
}

.next-btn:hover {
	background-color: #255eb4;
}

@media (max-width: 850px) {
	section > div {
		flex-direction: column;
		gap: 1rem;
	}
	.inputs-container {
		max-width: 100%;
	}
}
</style>

<!-- inCaseOfEmergency: {
  surname: "",
  firstName: "",
  phoneNumber: "",
  residentialAddress: "",
  relationship: "",
  dateOfBirth: "",
},
maritalInformation: {
  name: "",
  phoneNumber: "",
  residentialAddress: "",
  profession: "",
  dateOfBirth: "",
  numberOfChildren: "",
}, -->
