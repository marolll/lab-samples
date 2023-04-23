<template>
  <section id="introduction">
    <h1 class="page-title">Samples table</h1>
  </section>
  <section id="table-section">
    <AppTable :data="samples" :fields="samplesTableFields"></AppTable>
  </section>
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
