<template>
  <AppCard :header="false">
    <template #body
      ><h4 class="pb-normal">Sample: {{ sample?.name || "" }}</h4>
      <AppBarcode v-if="sample?.barcode" :barcode="sample.barcode" />
    </template>
  </AppCard>
</template>

<script setup lang="ts">
import type Sample from "@/common/interfaces/models/sample";
interface Props {
  sample: Sample;
}

defineProps<Props>();
</script>
