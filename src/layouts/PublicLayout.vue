<template>
  <TheNavbar />
  <main id="main" class="container">
    <RouterView />
  </main>
</template>
<script setup lang="ts">
import TheNavbar from "@/common/components/layout/TheNavbar.vue";
</script>

<style scoped>
#main {
  padding: 2rem;
}
</style>
