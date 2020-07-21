<template>
  <div id="app">
    <HeadList></HeadList>
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
import HeadList from "./components/headList";
import bottom from "./components/bottom";
export default {
  components: { HeadList, bottom }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
  font-size: 14px;
  font-family: 微软雅黑, "Microsoft YaHei", Arial, Verdana;
  /* overflow-x: hidden; */
  position: relative;
}

#app {
  width: 100%;
  height: 100%;

}


#app {
  min-width: 1200px;
}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
  color: white;
}
</style>
