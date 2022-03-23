/*
 * @Author: Chodge
 * @Date: 2021-12-17 11:05:15
 * @LastEditors: g05047
 * @LastEditTime: 2022-03-23 15:29:33
 * @Description: file content
 */
import { createRouter, createWebHistory } from "vue-router";
import routes from './routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
