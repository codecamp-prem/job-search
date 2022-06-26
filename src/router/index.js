import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobResults from "@/views/JobResultsView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/job/results",
    name: "JobResults",
    component: JobResults,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
