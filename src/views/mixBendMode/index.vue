<!--
 * @Author: Chodge
 * @Date: 2022-03-18 15:09:04
 * @LastEditors: g05047
 * @LastEditTime: 2022-03-22 17:22:05
 * @Description: file content
-->
<template>
  <div class="mix-bend-mode" draggable="true"></div>
  <div id="neon-btn">
    <button class="btn one">Hover me</button>
    <button class="btn two">Hover me</button>
    <button class="btn three">Hover me</button>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
export default {
  name: "mixBendMode",
  setup() {
    onMounted(() => {
      console.log('背景混合模式');
    });
  },
};
</script>

<style lang="less" scoped>
.mix-bend-mode {
  border: 1px solid #000;
  width: 800px;
  height: 300px;
  margin: 0 auto;
  background: linear-gradient(
    45deg,
    rgb(255, 255, 255) 0,
    rgb(0, 0, 0) 50%,
    #fff 50%
  );
  position: relative;
  &::before {
    content: "CSS混合模式（mix-bend-mode）";
    font-size: 50px;
    display: block;
    width: fit-content;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    mix-blend-mode: difference;
    animation: move 3s infinite linear alternate;
  }
}
@keyframes move {
  0% {
    transform: translate(-30%, -50%);
  }
  100% {
    transform: translate(-70%, -50%);
  }
}

#neon-btn {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 500px;
  background: #031628; 
}

.btn {
  border: 1px solid;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 14px;
  padding: 10px 20px;
  font-weight: 300;
}

.one {
  color: #4cc9f0;
}

.two {
  color: #f038ff; 
}

.three {
  color: #b9e769;
}

.btn:hover {
  color: white;
  border: 0;
}

.one:hover {
  background-color: #4cc9f0;
  -webkit-box-shadow: 10px 10px 99px 6px rgba(76,201,240,1);
  -moz-box-shadow: 10px 10px 99px 6px rgba(76,201,240,1);
  box-shadow: 10px 10px 99px 6px rgba(76,201,240,1);
}

.two:hover {
  background-color: #f038ff;
  -webkit-box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
  -moz-box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
  box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
}

.three:hover {
  background-color: #b9e769;
  -webkit-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
  -moz-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
  box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
}

</style>
