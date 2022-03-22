<!--
 * @Author: Chodge
 * @Date: 2021-12-21 09:45:05
 * @LastEditors: g05047
 * @LastEditTime: 2021-12-21 10:52:33
 * @Description: file content
-->

<script>
import { ref } from "@vue/reactivity";
import { h, render } from "@vue/runtime-dom";
export default {
  setup() {
    const count = ref(0);
    const increament = () => {
      count.value++;
    };
    return () => {
      h(
        "<el-button>增加</el-button>",
        {
          onClick: increament,
        },
        count.value
      );
    };
  },
};
</script>

<style>
</style>
