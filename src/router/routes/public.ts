import type { RouteRecordRaw } from "vue-router";
import samplesRoutes from "@/modules/samples/router/index";

const routes: RouteRecordRaw[] = [
  {
    path: "",
    name: "public-layout",
    redirect: "/samples",
    component: () => import("@/layouts/PublicLayout.vue"),
    children: [...samplesRoutes],
  },
];

// EXPORT ROUTES
export default routes;
