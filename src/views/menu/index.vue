<!--
 * @Author: Chodge
 * @Date: 2022-03-22 15:13:57
 * @LastEditors: g05047
 * @LastEditTime: 2022-03-23 15:28:06
 * @Description: file content
-->
<template>
  <el-menu :default-active="curMenu" :router="true" :unique-opened="true">
    <template v-for="item in menus" :key="item.name">
      <el-sub-menu :index="item.name" v-if="item.children">
        <template #title>
          <el-icon><IconMenu /></el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <template v-for="menuItem in item.children" :key="menuItem.name">
          <el-menu-item :index="menuItem.name">
            <span>{{ menuItem.meta.title }}</span>
          </el-menu-item>
        </template>
      </el-sub-menu>
      <el-menu-item :index="item.name" v-else>
        <el-icon><IconMenu /></el-icon>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script>
import { computed, onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { menus } from "../../router/routes";
import { Menu as IconMenu } from "@element-plus/icons-vue";
export default {
  name: "menu",
  components: { IconMenu },
  setup() {
    const route = useRoute();
    const curMenu = computed(() => {
      return route.name;
    });
    onMounted(() => {
      console.log(menus);
    });
    return {
      menus,
      curMenu,
    };
  },
};
</script>
<style lang="less" scoped></style>
