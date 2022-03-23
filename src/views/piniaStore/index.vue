<!--
 * @Author: Chodge
 * @Date: 2022-03-23 10:18:32
 * @LastEditors: g05047
 * @LastEditTime: 2022-03-23 15:34:24
 * @Description: file content
-->
<template>
  <h3 class="">测试pinia状态管理</h3>
  <br />
  <h4>state：{{ userName }}</h4>
  <br />
  <h4>getters：{{ getterNameInfo }}</h4>
  <br />
  <el-button type="primary" @click="change">修改用户名称</el-button>
  <el-button type="primary" @click="changeAsync">异步修改用户名称</el-button>
</template>

<script>
import { computed, onBeforeMount } from "@vue/runtime-core";
import { useUserStore } from "../../store/piniaStore";
import { ElNotification } from "element-plus";
export default {
  name: "",
  components: {},
  setup() {
    const userInfo = useUserStore();
    // computed
    const userName = computed(() => {
      return userInfo.name;
    });
    const getterNameInfo = computed(() => {
      return userInfo.getterNameInfo;
    });
    onBeforeMount(() => {
    });
    const change = () => {
      userInfo.changeUserName("xxx123");
    };
    const changeAsync = async () => {
      let flag = Math.random() > 0.5;
      let name = "xxx" + Math.random();
      await userInfo
        .changeNameAsync(name, flag)
        .then((res) => {
          ElNotification({
            title: "Success",
            message: "修改成功！",
            type: "success",
          });
        })
        .catch((err) => {
          ElNotification({
            title: "Error",
            message: "修改失败",
            type: "error",
          });
        });
    };
    return {
      userName,
      getterNameInfo,
      change,
      changeAsync,
    };
  },
};
</script>

<style lang="less" scoped>
</style>
