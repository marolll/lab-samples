<template>
  <section id="introduction">
    <h1 class="page-title">Samples table</h1>
  </section>
  <section id="table-section">
    <AppTable
      :data="samples"
      :fields="samplesTableFields"
      :pagination="pagination"
      :setPage="setPage"
    >
      <template #sampleType="{ item }">
        <SampleTableData :item="item" />
      </template>
    </AppTable>
  </section>
</template>

<script setup lang="ts">
import { useSamplesStore } from "@/modules/samples/stores/samples";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { samplesTableFields } from "@/modules/samples/helpers/table";
import SampleTableData from "@/modules/samples/components/SampleTableData.vue";

const samplesStore = useSamplesStore();

const { samples, pagination } = storeToRefs(samplesStore);
const { fetchSamples, setPage } = samplesStore;
onMounted(() => {
  // Fetch samples
  fetchSamples();
});
</script>
