import { createRouter, createWebHistory, type Router } from "vue-router";

// ROUTES FROM MODULES
import publicLayout from "@/router/routes/public";

// INITIATE THE ROUTER INSTANCE
export const router: Router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },

  // ROUTES
  routes: [
    // Add here any layout (public, dashboard, etc.)
    ...publicLayout,
  ],
});

// EXPORT DEFAULT ROUTER
export default router;
