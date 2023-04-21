import type { RouteRecordRaw } from "vue-router";
import appRoutes from "@/router/app-routes";

const routes: RouteRecordRaw[] = [
  {
    path: appRoutes.samples.path,
    name: appRoutes.samples.name,
    component: () => import("@/views/samples/index.vue"),
  },
];

// EXPORT ROUTES
export default routes;
