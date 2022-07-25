import './style/index.scss'

import WButton from './components/button/index.vue'

import type { App } from 'vue'

const components = [
  WButton
]

export function install(app: App) {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}

export {
  WButton
}