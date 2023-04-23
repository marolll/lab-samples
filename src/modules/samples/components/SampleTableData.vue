<template>
  <td class="table-data" :style="tdStyle">
    <span :style="spanStyle">
      {{ item?.sampleType?.name }}
    </span>
  </td>
</template>

<script setup lang="ts">
import { StyleValue } from "vue";

interface Props {
  item: any;
}

const props = defineProps<Props>();

const spanStyle: StyleValue = {
  padding: "0.2rem 0.4rem",
  borderRadius: "0.3rem",
};

const tdStyle: StyleValue = {
  color: `#${props.item.sampleType.foregroundColor}`,
  backgroundColor: `#${props.item.sampleType.backgroundColor}`,
  fontWeight: "bold",
};
</script>
