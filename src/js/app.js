import { createApp } from 'vue'
import { Router } from './router'
import { Language } from './language'

import App from './components/App.vue'

import '@naviisml/ui/src/scss/app.scss'

export const app = createApp(App)

export const router = new Router(app, {})

export const i18n = new Language(app, {})

app.use(router)
app.use(i18n)

app.mount('.wrapper')
