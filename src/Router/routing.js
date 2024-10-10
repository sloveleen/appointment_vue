import { createRouter, createWebHistory } from "vue-router";
import AddLocation from "../components/LocationComponents/AddLocation.vue";
import AddService from "../components/ServiceComponents/AddService.vue";
import ServiceList from "../components/ServiceComponents/ServiceList.vue";
import LocationList from "../components/LocationComponents/LocationList.vue";
import HomePage from "../components/HomePage.vue";
import FooterSection from "../components/MainPageLayout/FooterSection.vue";
import SidebarClient from "../components/MainPageLayout/SidebarClient.vue";
import TopHeader from "../components/MainPageLayout/TopHeader.vue";
import LoginPage from "@/components/Dashboard/LoginPage.vue";
const routesUrl = [
  {
    path: "/",
    component: LoginPage,
  },
  {
    path: "/dashboard",
    component: HomePage,
  },
  {
    path: "/AddLocation",
    component: AddLocation,
  },
  {
    path: "/AddService",
    component: AddService,
  },
  {
    path: "/LocationList",
    component: LocationList,
  },
  {
    path: "/ServiceList",
    component: ServiceList,
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
