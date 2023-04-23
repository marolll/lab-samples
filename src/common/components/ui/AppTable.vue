<template>
  <div class="table-with-pagination-wrapper">
    <div class="table-wrapper">
      <table class="table border-gray" cellspacing="0" cellpadding="0">
        <!-- TABLE HEAD -->
        <thead class="table-head bg-lightgray">
          <tr>
            <td
              class="table-header-data"
              v-for="(field, fieldIndex) in fields"
              :key="fieldIndex"
            >
              <span class="text-center font-bold">
                {{ field.header }}
              </span>
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
              <slot :name="fieldIndex" :item="item">
                <AppTableDataSlot :field="field" :item="item" />
              </slot>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pagination-wrapper">
      <AppTablePagination :pagination="pagination" :setPage="setPage" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppTableDataSlot from "@/common/components/ui/AppTableDataSlot.vue";
import AppTablePagination from "./AppTablePagination.vue";
import Pagination, {
  PaginationSetParams,
} from "@/common/interfaces/ui/pagination";
interface Props {
  data: any[];
  fields: any;
  outline?: string;
  loading?: boolean;
  pagination: Pagination;
  setPage: ({}: PaginationSetParams) => void;
}
defineProps<Props>();
</script>

<style scoped>
.table-with-pagination-wrapper {
  width: 100%;
}
.table-wrapper {
  max-width: max-content;
  overflow: auto;
  border-radius: 0.7rem;
  -webkit-box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.25),
    0 2px 4px -2px rgb(0 0 0 / 0.25);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.25), 0 2px 4px -2px rgb(0 0 0 / 0.25);
  margin-bottom: 1rem;
}

.table {
  border-collapse: collapse;
}

.table-head {
  border-radius: inherit;
  border-collapse: collapse !important;
}
.table-head tr {
  border-bottom: 1px solid #d1d5db;
}

.table-body {
  padding: 1rem;
}

.table-header-data {
  padding: 1rem 1rem;
  min-width: fit-content;
  white-space: nowrap;
  border-bottom: inherit;
}

.table-row {
  border-bottom: 1px solid #d1d5db;
}

.table-row:last-child {
  border-bottom: none;
}

.pagination-wrapper {
  display: flex;
}
</style>
