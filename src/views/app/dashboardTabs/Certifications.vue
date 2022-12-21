<template>
	<div class="certifications-container tab-container">
		<section class="add-certificate">
			<h2 class="section-title">Upload supporting document</h2>

			<div class="upload-container">
				<h4>Cetificate</h4>
				<input
					type="file"
					name="other-certificate"
					id="other-certificate"
					accept="image/*"
				/>
			</div>
		</section>

		<section class="skills-container">
			<h2 class="section-title">Skills</h2>

			<div class="skills-wrapper" v-show="skills.length">
				<span v-for="item in skills" :key="item.id" class="skill">
					{{ item.skillName }}
				</span>
			</div>

			<button class="add-skill-btn" @click="toggleModal">
				<span class="material-symbols-rounded"> add </span>
				Add skill
			</button>
		</section>

		<button type="submit" class="save-btn">Save</button>

		<teleport to=".modals" v-if="showModal">
			<ModalBackdrop @close="toggleModal">
				<form class="add-skill-modal" @submit.prevent="handleAddSkill">
					<h2 class="section-title">Add skill</h2>
					<div class="modal-input">
						<TextInput
							label="Skill"
							placeholder="E.g, React Native"
							@update-value="(data) => (form.skill = data)"
							@validate="validate('skill')"
							:error="errors.skill"
						/>
					</div>
					<div class="modal-input">
						<label for="proficiency">Proficiency</label>
						<select
							name="proficiency"
							id="proficiency"
							class="proficiency"
							:class="{ error: errors.proficiency }"
							v-model="form.proficiency"
							@blur="validate(proficiency)"
						>
							<option value="beginner">Beginner</option>
							<option value="intermediate">Intermediate</option>
							<option value="advanced">Advanced</option>
						</select>
					</div>
					<button type="submit" class="add-skill-btn modal-add-btn">
						Add
					</button>
				</form>
			</ModalBackdrop>
		</teleport>
	</div>
</template>

<script>
import TextInput from "@/components/TextInput.vue"
import ModalBackdrop from "@/components/ModalBackdrop.vue"
import { mapState } from "vuex"
import { object, string } from "yup"
import { ROUTES } from "@/global/routes"
import axios from "axios"

const schema = object().shape({
	skill: string().min(1).max(255).required(),
	proficiency: string().required(),
})

export default {
	components: { TextInput, ModalBackdrop },
	data() {
		return {
			ROUTES,
			showModal: false,
			skills: [],
			form: {
				skill: "",
				proficiency: "",
			},
			errors: {
				skill: "",
				proficiency: "",
			},
		}
	},
	methods: {
		async onSubmit(e) {
			if (!this.form.skill || !this.form.proficiency) return

			let proficiency
			if (this.form.proficiency === "beginner") {
				proficiency = 2
			} else if (this.form.proficiency === "intermediate") {
				proficiency = 5
			} else if (this.form.proficiency === "advanced") {
				proficiency = 10
			} else {
				proficiency = 0
			}

			const res = await axios.patch("/Employee/addSkill", {
				employeeId: this.user.id,
				skills: [
					{
						skillName: this.form.skill,
						proficiency,
						skillType: 1,
					},
				],
			})

			if (res.statusText === "OK") {
				window.location.reload()
			}

			this.form.skill = ""
			this.form.proficiency = ""
			e.target.reset()
		},
		toggleModal() {
			this.showModal = !this.showModal
		},
		handleAddSkill(e) {
			schema
				.validate(this.form, { abortEarly: false })
				.then(() => {
					this.onSubmit(e)
				})
				.catch((err) => {
					err.inner.forEach((error) => {
						this.errors = {
							...this.errors,
							[error.path]: error.message,
						}
					})
				})
		},
		validate(field) {
			schema
				.validateAt(field, this.form)
				.then(() => {
					this.errors[field] = ""
				})
				.catch((err) => {
					this.errors[err.path] = err.message
				})
		},
	},
	computed: {
		...mapState("appStore", ["userInfo", "user"]),
	},
	async mounted() {
		try {
			const { data } = await axios.get(
				`/Employee/skill?EmployeeId=${this.user.id}`
			)

			this.skills = data
		} catch (err) {
			console.log(err)
		}
	},
}
</script>

<style scoped>
.certifications-container {
	flex: 1;
}

section {
	background-color: #fff;
	padding: 1.5rem;
	border-radius: 0.5rem;
}
section.add-certificate {
	margin-bottom: 1rem;
}

.upload-container {
	margin-bottom: 1rem;
}

.upload-container h4 {
	margin-bottom: 0.5rem;
}

.add-skill-btn {
	padding: 0.7em 1em;
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
	margin-left: auto;
}

.add-skill-btn:hover {
	background-color: #255eb4;
}

.skills-wrapper {
	padding-block: 1rem;
	display: flex;
	flex-wrap: wrap;
	gap: 0.7rem;
	max-width: 650px;
}

.skill {
	display: block;
	background-color: #eee;
	padding: 0.5em 1.2em;
	border-radius: 50px;
	cursor: pointer;
	transition: all 300ms ease;
	font-size: 0.875rem;
}
.skill:hover {
	transform: scale(1.05);
	background-color: #aaa;
}
.add-skill-modal {
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1.5rem;
}

.add-skill-modal .modal-input label {
	display: block;
	margin-bottom: 0.5rem;
	font-size: 0.875rem;
}

.add-skill-modal .modal-add-btn {
	margin-left: 0;
}

select.error {
	border: 1px solid red;
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
