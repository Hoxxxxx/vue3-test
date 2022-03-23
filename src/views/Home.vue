<!--
 * @Author: Chodge
 * @Date: 2021-12-17 11:05:15
 * @LastEditors: g05047
 * @LastEditTime: 2022-03-23 14:13:20
 * @Description: file content
-->
<template>
  <el-row>
    <el-col :span="3">
      <Menu />
    </el-col>
    <el-col :span="21">
      <div class="content">
        <router-view />
      </div>
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
  height: 100vh;
  .el-col {
    height: 100%;
    /deep/ .el-menu {
      height: 100%;
    }
    .content {
      height: 100%;
      overflow: auto;
    }
  }
}
</style>
