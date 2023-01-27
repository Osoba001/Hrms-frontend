import axios from "axios";
import VueJwtDecode from "vue-jwt-decode";
import router from "@/router";
import { identifyAccountType } from "@/utils";

const state = {
	user: null,
	accessToken: null,
	importedEmails: [],
	userInfo: {
		bio: {
			employee: {
				surname: "",
				firstName: "",
				email: "",
				phoneNumber: "",
				residentialAddress: "",
				stateOfOrigin: "",
				dateOfBirth: "",
				dateOfHire: "",
				gender: "",
				maritalStatus: "",
			},
			nextOfKin: {
				surname: "",
				firstName: "",
				email: "",
				phoneNumber: "",
				residentialAddress: "",
				relationship: "",
			},
		},
		job: {
			workDetails: {
				department: "",
				role: "",
				workType: "",
				contractType: "",
				manager: "",
				dateOfHire: "",
				offerLetterStatus: "",
			},
			previousRole: {
				department: "",
				role: "",
				reasonForChange: "",
			},
		},
		employmentHistory: [],
		skills: [],
	},
};

const mutations = {
	REMOVE_IMPORTED_EMAILS(state) {
		state.importedEmails = [];
	},
	SET_ACTIVE_DIRECTORY(state, payload) {
		state.importedEmails = payload;
	},
	REMOVE_SELECTED_EMAIL(state, payload) {
		state.importedEmails = state.importedEmails.filter(
			(email) => email !== payload
		);
	},
	SET_TOKEN(state, token) {
		state.accessToken = token;
	},
	SET_USER(state, user) {
		state.user = user;
	},
	UPDATE_USER_INFO(state, info) {
		state.userInfo = info;
	},
};

const actions = {
	async signIn({ commit, dispatch }, loginDetails) {
		try {
			console.log("Form data", loginDetails);

			const response = await axios.patch("/Authentication/login", {
				...loginDetails,
			});

			const token = response.data;
			commit("SET_TOKEN", token);
			return dispatch("attemptSignIn", token);
		} catch (err) {
			console.log(err);
		}
	},
	async attemptSignIn({ commit, state }, token) {
		if (token) {
			commit("SET_TOKEN", token);
		}

		if (!state.accessToken) return;

		// Decode token and hit endpoint to get user
		try {
			let { nameid } = VueJwtDecode.decode(token);

			const userId = nameid;
			const response = await axios.get(`/Employee/byId?id=${userId}`);

			const user = response.data;

			// Role from response returns numbers mapped to account types
			const role = identifyAccountType(user.role);

			commit("SET_USER", {
				...user,
				accountType: role,
				image: "https://randomuser.me/api/portraits/thumb/men/15.jpg",
				dob: new Date(user.dob)
					.toLocaleDateString()
					.split("/")
					.join("-"),
				dateEmployed: new Date(user.dateEmployed)
					.toLocaleDateString()
					.split("/")
					.join("-"),
			});
			commit("UPDATE_USER_INFO", {
				bio: {
					employee: {
						surname: user.surname,
						firstName: user.firstName,
						email: user.email,
						phoneNumber: user.phoneNo,
						residentialAddress: user.contactAddress,
						stateOfOrigin: user.stateOfOrigin,
						dateOfBirth: new Date(user.dob)
							.toLocaleDateString()
							.split("/")
							.join("-"),
						dateOfHire: new Date(user.dateEmployed)
							.toLocaleDateString()
							.split("/")
							.join("-"),
						gender: user.gender,
						maritalStatus: "",
					},
					nextOfKin: {
						surname: user.nextOfKingSurName,
						firstName: user.nextOfKingFirstName,
						email: user.nextOfKingEmail,
						phoneNumber: user.nextOfKingPhoneNo,
						residentialAddress: user.nextOfKingAddress,
						relationship: user.relationship,
					},
				},
				job: {
					workDetails: {
						department: user.departmentName,
						role: user.jobRole,
						workType: "On-site",
						contractType: user.contractType,
						manager: user.manager,
						dateOfHire: new Date(user.dateEmployed)
							.toLocaleDateString()
							.split("/")
							.join("-"),
						offerLetterStatus: user.recievedOfferLetter,
						location: user.jobLocation,
					},
					previousRole: {
						department: "",
						role: "",
						reasonForChange: "",
					},
				},
				employmentHistory: [],
				skills: [],
			});
			router.replace("/");
		} catch (e) {
			console.log(e);
			commit("SET_TOKEN", null);
			commit("SET_USER", null);
		}
	},
	signOut({ commit }) {
		localStorage.removeItem("accessToken");
		commit("SET_TOKEN", null);
		commit("SET_USER", null);
	},

	async fetchProjects() {
		try {
			const response = await axios.get("http://localhost:3000/projects");
			return response.data;
		} catch (err) {
			console.log(err.message);
		}
	},
};

const getters = {
	authenticated: (state) => {
		if (state.user && state.accessToken) {
			return true;
		} else {
			return false;
		}
	},
	user: (state) => state.user,
	userInfo: (state) => state.userInfo,
	importedEmails: (state) => state.importedEmails,
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};
