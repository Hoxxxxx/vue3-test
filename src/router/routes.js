/*
 * @Author: Chodge
 * @Date: 2022-03-22 16:11:56
 * @LastEditors: g05047
 * @LastEditTime: 2022-03-22 17:05:42
 * @Description: file content
 */
import Home from "../views/Home.vue";

const menus = [
  {
    path: "/about",
    name: "about",
    meta:{
      title:'about组件'
    },
    component: () => import("../views/baseAll/index.vue"),
  },
  {
    path: "/base",
    name: "base",
    meta:{
      title:'base组件'
    },
    component: () => import("../views/ref/index.vue"),
  },
  {
    path: "/mixBend",
    name: "mixBend",
    meta:{
      title:'CSS背景混合模式'
    },
    component: () => import("../views/mixBendMode/index.vue"),
  },
];
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: { name: "about" },
    meta:{
      title:'Home'
    },
    children: menus,
  },
];
export default routes;
