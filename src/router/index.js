import { createRouter, createWebHashHistory } from "vue-router";
const HomeView = () => import("@/views/HomeView.vue");
const JobResults = () =>
  import(/*webpackChunkName: "jobs"*/ "@/views/JobResultsView.vue");
const JobView = () =>
  import(/*webpackChunkName: "jobs" */ "@/views/JobView.vue");

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
  {
    path: "/job/results/:id",
    name: "JobListing",
    component: JobView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
