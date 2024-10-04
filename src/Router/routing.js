import { createRouter, createWebHistory } from "vue-router";
import AddAppointment from "../components/AppointmentComponents/AddAppointment.vue";
import OtherComponent from "../components/AppointmentComponents/OtherComponent.vue";
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
    path: "/AddAppointment",
    component: AddAppointment,
  },
  {
    path: "/OtherComponent",
    component: OtherComponent,
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
