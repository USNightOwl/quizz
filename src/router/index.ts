import { createRouter, createWebHistory } from 'vue-router'
import NotFoundPage from "@/views/NoutFoundPage.vue";
import HomePage from "@/views/HomePage.vue";

const routes = [
  {
    path:"/",
    name: "home",
    component: HomePage,
  },
  {
    path:"/:pathMatch(.*)*",
    name: "notfound",
    component: NotFoundPage,
  }
]

const router = createRouter({
  history: createWebHistory("quick/"),
  routes,
})

export default router;