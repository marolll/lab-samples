export const helpers = {};

import TableField from "@/common/interfaces/ui/table-field";
import { ComputedRef, computed } from "vue";

export const samplesTableFields: ComputedRef<ComputedProp> = computed(() => ({
  created: {
    header: "Created",
    field: "created",
    type: "date",
  },
  owner: {
    header: "Owner",
    field: "owner",
    type: "text",
  },
  sampleID: {
    header: "Sample Id",
    field: "sampleID",
    type: "text",
  },
  sampleType: {
    header: "Sample Id",
    field: "sampleType.name",
    type: "text",
  },
}));

interface ComputedProp {
  [key: string]: TableField;
}
