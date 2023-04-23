<template>
  <AppTooltip>
    <template #text>
      <h4 class="tooltip-action font-bold text-primary">
        {{ "Show info about storage layer" }} <AppIcon icon="eye" />
      </h4>
    </template>

    <template #content>
      <h3 class="tooltip-header pb-sm">
        {{ storageLayer?.name }}
        <AppIcon :icon="storageLayerIcon" />
      </h3>
      <ul class="storage-layer-list">
        <li
          class="pb-xs"
          v-for="(item, index) in storageLayerListItems"
          :key="index"
        >
          <span class="li-name">{{ item?.name }}: </span>
          <span class="li-data">{{ item?.data }} </span>
        </li>
      </ul>
    </template>
  </AppTooltip>
</template>

<script setup lang="ts">
import StorageLayer from "@/common/interfaces/models/storage-layer";
import { ComputedRef, computed } from "vue";
import { getDateStr } from "@/common/helpers/helpers";

interface Props {
  storageLayer: StorageLayer;
}

const props = defineProps<Props>();

// LIST ITEMS
interface ListItem {
  name: string;
  data: string | number;
}

const storageLayerIcon: ComputedRef<string> = computed(() =>
  props.storageLayer.icon.split("_").join("-")
);

const storageLayerListItems: ComputedRef<ListItem[]> = computed(() => {
  return [
    {
      name: "Created",
      data: getDateStr(props.storageLayer.created),
    },
    {
      name: "Storage id",
      data: props.storageLayer?.storageID,
    },
    {
      name: "Storage definition id",
      data: props.storageLayer?.storageLayerDefinitionID,
    },
    {
      name: "User id",
      data: props.storageLayer?.userID,
    },
    {
      name: "Transposed",
      data: props.storageLayer?.transposed ? "Yes" : "No",
    },
    {
      name: "Position",
      data: props.storageLayer?.position,
    },
  ];
});
</script>

<style scoped>
/* STORAGE LAYER LIST */
.storage-layer-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
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

.tooltip-header,
.tooltip-action {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
}

.tooltip-action {
  cursor: pointer;
}
</style>
