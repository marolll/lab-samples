// For using the same routes among the app - mainly for links
export class AppRoutes {
  samples: AppRoute;
  comparment: AppRoute;

  constructor() {
    // Samples page
    this.samples = {
      path: "/samples",
      name: "samples",
    };

    this.comparment = {
      path: "/comparment",
      name: "comparment",
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
