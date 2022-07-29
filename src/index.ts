import './style/index.scss'

import WButton from './components/button/index.vue'
import WSelect from './components/select/index.vue'
import WPopover from './components/popover/index.vue'
import WInput from './components/input/index.vue'

import type { App } from 'vue'

const components = [
  WButton,
  WSelect,
  WPopover,
  WInput,
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
  WButton,
  WSelect,
  WPopover,
  WInput,
}