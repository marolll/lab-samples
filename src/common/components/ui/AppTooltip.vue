<template>
  <div class="tooltip-wrapper">
    <slot name="text">
      <span v-if="text">
        {{ text }}
      </span>
    </slot>
    <div class="tooltip">
      <!-- <span class="text">{{ text }}</span> -->
      <div class="slot-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script setup lang="ts">
interface Props {
  text?: string;
}
defineProps<Props>();
</script>

<style scoped>
.tooltip-wrapper {
  position: relative;
  display: inline-block;
}

.tooltip-wrapper:hover .tooltip {
  opacity: 1;
}

.tooltip {
  color: #ffffff;
  text-align: center;
  padding: 10px;
  border-radius: 2px;
  width: 250px;
  bottom: 100%;
  left: 50%;
  margin-left: -125px;
  opacity: 0;
  transition: opacity 1s;
  position: absolute;
  z-index: 1;
  background: #08a1a1;
}

.slot-content::after {
  content: " ";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #08a1a1 transparent transparent transparent;
}
</style>
