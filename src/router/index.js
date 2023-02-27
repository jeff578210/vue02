import { createRouter, createWebHistory } from 'vue-router';

const routes = [
//   {path: "/two", name: "Home", component: () => import("../components/two.vue")},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router