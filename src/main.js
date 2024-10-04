import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router/routing.js";
import "@/assets/Styles/style.css";

createApp(App).use(router).mount("#app");
