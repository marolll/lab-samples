<template>{{ storageLayer }}</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useComparmentStore } from "@/modules/comparment/stores/comparment";
import { RouteLocationNormalizedLoaded, useRoute } from "vue-router";

const route: RouteLocationNormalizedLoaded = useRoute();
const comparmentStore = useComparmentStore();

const { storageLayer, fetchStorageLayer } = comparmentStore;
onMounted(() => {
  const id = route.params?.id;
  // Fetch samples
  if (id) id && fetchStorageLayer(Number(id));
});
</script>
