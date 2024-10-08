import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/store";
import router from "./Router/routing.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@/assets/Styles/style.css";

createApp(App).use(store).use(router).mount("#app");
