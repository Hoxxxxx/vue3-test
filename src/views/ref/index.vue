<!--
 * @Author: Chodge
 * @Date: 2022-03-22 15:15:41
 * @LastEditors: g05047
 * @LastEditTime: 2022-03-22 17:08:07
 * @Description: file content
-->
<!--
 * @Author: Chodge
 * @Date: 2021-12-17 11:05:15
 * @LastEditors: g05047
 * @LastEditTime: 2022-03-22 15:12:11
 * @Description: file content
-->
<template>
  <div class="home">
    <HelloWorld :msg="title" v-model:modelData="modelData" />
    <!-- test -->
    <el-input style="width: 200px" v-model="name" placeholder="Please input" />
    <el-input style="width: 200px" v-model="age" placeholder="Please input" />
    <div class="out">
      <div class="left">
        <span>原始数据:</span>
        <p>{{ obj }}</p>
      </div>
      <div class="left">
        <span>ref响应式数据:</span>
        <p>{{ refObj }}</p>
      </div>
      <div class="right">
        <span>toref响应式数据:</span>
        <p>{{ torefObj }}</p>
      </div>
      <div class="right">
        <span>reactiv响应式数据：</span>
        <p>我叫：{{ name }},今年{{ age }}岁</p>
      </div>
      <div class="right">
        <span>toRefs响应式数据：</span>
        <p>{{ toRefsObj }}</p>
      </div>
    </div>
    <hr />
    <el-button type="primary" @click="click">button</el-button>
    <p id="res"></p>
    <hr />
    <el-button type="primary" @click="click1">修改父组件provide的值</el-button>
    <hr />
    <br />
    <br />
    <Count />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Count from "@/components/render.vue";
import { reactive, ref, toRef, toRefs } from "@vue/reactivity";
import { provide } from "@vue/runtime-core";

export default {
  name: "base",
  components: {
    HelloWorld,
    Count,
  },
  setup() {
    const title = "Welcome to Your Vue.js App";
    const obj = {
      name: "tom",
      age: 25,
    };
    const refObj = ref(obj.name);
    const torefObj = toRef(obj, "name");
    const form = reactive(obj);
    const toRefsObj = toRefs(obj);
    const click = () => {
      form.age++;
      // torefObj.value = 'cat'
      // form.name = 'bob'
      // toRefsObj.name.value = 'cat';
    };
    // 区别：
    // 1、ref为深拷贝，其他的均为浅拷贝
    // 2、ref和reactive才会触发视图更新，toRef和toRefs不会
    // 3、ref,toRef和toRefs访问值均需要通过‘ .value ’的方式访问值，reactive则不用，直接访问属性值
    // -------------------------------------------------------------------------------------
    // provide 组件传值
    const msg = ref("我是父组件的值");
    provide("testData", msg);
    const click1 = () => {
      msg.value = "我是父组件变化后的值";
    };
    const modelData = ref("我是父组件的值modelDATA");
    return {
      title,
      click,
      obj,
      refObj,
      torefObj,
      ...toRefs(form),
      toRefsObj,
      click1,
      modelData,
    };
  },
};
</script>
<style scoped lang="less">
.out {
  width: 1200px;
  margin: 40px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > div {
    width: 150px;
    flex: 1 1 auto;
  }
}
</style>

