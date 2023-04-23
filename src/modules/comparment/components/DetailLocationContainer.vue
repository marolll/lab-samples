<template>
  <AppCard bg="#f6f6f6">
    <template #header
      ><h3 class="pb-normal">Container: {{ parent?.name || "" }}</h3>
      <AppBarcode v-if="parent?.barcode" :barcode="parent.barcode" />
    </template>
    <template #body>
      <DetailLocationSample :sample="sample" />
    </template>
  </AppCard>
</template>

<script setup lang="ts">
import type Sample from "@/common/interfaces/models/sample";
import DetailLocationSample from "@/modules/comparment/components/DetailLocationSample.vue";

import { computed } from "vue";
interface Props {
  sample: Sample;
}

const props = defineProps<Props>();

const parent = computed(() => props?.sample?.location?.parent);
</script>
