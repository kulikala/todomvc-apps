import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const EmptyComponent = {}

const routes = [
  { path: '/:slug?', component: EmptyComponent }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
