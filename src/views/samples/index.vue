<template>
  <section id="introduction">
    <h1>Samples</h1>
  </section>
  <section v-if="samples?.length" id="table-section">
    <AppTable
      :data="samples"
      :fields="samplesTableFields"
      :pagination="pagination"
      :setPage="setPage"
    >
      <template #sampleType="{ item }">
        <SampleTableData :item="item" />
      </template>
      <template #comparment="{ item }">
        <ComparmentTableData :item="item" />
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
import ComparmentTableData from "@/modules/samples/components/ComparmentTableData.vue";

const samplesStore = useSamplesStore();

const { samples, pagination } = storeToRefs(samplesStore);
const { fetchSamples, setPage } = samplesStore;

// ON MOUNTED
onMounted(() => fetchSamples());
</script>
