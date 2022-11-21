import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CountryDetail from "../views/CountryDetail.vue";
import PageNotFound from "../views/404.vue";
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/country/:id",
      name: "countryDetail",
      component: CountryDetail
    },
    { path: "/:catchAll(.*)", 
      name: "NotFound",
      component: PageNotFound 
    }
  ],
});

export default router;
