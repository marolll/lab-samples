<template>
  <td class="table-data">
    <RouterLink :style="linkStyle" :to="link"> See comparment</RouterLink>
  </td>
</template>

<script setup lang="ts">
import appRoutes from "@/router/app-routes";
import { ComputedRef, StyleValue, computed } from "vue";

interface Props {
  item: any;
}

const props = defineProps<Props>();

const link: ComputedRef<string> = computed(
  () => `${appRoutes.comparment.path}/${props.item.storageLayerID}`
);

const linkStyle: StyleValue = {
  fontWeight: "bold",
  color: "#fe8100",
};
</script>
