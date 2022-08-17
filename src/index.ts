import './style/index.scss'

import WButton from './components/button/index.vue'
import WSelect from './components/select/index.vue'
import WPopover from './components/popover/index.vue'
import WInput from './components/input/index.vue'
import WFullScreen from './components/FullScreen/index.vue'

import type { App } from 'vue'

const components = [
  {
    name: 'w-button',
    component: WButton
  },
  {
    name: 'w-select',
    component: WSelect
  },
  {
    name: 'w-popover',
    component: WPopover
  },
  {
    name: 'w-input',
    component: WInput
  },
  {
    name: 'w-fullscreen',
    component: WFullScreen
  }
]

export function install(app: App) {
  components.forEach(component => {
    app.component(component.name, component.component)
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
  WFullScreen
}