<!--
 * @Author: Chodge
 * @Date: 2021-12-17 11:05:15
 * @LastEditors: g05047
 * @LastEditTime: 2022-03-22 17:06:45
 * @Description: file content
-->
<template>
  <div class="about">
    <p>
      <span class="bold">当前对象为 “ {{ curObj }} ”：</span>
      <span class="red">name = {{ name }}</span>
    </p>
    <p>
      <span class="bold">当前对象为 “ {{ curObj }} ”：</span>
      <span class="red">age = {{ age }}</span>
    </p>
    <hr />
    <p>agePlus：{{ agePlus }}</p>
    <el-button type="primary" @click="click">获取数据</el-button>
    <br />
    <br />
    <hr />
  </div>
</template>
<script>
import {
  onBeforeMount,
  ref,
  reactive,
  toRef,
  toRefs,
  watch,
  computed,
} from "@vue/runtime-core";
import { ElMessage } from "element-plus";
export default {
  name: "about",
  components: {},
  setup() {
    const Obj = {
      name: "xxxx",
      age: 18,
    };
    const curObj = ref("");
    const ref_copy = ref(Obj.name);
    const reactive_copy = reactive(Obj);
    const toref_copy = toRef(Obj, "name");
    const torefs_copy = toRefs(Obj);
    onBeforeMount(() => {
      curObj.value = "ref_copy";
      console.log("Obj", Obj);
      console.log("ref_copy", ref_copy.value);
      console.log("reactive_copy", reactive_copy.name);
      console.log("toref_copy", toref_copy.value);
      console.log("torefs_copy", torefs_copy.name.value);
    });
    // 监听多数据源
    const watch_age = (key, val) => {
      console.log(key, val);
    };
    const watch_name = (key, val) => {
      console.log(key, val);
    };
    watch(
      [() => reactive_copy.age, () => reactive_copy.name],
      ([newVal1, newVal2], [oldVal1, oldVal2]) => {
        watch_age("newVal1", newVal1);
        watch_age("newVal2", newVal2);
        watch_name("oldVal1", oldVal1);
        watch_name("oldVal2", oldVal2);
        // console.log(newVal1, oldVal1);
        // console.log(newVal2, oldVal2);
      },
      {
        immediate: true,
        deep: true,
      }
    );
    // 计算属性
    const agePlus = computed(() => {
      return (reactive_copy.age + 10) / 2;
    });
    const getData = async () => {
      await promiseData()
        .then((res) => {
          if (res) {
            ElMessage.success("获取成功！");
            reactive_copy.age = res.age;
            reactive_copy.name = res.name;
          }
        })
        .catch((err) => {
          ElMessage.error(err);
        });
    };
    const randomString = (len) => {
      len = len || 32;
      var $chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
      var maxPos = $chars.length;
      var pwd = "";
      for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return pwd;
    };
    const promiseData = () => {
      let flag = Math.random() > 0.5;
      let res = {
        name: randomString(10),
        age: Math.round(Math.random() * 20) + 20,
      };
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (flag) {
            resolve(res);
          } else {
            reject("获取数据失败！");
          }
        }, 500);
      });
    };
    const click = () => {
      getData();
    };
    return {
      curObj,
      ...toRefs(reactive_copy),
      click,
      agePlus,
      watch_age,
      watch_name,
    };
  },
};
</script>
<style lang="less" scoped>
.bold {
  font-weight: bold;
}
.red {
  color: red;
}
</style>
