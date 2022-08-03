import type { ExtractPropTypes, StyleValue } from 'vue'

export const inputProps = {
  id: {
    type: String,
    default: undefined,
  },
  disabled: Boolean,
  modelValue: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  resize: {
    type: String,
    values: ['none', 'both', 'horizontal', 'vertical'],
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
  formatter: {
    type: Function,
  },
  parser: {
    type: Function,
  },
  placeholder: {
    type: String,
  },
  form: {
    type: String,
    default: '',
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  showClear: {
    type: Boolean,
    default: false,
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
  showWordLimit: {
    type: Boolean,
    default: false,
  }, 
  containerRole: {
    type: String,
    default: undefined,
  },
  label: {
    type: String,
    default: undefined,
  },
  tabindex: {
    type: [String, Number],
    default: 0,
  },
  validateEvent: {
    type: Boolean,
    default: true,
  },
} as const
export type InputProps = ExtractPropTypes<typeof inputProps>
export const inputEmits = {
  input: (value: string) => isString(value),
  change: (value: string) => isString(value),
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  clear: () => true,
  mouseleave: (evt: MouseEvent) => evt instanceof MouseEvent,
  mouseenter: (evt: MouseEvent) => evt instanceof MouseEvent,
  // NOTE: when autofill by browser, the keydown event is instanceof Event, not KeyboardEvent
  // relative bug report https://github.com/element-plus/element-plus/issues/6665
  keydown: (evt: KeyboardEvent | Event) => evt instanceof Event,
  compositionstart: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionupdate: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionend: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  update: (evt: Event) => evt instanceof Event,
}