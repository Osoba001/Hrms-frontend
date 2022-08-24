import { createStore } from 'vuex'
import appStore from './modules/appStore'
import authStore from './modules/authStore'

export default createStore({
  modules: {
    appStore,
    authStore,
  },
})
