import axios from 'axios'
import router from '@/router'

const state = {
  user: null,
  accessToken: null,
  importedEmails: [],
}

const mutations = {
  REMOVE_IMPORTED_EMAILS(state) {
    state.importedEmails = []
  },
  SET_ACTIVE_DIRECTORY(state, payload) {
    state.importedEmails = payload
  },
  REMOVE_SELECTED_EMAIL(state, payload) {
    state.importedEmails = state.importedEmails.filter(
      (email) => email !== payload
    )
  },
  SET_TOKEN(state, token) {
    state.accessToken = token
  },
  SET_USER(state, user) {
    state.user = user
  },
}

const actions = {
  async signIn({ commit, dispatch }, formData) {
    console.log(formData)
    // const response = await axios.post('http://localhost:3000/users', formData)
    const token = 'eyfwrwerewrwerwe.eyfgsdffsdffdgwefwe3434greg43ffwef6tye2thtr'
    commit('SET_TOKEN', token)
    return dispatch('attemptSignIn', token)
  },
  async attemptSignIn({ commit, state }, token) {
    if (token) {
      commit('SET_TOKEN', token)
    }

    if (!state.accessToken) return

    try {
      const response = await axios.get('/user')
      localStorage.setItem('accessToken', token)

      commit('SET_USER', response.data)
      router.replace('/')
    } catch (e) {
      console.log(e.message)
      commit('SET_TOKEN', null)
      commit('SET_USER', null)
    }
  },
  signOut({ commit }) {
    localStorage.removeItem('accessToken')
    commit('SET_TOKEN', null)
    commit('SET_USER', null)
  },
  async fetchEmployees() {
    try {
      const response = await axios.get('/employees')
      return response.data
    } catch (err) {
      console.log(err.message)
    }
  },
  async fetchProjects() {
    try {
      const response = await axios.get('/projects')
      return response.data
    } catch (err) {
      console.log(err.message)
    }
  },
  async fetchPersonalProjects() {
    try {
      const response = await axios.get('/personalProjects')
      return response.data
    } catch (err) {
      console.log(err.message)
    }
  },
  async fetchLeaveData() {
    try {
      const response = await axios.get('/leave')
      return response.data
    } catch (err) {
      console.log(err.message)
    }
  },
  async getDepartments() {
    try {
      const response = await axios.get('/departments')
      return response.data
    } catch (err) {
      console.log(err.message)
    }
  },
}

const getters = {
  authenticated: (state) => {
    if (state.user && state.accessToken) {
      return true
    } else {
      return false
    }
  },
  user: (state) => state.user,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
