<template>
  <td class="table-data">
    <RouterLink class="router-link" :to="link">
      See more<AppIcon icon="eye" />
    </RouterLink>
  </td>
</template>

<script setup lang="ts">
import Sample from "@/common/interfaces/models/sample";
import appRoutes from "@/router/app-routes";
import { ComputedRef, computed } from "vue";

interface Props {
  item: Sample;
}

const props = defineProps<Props>();

const link: ComputedRef<string> = computed(
  () => `${appRoutes.comparment.path}/${props.item.sampleID}`
);
</script>
