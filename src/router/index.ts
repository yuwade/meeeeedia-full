import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
// const Layout = () => import("@/layout/Index.vue")
const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: import("../layout/index.vue"),
    redirect: "/index",
    children: [
      {
        path: "index",
        component: () => import("../views/Index.vue"),
        name: "index",
        meta: {
          title: "首页",
          icon: "dashboard",
          affix: true
        }
      }
    ]
  }]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router