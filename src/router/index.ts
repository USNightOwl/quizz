import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:"/",
    component: () => import('@/layout/DefaultLayout.vue'),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/HomePage.vue"),
      },
      {
        path: "/danh-sach-bai-tap/:classId",
        name: "course",
        component: () => import("@/views/ExercisePage.vue"),
      },
    ]
  },
  {
    path:"/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NoutFoundPage.vue"),
  }
]

const router = createRouter({
  history: createWebHistory("quick/"),
  routes,
})

export default router;