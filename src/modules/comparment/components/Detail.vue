<template>
  <DetailLocation :sample="sample" />
</template>

<script setup lang="ts">
// import StorageLayer from "@/common/interfaces/models/storage-layer";
// import { ComputedRef, computed } from "vue";
// import { getDateStr } from "@/common/helpers/helpers";
import type Sample from "@/common/interfaces/models/sample";
import DetailLocation from "@/modules/comparment/components/DetailLocation.vue";

interface Props {
  //   storageLayer: StorageLayer;
  sample: Sample;
}

// const props = defineProps<Props>();
defineProps<Props>();

// LIST ITEMS
// interface ListItem {
//   name: string;
//   data: string | number;
// }

// const storageLayerIcon: ComputedRef<string> = computed(() =>
//   props.storageLayer.icon.split("_").join("-")
// );

// const storageLayerListItems: ComputedRef<ListItem[]> = computed(() => {
//   return [
//     {
//       name: "Created",
//       data: getDateStr(props.storageLayer.created),
//     },
//     {
//       name: "Storage id",
//       data: props.storageLayer?.storageID,
//     },
//     {
//       name: "Storage definition id",
//       data: props.storageLayer?.storageLayerDefinitionID,
//     },
//     {
//       name: "User id",
//       data: props.storageLayer?.userID,
//     },
//     {
//       name: "Transposed",
//       data: props.storageLayer?.transposed ? "Yes" : "No",
//     },
//     {
//       name: "Position",
//       data: props.storageLayer?.position,
//     },
//   ];
// });
</script>

<style scoped>
/* STORAGE LAYER LIST */
.storage-layer-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.lstorage-layer-list li {
  padding-bottom: 1rem;
}

.storage-layer-list li:last-child {
  padding-bottom: 0;
}

.li-name {
  font-weight: 500;
}

.header-div {
  display: flex;
  justify-content: space-between;
}
</style>
