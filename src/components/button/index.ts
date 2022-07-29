export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export const buttonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'text',
  '',
] as const

export const buttonProps = {
  size: {
    type: String,
    default: '',
  },
  disabled: Boolean,
  type: {
    type: String,
    values: buttonTypes,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  // nativeType: {
  //   type: String,
  //   values: buttonNativeTypes,
  //   default: 'button',
  // },
  loading: Boolean,
  loadingIcon: {
    type: String,
    default: () => 'loading',
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: undefined,
  },
}