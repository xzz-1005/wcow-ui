<template>
	<!-- <div v-for="item in btnList" :key="item">
		<w-button :disabled="true" :type="item" :round="true"> 一个按钮 </w-button>
	</div>
  <w-select></w-select>
  <w-popover>popover
    <template #content>hhh</template>
  </w-popover>
  <w-input v-model="inputVal" :show-clear="true">
    <template #rightIcon>右边</template>
  </w-input> -->
  <w-full-screen @changeFull="changeFull">
		  <w-button> 切换全屏按钮 </w-button>
    <template #content>
		  <w-button type="success" :round="true"> 全屏按钮内容 </w-button>
    </template>
  </w-full-screen>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import WButton from "./components/button/index.vue";
import WSelect from "./components/select/index.vue";
import WPopover from "./components/popover/index.vue";
import WInput from "./components/input/index.vue";
import WFullScreen from "./components/FullScreen/index.vue";
const btnList = ["", "primary", "success", "warning", "danger"];

const inputVal = ref('')

const changeFull = (val: any) => {
  console.log('val---', val)
}

watch(inputVal, (val) => {
  console.log("inputVal", val);
});
</script>
