<template>
  <div class="table-wrapper">
    <table class="table border-gray" cellspacing="0" cellpadding="0">
      <!-- TABLE HEAD -->
      <thead class="table-head bg-lightgray">
        <tr>
          <td
            class="table-data"
            v-for="(field, fieldIndex) in fields"
            :key="fieldIndex"
          >
            <div class="flex" v-if="!field.disabled">
              <span class="text-center font-bold">
                {{ field.header }}
              </span>
            </div>
          </td>
        </tr>
      </thead>

      <!-- TABLE BODY -->
      <tbody class="table-body bg-light" v-if="data.length">
        <tr class="table-row" v-for="item in data" :key="item.id">
          <template
            v-for="(field, fieldIndex) in fields"
            :key="`${item.id}${fieldIndex}`"
          >
            <td class="table-data">
              <div v-if="!field.disabled">
                <slot :name="fieldIndex" :item="item">
                  <AppTableDataSlot :field="field" :item="item" />
                </slot>
              </div>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import AppTableDataSlot from "@/common/components/ui/AppTableDataSlot.vue";
interface Props {
  data: any[];
  fields: any;
  outline?: string;
  loading?: boolean;
}
defineProps<Props>();
</script>

<style scoped>
.table-wrapper {
  max-width: max-content;
  overflow: auto;
  border-radius: 0.7rem;
  border: 1px solid #d1d5db;
}

.table-head {
  border-radius: inherit;
  border-collapse: collapse !important;
}

.table-body {
  padding: 1rem;
}

/* .table-row {
  border: 1px solid gray;
} */
.table-data {
  padding: 1rem 1rem;
  min-width: fit-content;
  white-space: nowrap;
  border-bottom: 1px solid #d1d5db;
}
</style>
