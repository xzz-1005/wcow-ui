<template>
  <div class="w-input">
    <!-- 左侧插槽 -->
    <div>
        <slot name="leftIcon"></slot>
    </div>
    <!-- input -->
    <input type="text" :value="modelValue" :readonly="readonly" :placeholder="placeholder" @input="valChange">
    <!-- 右侧插槽 -->
    <div>
      <template v-if="!showClear">
        <slot name="rightIcon"></slot>
      </template>
      <div v-if="showClear && modelValue" @click="clearFn">
        删除
      </div>
    </div>
    <!-- append slot -->
      <div v-if="$slots.append">
        <slot name="append" />
      </div>
  </div>
</template>
<script lang="ts" setup>
import { toRefs, useSlots } from 'vue'
import { inputEmits, inputProps } from "./index"
const slots = useSlots()
const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)

const { modelValue, showClear, placeholder, readonly } = toRefs(props)

const valChange = (event: any) => {
 emit('update:modelValue', event.target.value)
}

const clearFn = () => {
  emit('update:modelValue', '')
}
</script>
