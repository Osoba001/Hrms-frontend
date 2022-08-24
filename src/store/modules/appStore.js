const state = {
  accountType: 'HR',
  userInfoUpdated: false,
  importedEmails: [],
}

const mutations = {
  REMOVE_IMPORTED_EMAILS(state) {
    state.importedEmails = []
  },
  SET_ACTIVE_DIRECTORY(state, payload) {
    state.importedEmails = payload
  },
}

const actions = {}

const getters = {
  allData: (state) => state,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
