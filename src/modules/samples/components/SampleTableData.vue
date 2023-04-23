<template>
  <td class="table-data" :style="tdStyle">
    <span>
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

const tdStyle: StyleValue = {
  color: `#${props.item.sampleType.foregroundColor}`,
  backgroundColor: `#${props.item.sampleType.backgroundColor}`,
  fontWeight: "bold",
};
</script>
