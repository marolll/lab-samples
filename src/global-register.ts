import type { App } from "vue";

// COMPONENTS - UI
import AppTable from "@/common/components/ui/AppTable.vue";

// REGISTER GLOBAL COMPONENTS
const registerComponents = (app: App<Element>) => {
  // COMPONENTS - UI
  app.component("AppTable", AppTable);
};

import helpers from "@/common/helpers/helpers";

// REGISTER FUNCTIONS AND VARIABLES
const registerGlobalProperties = (app: App<Element>) => {
  // ADD GLOBAL PROPERTIES
  app.config.globalProperties.$helpers = helpers;
  // PROVIDE VALUES
  app.provide("helpers", app.config.globalProperties.$helpers);
};

// GLOBAL REGISTRATION
const globalRegister = (app: App<Element>) => {
  registerComponents(app);
  registerGlobalProperties(app);
};

export default globalRegister;
