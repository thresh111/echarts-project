<template>
  <div>
    <h2>产品类别</h2>
    <div class="chart" id="fourChart"></div>
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
        url: "/four/data",
      });
      console.log(data.data.chartData.chartsData);
    }
    onMounted(() => {
      // 调用请求
      getState().then(() => {
        let myChart = $echarts.init(document.getElementById("fourChart"));

        myChart.setOption({
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              label: {
                backgroundColor: "#6a7985",
              },
            },
          },
          xAxis: {
            type: "category",
            data: data.data.chartData.chartsData.day,
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
          yAxis: {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },

          series: [
            {
              name: "服饰",
              type: "bar",
              smooth: true,

              showSymbol: false,
              stack: "total",
              data: data.data.chartData.chartsData.num.Clothes,
            },
            {
              name: "数码",
              type: "bar",
              stack: "total",

              data: data.data.chartData.chartsData.num.Chemicals,
            },
            {
              name: "家电",
              type: "bar",
              stack: "total",

              smooth: true,
              showSymbol: false,

              data: data.data.chartData.chartsData.num.Electrical,
            },
            {
              name: "家居",
              type: "bar",
              stack: "total",

              smooth: true,
              showSymbol: false,

              data: data.data.chartData.chartsData.num.digit,
            },
            {
              name: "日化",
              smooth: true,
              stack: "total",
              showSymbol: false,

              type: "bar",
              data: data.data.chartData.chartsData.num.gear,
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
