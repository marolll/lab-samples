import { App } from "vue";

// COMPONENTS - UI
import AppTable from "@/common/components/ui/AppTable.vue";
import AppCard from "@/common/components/ui/AppCard.vue";
import AppBarcode from "@/common/components/ui/AppBarcode.vue";
import AppIcon from "@/common/components/icons/AppIcon.vue";
import AppTooltip from "@/common/components/ui/AppTooltip.vue";

interface ImportMeta {
  env: {
    VITE_DATABASE_URL?: string;
    VITE_WEB_URL?: string;
    VITE_BRAINTREE_GATEWAY?: string;
    VITE_BRAINTREE_DESCRIPTOR?: string;
    VITE_RECAPTCHA_SECRET_KEY?: string;
    VITE_EMAIL_FROM?: string;
    VITE_EMAIL_ADMINS?: string;
    VITE_SEND_IN_BLUE_KEY?: string;
    VITE_SEND_IN_BLUE_URL?: string;
    VITE_RECAPTCHA_SITE_KEY?: string;
  };
}

// DECLARE GLOBAL COMPONENTS
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    AppTable: typeof AppTable;
    AppIcon: typeof AppIcon;
    AppCard: typeof AppCard;
    AppBarcode: typeof AppBarcode;
    AppTooltip: typeof AppTooltip;
  }
}

import helpers from "@/common/helpers/helpers";

// DECLARE GLOBAL VARIABLES
declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $helpers: typeof helpers;
  }
}
