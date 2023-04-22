import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/styles/index.css";
import router from "@/router/index.ts";
import globalRegister from "@/global-register";
import { axiosInit } from "@/plugins/axios";

const app = createApp(App);

// USE PLUGINS
app.use(router);

// GLOBALLY REGISTER FUNCTIONS / COMPONENTS
globalRegister(app);

// Init axios
axiosInit();

// MOUNT THE APP
app.mount("#app");
