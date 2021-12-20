import { createApp } from 'vue'
import { router } from './router'

import App from './components/App.vue'

import './plugins'

const app = createApp(App)

app.use(router.getRouterInstance())

app.mount('.wrapper')
