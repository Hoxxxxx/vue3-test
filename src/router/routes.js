/*
 * @Author: Chodge
 * @Date: 2022-03-22 16:11:56
 * @LastEditors: g05047
 * @LastEditTime: 2022-03-23 15:35:40
 * @Description: file content
 */
import Home from "../views/Home.vue";

const Vue = [
  {
    path: "/baseAll",
    name: "baseAll",
    component: () => import("../views/baseAll/index.vue"),
    meta: {
      title: "基础API用法",
    },
  },
  {
    path: "/ref",
    name: "ref",
    component: () => import("../views/ref/index.vue"),
    meta: {
      title: "响应式数据API",
    },
  },
  {
    path: "/piniaStore",
    name: "piniaStore",
    component: () => import("../views/piniaStore/index.vue"),
    meta: {
      title: "Pinia 状态管理器",
    },
  },
];
const Css = [
  {
    path: "/scrollBehavior",
    name: "scrollBehavior",
    component: () => import("../views/scrollBehavior/index.vue"),
    meta: {
      title: "CSS平滑滚动",
    },
  },
  {
    path: "/mixBend",
    name: "mixBend",
    component: () => import("../views/mixBendMode/index.vue"),
    meta: {
      title: "CSS背景混合模式",
    },
  },
];

export const menus = [
  {
    path: "/Vue",
    name: "Vue",
    meta: {
      title: "Vue3.x",
    },
    children: Vue,
  },
  {
    path: "/Css",
    name: "Css",
    meta: {
      title: "Css",
    },
    children: Css,
  },
];
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: { name: "baseAll" },
    children: [...Vue, ...Css],
  },
];
export default routes;
