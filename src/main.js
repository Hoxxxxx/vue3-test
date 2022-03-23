/*
 * @Author: Chodge
 * @Date: 2021-12-17 11:05:15
 * @LastEditors: g05047
 * @LastEditTime: 2022-03-23 10:14:30
 * @Description: file content
 */
import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createPinia } from 'pinia'

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const pinia = createPinia();
createApp(App).use(store).use(router).use(ElementPlus, {
  size: 'small',
  zIndex: 3000
}).use(pinia).mount('#app')