import type { RouteRecordRaw } from "vue-router";
import appRoutes from "@/router/app-routes";

const routes: RouteRecordRaw[] = [
  {
    path: `${appRoutes.comparment.path}/:sampleId`,
    name: appRoutes.comparment.name,
    component: () => import("@/views/comparment/index.vue"),
  },
];

// EXPORT ROUTES
export default routes;
