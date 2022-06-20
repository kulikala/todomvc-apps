import { createApp } from 'vue'
import 'todomvc-app-css/index.css'
import { App } from '~/App'
import { router } from '~/router'

const element = document.getElementById('app')

if (element) {
  const app = createApp(App)

  app.use(router)
  app.mount(element)
}
