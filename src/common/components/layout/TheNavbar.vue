<template>
  <nav class="bg-primary">
    <div class="container navbar-container">
      <RouterLink class="link" :to="appRoutes.samples.path">Samples</RouterLink>
    </div>
  </nav>
</template>

<!-- SCRIPT -->
<script setup lang="ts">
import appRoutes from "@/router/app-routes";
</script>

<style scoped>
.navbar-container {
  display: flex;
  padding: 1rem 2rem;
  position: sticky;
  z-index: 100;
}

.link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
}
</style>
