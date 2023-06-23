<template>
  <div>
    <header>
      <h1>大数据可视化</h1>
    </header>
    <section class="container">
      <!-- 左容器 -->
      <div class="left-container">
        <ItemPage>
          <TotalSales></TotalSales>
        </ItemPage>
        <ItemPage>
          <ProMonthSales></ProMonthSales>
        </ItemPage>
      </div>
      <!-- 中容器 -->
      <div class="center-container">
        <h2>地图展示</h2>
        <MapGaode />
      </div>
      <!-- 右容器 -->
      <div class="right-container">
        <ItemPage>
          <InventoryStatistics></InventoryStatistics>
        </ItemPage>
        <ItemPage>
          <ProCategory></ProCategory>
        </ItemPage>
      </div>
    </section>
  </div>
</template>
<script>
import ItemPage from "@/components/ItemPage.vue";
import TotalSales from "@/components/TotalSales.vue";
import ProMonthSales from "@/components/ProMonthSales.vue";
import InventoryStatistics from "@/components/InventoryStatistics.vue";
import ProCategory from "@/components/ProCategory.vue";
import MapGaode from "./MapGaode/MapGaode.vue";
import { inject } from "vue";

export default {
  components: {
    ItemPage,
    TotalSales,
    ProMonthSales,
    InventoryStatistics,
    ProCategory,
    MapGaode,
  },
  setup() {
    // 测试使用echarts
    let $echarts = inject("echarts");
    let $axios = inject("axios");

    console.log($echarts, $axios);
  },
};
</script>
<style lang="less">
header {
  height: 1rem;
  width: 100%;
  background: rgba(0, 0, 255, 0.2);
  h1 {
    font-size: 0.375rem;
    text-align: center;
    color: #fff;
    line-height: 1rem;
  }
}
.container {
  // 最大最小宽度
  min-width: 1200px;
  max-width: 1980px;
  margin: 0 auto;
  // border: 1px solid red;
  padding: 0.125rem 0.125rem 0;
  // background-color: #ccc;
  display: flex;
}
.left-container,
.right-container {
  flex: 3;
}
.center-container {
  flex: 5;
  height: 10.5rem;
  border: 1px solid blue;
  padding: 0.125rem;
  margin: 0.25rem;
  h2 {
    font-size: 0.375rem;
    color: #fff;
    line-height: 0.6rem;
    text-align: center;
  }
}
</style>
