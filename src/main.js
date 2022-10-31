import { createApp } from "vue"
import App from "./App.vue"
import router from "@/router"
import store from "@/store"
require("@/store/subscriber")

import PrimeVue from "primevue/config"
import Chart from "primevue/chart"
import ProgressBar from "primevue/progressbar"
import Ripple from "primevue/ripple"
import "@vuepic/vue-datepicker/dist/main.css"
import "primevue/resources/themes/lara-light-blue/theme.css"
import "primevue/resources/primevue.min.css"
import { MotionPlugin } from "@vueuse/motion"
import axios from "axios"

const app = createApp(App)

axios.defaults.baseURL = "https://goodsagemouse81.conveyor.cloud/api"

store
	.dispatch("appStore/attemptSignIn", localStorage.getItem("accessToken"))
	.then(() => {
		app.use(store)
		app.use(MotionPlugin)
		app.use(PrimeVue, { ripple: true })
		app.component("Chart", Chart)
		app.component("ProgressBar", ProgressBar)
		app.directive("ripple", Ripple)
		app.use(router).mount("#app")
	})
