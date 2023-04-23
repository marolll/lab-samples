<template>
  <img
    class="barcode"
    :src="`https://barcode.brisp.nl/barcode/${barcode}`"
    :alt="`image-barcode-${barcode}`"
  />
</template>

<!-- SCRIPT -->
<script setup lang="ts">
interface Props {
  barcode?: number | string;
}

defineProps<Props>();
</script>

<style scoped>
.barcode {
  height: 2.2rem;
}
</style>
