import { createApp } from "vue";
import App from "./App.vue";

import router from "@/router/index.ts";
import globalRegister from "@/global-register";
import { axiosInit } from "@/plugins/axios";
import { createPinia } from "pinia";

// CSS
import "@/assets/styles/index.css";
import "@/assets/styles/colors.css";
import "@/assets/styles/typography.css";
import "@/assets/styles/link.css";

const app = createApp(App);

// Router plugin for Front-end routing
app.use(router);

// Pinia plugin
const piniaStore = createPinia();
app.use(piniaStore);

// Globally register functions / components
globalRegister(app);

// Init axios
axiosInit();

// MOUNT THE APP
app.mount("#app");
