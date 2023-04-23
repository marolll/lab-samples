<template>
  <div class="pb-lg">
    <DetailLocation :sample="sample" />
  </div>
  <DetailStorageLayer v-if="storageLayer" :storageLayer="storageLayer" />
</template>

<script setup lang="ts">
import type Sample from "@/common/interfaces/models/sample";
import type StorageLayer from "@/common/interfaces/models/storage-layer";
import DetailLocation from "@/modules/comparment/components/DetailLocation.vue";
import DetailStorageLayer from "@/modules/comparment/components/DetailStorageLayer.vue";

interface Props {
  storageLayer?: StorageLayer;
  sample: Sample;
}

defineProps<Props>();
</script>
