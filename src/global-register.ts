import type { App } from "vue";

// COMPONENTS
import AppTable from "@/common/components/ui/AppTable.vue";
import AppCard from "@/common/components/ui/AppCard.vue";
import AppIcon from "@/common/components/icons/AppIcon.vue";
import AppBarcode from "@/common/components/ui/AppBarcode.vue";
import AppTooltip from "@/common/components/ui/AppTooltip.vue";

// REGISTER GLOBAL COMPONENTS
const registerComponents = (app: App<Element>) => {
  // COMPONENTS
  app.component("AppTable", AppTable);
  app.component("AppCard", AppCard);
  app.component("AppIcon", AppIcon);
  app.component("AppBarcode", AppBarcode);
  app.component("AppTooltip", AppTooltip);
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
