# todomvc-apps

> React vs Vue.js 2022 with TodoMVC

This repository contains two Vite-based apps: React and Vue.js

**What those two apps have in common:**

* Implement [TodoMVC]
* Implement in TypeScript
* Use Vite as a bundler
* Write renderers in JSX/TSX
* Use router libraries
* No global state management libraries

**`react-app`: TodoMVC app implemented with React Hooks**

* Hooks only
* Use `useContext()` for global state management
* Dependency libraries:
  ```json
  "dependencies": {
    "classnames": "^2.3.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.3.0",
    "todomvc-app-css": "^2.4.2",
    "uuid": "^8.3.2"
  }
  ```

**`vue-app`: TodoMVC app implemented with Vue.js v3 / Composition API**

* Composition API only
* No SFC / No `.vue` file
* Composables style
* Use `provide()` and `inject()` for global state management
* Original `useState()` utility composable for React-style coding
* Dependency libraries:
  ```json
  "dependencies": {
    "todomvc-app-css": "^2.4.2",
    "uuid": "^8.3.2",
    "vue": "^3.2.37",
    "vue-router": "^4.0.16"
  }
  ```

## Objectives of this project

* To introduce a modern way of coding in React and Vue.js
* To disentangle the differences in notation between React and Vue.js and to articulate the differences in approaches to achieving reactivity.

## How to use

**`react-app`**

```shell
cd react-app
npm install
npm run dev
```

**`vue-app`**

```shell
cd vue-app
npm install
npm run dev
```

## License

MIT

[TodoMVC]: https://todomvc.com/
