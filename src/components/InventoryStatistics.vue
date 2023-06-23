<template>
  <div>
    <h2>库存统计</h2>
    <div class="chart" id="threeChart"></div>
  </div>
</template>

<script>
import { inject, onMounted, reactive } from "vue";

export default {
  setup() {
    let $echarts = inject("echarts");
    let $axios = inject("axios");
    let data = reactive({});

    async function getState() {
      data = await $axios({
        url: "/three/data",
      });
      console.log(data.data.chartData.chartsData);
    }
    onMounted(() => {
      // 调用请求
      getState().then(() => {
        let myChart = $echarts.init(document.getElementById("threeChart"));

        myChart.setOption({
          tooltip: {
            trigger: "item",
          },
          legend: {
            orient: "vertical",
            left: "left",
          },
          series: [
            {
              name: "Access From",
              type: "pie",
              radius: "50%",
              data: data.data.chartData.chartsData,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          ],
        });
      });
    });
    return {
      getState,
      data,
    };
  },
};
</script>

<style lang="less" scoped>
.chart {
  height: 4.5rem;
  margin: 0 auto;
}
h2 {
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  font-size: 0.25rem;
  text-align: center;
}
</style>
