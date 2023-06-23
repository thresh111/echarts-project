<template>
  <div id="container"></div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
import { capitals } from "./capitals";
export default {
  mounted() {
    //DOM初始化完成进行地图初始化
    this.initMap();
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: "51c51086d7194bde1c21238932ba92ea", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [""], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          this.map = new AMap.Map("container", {
            //设置地图容器id
            viewMode: "3D", //是否为3D地图模式
            zoom: 5, //初始化地图级别
            center: [105.602725, 37.076636], //初始化地图中心点位置
          });

          for (var i = 0; i < capitals.length; i += 1) {
            var center = capitals[i].center;
            var circleMarker = new AMap.CircleMarker({
              center: center,
              radius: 10 + Math.random() * 10, //3D视图下，CircleMarker半径不要超过64px
              strokeColor: "white",
              strokeWeight: 2,
              strokeOpacity: 0.5,
              fillColor: "rgba(0,0,255,1)",
              fillOpacity: 0.5,
              zIndex: 10,
              bubble: true,
              cursor: "pointer",
              clickable: true,
            });
            circleMarker.setMap(this.map);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="less" scoped>
#container {
  padding: 0px;
  margin: 0px;
  height: 8.75rem;
}
</style>
