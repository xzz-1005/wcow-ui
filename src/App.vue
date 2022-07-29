<template>
	<div v-for="item in btnList" :key="item">
		<w-button :disabled="true" :type="item" :round="false"> 一个按钮 </w-button>
	</div>
  <w-select></w-select>
  <w-popover>popover
    <template #content>hhh</template>
  </w-popover>
  <w-input></w-input>
</template>

<script setup lang="ts">
import WButton from "./components/button/index.vue";
import WSelect from "./components/select/index.vue";
import WPopover from "./components/popover/index.vue";
import WInput from "./components/select/index.vue";
const btnList = ["", "primary", "success", "warning", "danger"];
</script>
