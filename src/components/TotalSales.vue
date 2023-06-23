<template>
  <div>
    <h2>销售总量</h2>
    <div class="chart" id="oneChart"></div>
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
      // console.log(xAxisData);
      // console.log(yAxisData);
    }

    async function getState() {
      data = await $axios({
        url: "/one/data",
      });
    }

    onMounted(() => {
      // 调用请求
      getState().then(() => {
        setData();
        let myChart = $echarts.init(document.getElementById("oneChart"));

        myChart.setOption({
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              label: {
                backgroundColor: "#283b56",
              },
            },
          },
          xAxis: {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
          yAxis: {
            type: "category",
            data: xAxisData,
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
          series: [
            {
              type: "bar",
              data: yAxisData,
              itemStyle: {
                normal: {
                  barBorderRadius: [0, 20, 20, 0],
                  color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: "#005eaa",
                    },
                    {
                      offset: 0.5,
                      color: "#339ca8",
                    },
                    {
                      offset: 1,
                      color: "#cda819",
                    },
                  ]),
                },
              },
            },
          ],
        });
        window.addEventListener("resize", function () {
          myChart.resize();
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
