<template>
  <AppTable :data="samples" :fields="samplesTableFields"></AppTable>
</template>

<script setup lang="ts">
import { useSamplesStore } from "@/modules/samples/stores/samples";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { samplesTableFields } from "@/modules/samples/helpers/table";

const samplesStore = useSamplesStore();

const { samples } = storeToRefs(samplesStore);
const { fetchSamples } = samplesStore;
onMounted(() => {
  // Fetch samples
  fetchSamples();
});
</script>
