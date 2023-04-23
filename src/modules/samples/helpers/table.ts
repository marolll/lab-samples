export const helpers = {};

import TableField from "@/common/interfaces/ui/table-field";
import { ComputedRef, computed } from "vue";

export const samplesTableFields: ComputedRef<ComputedProp> = computed(() => ({
  sampleType: {
    header: "Sample name",
    field: "sampleType.name",
    type: "text",
  },
  name: {
    header: "Name",
    field: "name",
    type: "text",
  },
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
    header: "Identification",
    field: "sampleID",
    type: "text",
  },
  position: {
    header: "Position",
    field: "position",
    type: "text",
  },
  checkedOut: {
    header: "Checked out",
    field: "checkedOut",
    type: "boolean",
    boolean: {
      true_val: "Yes",
      false_val: "No",
    },
  },
  archived: {
    header: "Archived",
    field: "archived",
    type: "boolean",
    boolean: {
      true_val: "Yes",
      false_val: "No",
    },
  },
  comparment: {
    header: "Comparment",
    field: "",
    type: "",
  },
}));

interface ComputedProp {
  [key: string]: TableField;
}
