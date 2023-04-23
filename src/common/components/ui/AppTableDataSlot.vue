<template>
  <td class="table-data">
    <!-- TEXT / NUMBER FIELD -->
    <span v-if="field.type === 'text'">
      {{ $helpers.getNestedProp(item, field.field) }}
    </span>

    <span v-else-if="field.type === 'date'">
      {{
        $helpers.getDateStr($helpers.getNestedProp(item, field.field)) || "-"
      }}
    </span>

    <span v-else-if="field.type === 'boolean'">
      {{
        $helpers.getNestedProp(item, field.field) === true
          ? field?.boolean?.true_val
          : field?.boolean?.false_val
      }}
    </span>
  </td>
</template>

<script setup lang="ts">
interface Props {
  item: any;
  field: any;
}
defineProps<Props>();
</script>

<style>
.table-data {
  padding: 1rem 1rem;
  min-width: fit-content;
  white-space: nowrap;
}
</style>
