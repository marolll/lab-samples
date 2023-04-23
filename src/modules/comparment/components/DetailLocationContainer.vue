<template>
  <AppCard>
    <template #header
      ><h3>Container: {{ parent?.name || "" }}</h3>
      <AppBarcode v-if="parent?.barcode" :barcode="parent.barcode" />
    </template>
    <template #body>
      <AppCard bg="#fafafa" :header="false">
        <template #body
          ><h4>Sample: {{ sample?.name || "" }}</h4>
          <AppBarcode v-if="sample?.barcode" :barcode="sample.barcode" />
        </template>
      </AppCard>
    </template>
  </AppCard>
</template>

<script setup lang="ts">
import type Sample from "@/common/interfaces/models/sample";
import { computed } from "vue";
interface Props {
  sample: Sample;
}

const props = defineProps<Props>();

const parent = computed(() => props?.sample?.location?.parent);
</script>
