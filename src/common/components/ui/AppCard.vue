<template>
  <div class="card" :style="{ background: bg }">
    <div v-if="header" class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot name="body"></slot>
    </div>
    <div v-if="footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script setup lang="ts">
interface Props {
  header?: boolean;
  footer?: boolean;
  bg?: string;
}

withDefaults(defineProps<Props>(), {
  header: true,
  footer: true,
  bg: "#ffffff",
});
</script>

<style scoped>
.card {
  overflow: hidden;
  padding: 1rem;
  border-radius: 0.5rem;
  -webkit-box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.25),
    0 2px 4px -2px rgb(0 0 0 / 0.25);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.25), 0 2px 4px -2px rgb(0 0 0 / 0.25);
}

.card-header {
  margin-bottom: 1.5rem;
}
</style>
