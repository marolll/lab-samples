import { App } from "vue";

// COMPONENTS - UI
import AppTable from "@/common/components/ui/AppTable.vue";

// DECLARE GLOBAL COMPONENTS
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    // COMPONENTS - UI
    AppTable: typeof AppTable;
  }
}

import helpers from "@/common/helpers/helpers";

// DECLARE GLOBAL VARIABLES
declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $helpers: typeof helpers;
  }
}
