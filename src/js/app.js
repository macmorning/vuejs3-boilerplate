import { createApp } from 'vue'
import { Router } from './router'

import App from './components/App.vue'

import './plugins'

export const app = createApp(App)

export const router = new Router(app, {})

app.use(router)

app.mount('.wrapper')
