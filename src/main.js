import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PrimeVue from 'primevue/config'
import Chart from 'primevue/chart'
import Datepicker from '@vuepic/vue-datepicker'
import ProgressBar from 'primevue/progressbar'
import Ripple from 'primevue/ripple'
import '@vuepic/vue-datepicker/dist/main.css'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'

const app = createApp(App)

app.use(store)
app.use(PrimeVue, { ripple: true })
app.component('Datepicker', Datepicker)
app.component('Chart', Chart)
app.component('ProgressBar', ProgressBar)
app.directive('ripple', Ripple)
app.use(router).mount('#app')
