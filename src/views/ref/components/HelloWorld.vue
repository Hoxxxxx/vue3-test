<!--
 * @Author: Chodge
 * @Date: 2021-12-17 11:05:15
 * @LastEditors: g05047
 * @LastEditTime: 2021-12-21 14:18:19
 * @Description: file content
-->
<template>
  <div class="hello">
    HelloWorld组件： {{ msg }}
    <hr />
    子组件接收到父组件provide的数据faMsg:{{ faMsg }}
    <br />
    <br />
    <br />
    <span>{{ modelData }}</span>
    <el-button type="primary" @click="changeFa">子组件修改父组件的值</el-button>
    <hr />
  </div>
</template>

<script>
import { inject, nextTick } from "@vue/runtime-core";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    modelData: {
      type: String,
      default: () => "",
    },
  },
  setup(props, { emit }) {
    const faMsg = inject("testData");
    const changeFa = () => {
      let msg = "我是子组件主动修改父组件过后的值";
      emit("update:modelData", msg);
      nextTick(() => {
        console.log(props.modelData);
      });
    };
    return {
      faMsg,
      changeFa,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
