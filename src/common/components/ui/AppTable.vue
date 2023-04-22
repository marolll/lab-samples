<template>
  <table>
    <!-- TABLE HEAD -->
    <thead v-if="header">
      <tr>
        <td v-for="(field, fieldIndex) in fields" :key="fieldIndex">
          <div class="flex" v-if="!field.disabled">
            <span class="text-center">
              {{ field.header }}
            </span>
          </div>
        </td>
      </tr>
    </thead>

    <!-- TABLE BODY -->
    <tbody v-if="data.length">
      <tr v-for="item in data" :key="item.id">
        <template
          v-for="(field, fieldIndex) in fields"
          :key="`${item.id}${fieldIndex}`"
        >
          <td>
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
</template>

<script setup lang="ts">
import AppTableDataSlot from "@/common/components/ui/AppTableDataSlot.vue";
interface Props {
  data: any[];
  fields: any;
  header?: boolean;
  outline?: string;
  loading?: boolean;
}
defineProps<Props>();
</script>
