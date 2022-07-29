<template>
  <button ref="_ref" :class="[
    'w-button',
    loading && 'w-button--loading',
    disabled && 'w-button--disabled',
    round && 'w-button--round',
    type && 'w-button--type w-button--'+type
  ]"
  :aria-disabled="disabled || loading"
  :disabled="disabled || loading"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'
import { buttonEmits, buttonProps } from "./index"
const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)
const { disabled, loading, type, round } = toRefs(props)
// const _disabled = useDisabled()
console.log('props', props)
</script>