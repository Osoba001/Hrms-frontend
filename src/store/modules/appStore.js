import axios from "axios";
import VueJwtDecode from "vue-jwt-decode";
import router from "@/router";
import { identifyAccountType, identifyAccountTypeFromString } from "@/utils";

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
      console.log(e.message);
      commit("SET_TOKEN", null);
      commit("SET_USER", null);
    }
  },
  signOut({ commit }) {
    localStorage.removeItem("accessToken");
    commit("SET_TOKEN", null);
    commit("SET_USER", null);
  },
  async fetchEmployees() {
    try {
      const response = await axios.get(
        "http://creshr.svr.cyphercrescent.com:44386/api/Employee"
      );
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  },
  async fetchProjects() {
    try {
      const response = await axios.get("/projects");
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  },
  async fetchPersonalProjects({ state }) {
    try {
      const response = await axios.get(
        `http://creshr.svr.cyphercrescent.com:44386/api/EmployeeProject?employeeId=${state.user.id}`
      );
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  },
  async addPersonalProjects({ state }, formData) {
    const data = {
      employeeId: state.user.id,
      name: formData.title,
      link: formData.liveLink,
      status: 0,
      description: "",
    };
    try {
      const response = await axios.post(
        "http://creshr.svr.cyphercrescent.com:44386/api/EmployeeProject",
        {
          ...data,
        }
      );
      window.location.reload();
      return response;
    } catch (err) {
      console.log("Error", err.message);
    }
  },
  async fetchLeaveData() {
    try {
      const response = await axios.get("/leave");
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  },
  async addEmployee(_, formData) {
    const role = identifyAccountTypeFromString(formData.role);
    console.log(role);
    try {
      const response = await axios.post(
        "http://creshr.svr.cyphercrescent.com:44386/api/Employee",
        {
          ...formData,
          role,
        }
      );
      //   window.location.reload();
      console.log(response.data);
      return response;
    } catch (err) {
      console.log(err.message);
    }
  },
  addEmployees({ state }) {
    state.importedEmails.forEach(async (data) => {
      try {
        // Temporary
        await axios.post("/employees", {
          email: data,
          role: "staff",
          status: "inactive",
          dateHired: new Date(),
        });
        state.importedEmails = [];
        window.location.reload();
      } catch (err) {
        console.log(err.message);
      }
    });
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
