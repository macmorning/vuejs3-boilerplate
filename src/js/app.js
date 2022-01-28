import { createApp } from 'vue'
import { router } from './router'

import App from './components/App.vue'

import '../scss/app.scss'

export const app = createApp(App)

app.use(router)

app.mount('.wrapper')
