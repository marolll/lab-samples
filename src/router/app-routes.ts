// For using the same routes among the app - mainly for links
export class AppRoutes {
  samples: AppRoute;

  constructor() {
    // Samples page
    this.samples = {
      path: "/samples",
      name: "samples",
    };
  }
}

// App routes instance
export const appRoutes = new AppRoutes();

export interface AppRoute {
  path: string;
  name: string;
}

// Export default appRoutes constant
export default appRoutes;
