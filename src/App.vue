<template>
  <router-view />
</template>

<script>
// 1.引用proivde
import { provide } from "vue";
// 2.引用echarts
import * as echarts from "echarts";

import axios from "axios";
// 设置基准路径
axios.defaults.baseURL = "http://localhost:8888";

export default {
  setup() {
    // provide("名字","传递的内容")
    provide("echarts", echarts);
    provide("axios", axios);
  },
};
</script>
<style lang="less">
body {
  background: url(../src/assets/bg.jpg) top center no-repeat;
}
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  //border-box 告诉浏览器去理解你设置的边框和内边距的值是包含在width内的。
}
</style>
