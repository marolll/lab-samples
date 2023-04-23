<template>
  <!-- TEXT / NUMBER FIELD -->
  <span v-if="field.type === 'text'">
    {{ $helpers.getNestedProp(item, field.field, "-") }}
  </span>

  <span v-else-if="field.type === 'date'">
    {{ $helpers.getDateStr($helpers.getNestedProp(item, field.field)) || "-" }}
  </span>
</template>

<script setup lang="ts">
interface Props {
  item: any;
  field: any;
}
defineProps<Props>();
</script>
