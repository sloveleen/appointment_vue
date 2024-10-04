import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import FooterSection from "../components/MainPageLayout/FooterSection.vue";
import SidebarClient from "../components/MainPageLayout/SidebarClient.vue";
import TopHeader from "../components/MainPageLayout/TopHeader.vue";
const routesUrl = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/SidebarClient",
    component: SidebarClient,
  },
  {
    path: "/FooterSection",
    component: FooterSection,
  },
  {
    path: "/TopHeader",
    component: TopHeader,
  },
];
const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes: routesUrl,
});
export default router;
