<template>
  <div v-if="parent">
    <DetailLocationContainer :sample="sample" />
  </div>
  <div v-else><DetailLocationSample :sample="sample" /></div>
</template>

<script setup lang="ts">
import type Sample from "@/common/interfaces/models/sample";
import { computed } from "vue";
import DetailLocationContainer from "@/modules/comparment/components/DetailLocationContainer.vue";
import DetailLocationSample from "@/modules/comparment/components/DetailLocationSample.vue";

interface Props {
  sample: Sample;
}

const props = defineProps<Props>();

const parent = computed(() => props?.sample?.location?.parent);
</script>

<style scoped></style>
