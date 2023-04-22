import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/styles/index.css";
import router from "@/router/index.ts";
import globalRegister from "@/global-register";
import { axiosInit } from "@/plugins/axios";
import { createPinia } from "pinia";

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
