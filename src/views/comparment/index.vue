<template>
  <section id="comparment-header">
    <h1>Comparment of the sample {{ sample?.sampleID }}</h1>
    <RouterLink class="router-link" :to="appRoutes.samples.path">
      Go back
      <AppIcon icon="arrow-uturn-left" />
    </RouterLink>
  </section>
  <section v-if="sample" id="comparment-detail">
    <Detail :sample="sample" :storageLayer="storageLayer" />
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useComparmentStore } from "@/modules/comparment/stores/comparment";
import { RouteLocationNormalizedLoaded, useRoute } from "vue-router";
import appRoutes from "@/router/app-routes";
import Detail from "@/modules/comparment/components/Detail.vue";
import { storeToRefs } from "pinia";

const route: RouteLocationNormalizedLoaded = useRoute();
const comparmentStore = useComparmentStore();

const { sample, storageLayer } = storeToRefs(comparmentStore);
const { fetchSample, fetchStorageLayer } = comparmentStore;

// On mounted
onMounted(async () => {
  // Route id
  const id = route.params?.sampleId;
  if (id) {
    // Fetch sample
    await fetchSample(Number(id));

    const storageLayerId = sample.value?.storageLayerID;

    // Fetch storage layer
    if (sample.value?.storageLayerID) {
      fetchStorageLayer(Number(storageLayerId));
    }
  }
});
</script>

<style scoped>
#comparment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
