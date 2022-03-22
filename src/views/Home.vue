<!--
 * @Author: Chodge
 * @Date: 2021-12-17 11:05:15
 * @LastEditors: g05047
 * @LastEditTime: 2022-03-22 16:15:22
 * @Description: file content
-->
<template>
  <el-row>
    <el-col :span="3">
      <Menu />
    </el-col>
    <el-col :span="21">
      <router-view />
    </el-col>
  </el-row>
</template>
<script>
import Menu from "./menu/index.vue";
export default {
  name: "Home",
  components: { Menu },
  setup() {},
};
</script>
<style lang="less" scoped>
.el-row {
  height: 100%;
  .el-col {
    /deep/ .el-menu {
      height: 100%;
    }
  }
}
</style>
