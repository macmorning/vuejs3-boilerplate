import { createApp } from 'vue'
import { router } from './utils/router'
import { store } from './utils/store'

import App from './containers/App/App.vue'

import '../scss/app.scss'

export const app = createApp(App)

app.use(router)
app.use(store)

app.mount('.wrapper')
