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
      inCaseOfEmergency: {
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
};

const actions = {
  async signIn({ commit, dispatch }, loginDetails) {
    try {
      console.log("Form data", loginDetails);

      const response = await axios.patch(
        "http://creshr.svr.cyphercrescent.com:44386/api/Authentication/login",
        { ...loginDetails }
      );

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
      let decoded = VueJwtDecode.decode(token);

      const userId =
        decoded[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
        ];

      console.log(decoded, userId);

      const response = await axios.get(
        `http://creshr.svr.cyphercrescent.com:44386/api/Employee/byId?id=${userId}`
      );

      const user = response.data;

      // Role from response returns numbers mapped to account types
      const role = identifyAccountType(user.role);

      commit("SET_USER", {
        ...user,
        accountType: role,
        image: "https://randomuser.me/api/portraits/thumb/men/15.jpg",
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
      const response = await axios.get("/projects");
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
