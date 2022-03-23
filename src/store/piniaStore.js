/*
 * @Author: Chodge
 * @Date: 2022-03-23 10:15:08
 * @LastEditors: g05047
 * @LastEditTime: 2022-03-23 11:41:28
 * @Description: file content
 */
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    name: "xxx",
    age: 20,
  }),
  getters: {
    getterNameInfo: (state) => {
      return `getters获取到了名字 --- ${state.name}`;
    },
  },
  actions: {
    changeUserName(name) {
      this.name = name;
    },
    changeNameAsync(name, flag) {
      return new Promise((resolve, reject) => {
        if (flag) {
          this.name = name;
          resolve(name);
        } else {
          reject("error");
        }
      });
    },
  },
});
