import { createStore } from 'vuex'
import appStore from './modules/appStore'

export default createStore({
  modules: {
    appStore,
  },
})
