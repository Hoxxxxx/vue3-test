<!--
 * @Author: Chodge
 * @Date: 2022-03-22 15:13:57
 * @LastEditors: g05047
 * @LastEditTime: 2022-03-22 16:58:18
 * @Description: file content
-->
<template>
  <el-menu
    :default-active="curMenu"
    :router="true"
  >
    <template v-for="item in originMenus" :key="item.name">
      <el-sub-menu :index="item.name" v-if="item.children">
        <template #title>
          <span>{{ item.name }}</span>
        </template>
        <template v-for="menuItem in item.children" :key="menuItem.name">
          <el-menu-item :index="menuItem.name">
            <span>{{ menuItem.meta.title }}</span>
          </el-menu-item>
        </template>
      </el-sub-menu>
      <el-menu-item :index="item.name" v-else>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script>
import { computed, onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import originMenus from "../../router/routes";
export default {
  name: "menu",
  setup() {
    const route = useRoute();
    const curMenu = computed(() => {
      return route.name;
    });
    onMounted(() => {
      console.log(curMenu);
    });
    return {
      originMenus,
      curMenu,
    };
  },
};
</script>
<style lang="less" scoped></style>
