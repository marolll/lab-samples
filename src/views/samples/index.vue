<template></template>

<script setup lang="ts">
import { useSamplesStore } from "@/modules/samples/stores/samples";
import { onMounted } from "vue";

const samplesStore = useSamplesStore();

// const { samples } = storeToRefs(samplesStore);
const { fetchSamples } = samplesStore;
onMounted(() => {
  // Fetch samples
  fetchSamples();
});
</script>
