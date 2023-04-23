import type { RouteRecordRaw } from "vue-router";
import samplesRoutes from "@/modules/samples/router/index";
import comparmentRoutes from "@/modules/comparment/router/index";

const routes: RouteRecordRaw[] = [
  {
    path: "",
    name: "public-layout",
    redirect: "/samples",
    component: () => import("@/layouts/PublicLayout.vue"),
    children: [...samplesRoutes, ...comparmentRoutes],
  },
];

// EXPORT ROUTES
export default routes;
