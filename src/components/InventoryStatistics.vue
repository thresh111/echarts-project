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
    let xAxisData = reactive([]);
    let yAxisData = reactive([]);

    function setData() {
      xAxisData = data.data.chartData.chartsData.map((item) => item.tittle);
      yAxisData = data.data.chartData.chartsData.map((item) => item.num);
    }

    async function getState() {
      data = await $axios({
        url: "/three/data",
      });
      console.log(data.data.chartData.chartsData);
    }
    onMounted(() => {
      // 调用请求
      getState().then(() => {
        setData();
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
      yAxisData,
      xAxisData,
      setData,
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
