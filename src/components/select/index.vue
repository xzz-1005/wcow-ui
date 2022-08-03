<template>
	<div class="w-select">
		<w-popover>
      <w-input readonly placeholder="请选择"></w-input>
			<template #content>
			</template>
		</w-popover>
	</div>
</template>
<script lang="ts" setup>
import WInput from "../input/index.vue";
import WPopover from "../popover/index.vue";
</script>
