import React from 'react'
import ReactDOM from 'react-dom/client'
import 'todomvc-app-css/index.css'
import { Router } from '~/Router'

const reactStrictMode = true

const app = (
  <Router />
)

const element = document.getElementById('root')

if (element) {
  const root = ReactDOM.createRoot(element)

  root.render(
    reactStrictMode
      ? (
          <React.StrictMode>{app}</React.StrictMode>
        )
      : app
  )
}
