import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Chart from 'primevue/chart'
import Datepicker from '@vuepic/vue-datepicker'
import ProgressBar from 'primevue/progressbar'
import '@vuepic/vue-datepicker/dist/main.css'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'

const app = createApp(App)

app.use(PrimeVue)
app.component('Datepicker', Datepicker)
app.component('Chart', Chart)
app.component('ProgressBar', ProgressBar)
app.use(router).mount('#app')
