/*
 * @Author: Chodge
 * @Date: 2021-12-17 11:05:15
 * @LastEditors: g05047
 * @LastEditTime: 2021-12-17 11:14:34
 * @Description: file content
 */
import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(store).use(router).use(ElementPlus, {
  size: 'small',
  zIndex: 3000
}).mount('#app')