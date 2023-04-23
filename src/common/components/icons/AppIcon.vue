<template>
  <component :is="iconSource" v-bind="$attrs" class="icon" />
</template>

<!-- SCRIPT -->
<script setup lang="ts">
import { defineAsyncComponent } from "vue";

interface Props {
  icon: string;
  // tooltip?: string;
}

const props = defineProps<Props>();

const iconSource = defineAsyncComponent(
  () => import(`../../../assets/icons/${props.icon}.svg`)
);
</script>
<style scoped>
.icon {
  height: 1.3rem;
}
</style>
