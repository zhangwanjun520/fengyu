<template>
  <div class="ipcc">
    <div class="ipcc-content1">

      <div class="ipcc-title">
        <p class="ipcc-title1">IPCC</p>
        <div class="line"></div>
        <p class="ipcc-title2">
          以IP技术和IP语音为主要应用技术的呼叫中心<br/>构建方式，利用IP传输网来传输与交换语音、<br/>图像和文本等信息。
        </p>

      </div>
    </div>
    <!-- tab切换导航栏 -->
      <div class="ipcc-tab">
      <router-link to='/solution/IPCC' tag="div" class="ipcc-tab1">IPCC</router-link>
      <router-link to='/solution/ipccidea' tag="div" class="ipcc-tab1">技术架构</router-link>
      <router-link to='/solution/safe' tag="div" class="ipcc-tab1">安全策略</router-link>
    </div>

    <router-view></router-view>
      <!-- <Ipcc></Ipcc>  -->

  </div>
</template>

<script>

import Ipcc from '../ipccTab/resolve'
export default {
  components: { Ipcc }
};
</script>
<style lang="scss" scoped>
.ipcc {
  background: white;
  overflow: hidden;
  position: relative;
  top: 0px;
  bottom: 0px;
  left: 0;
  right: 0;
  z-index: 99;
}

.ipcc-content1 {
  overflow: hidden;
  width: 100%;
  height: 552px;
  background-image: url("../assets/IPCC/banner.png");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-end;
}

.ipcc-title {
  width: 485px!important;
  height: 250px;
  /* margin-left: 700px; */
  margin-top: 200px;
  background-color: rgba(0, 0, 0, .2);
  margin-right: 500px;
}

.ipcc-title1 {
  font-size: 56px;
  font-family: Source Han Sans CN;
  font-weight: 800;
  color: rgba(255, 255, 255, 1);
  text-indent: 0.5em;
  padding-top: 20px;
  margin-block-start: 0;
}

.ipcc-title2 {
  width: 485px!important;
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-left: 3vh;
  line-height: 36px;
}

.ipcc-tab {
  width: 1100px;
  height: 141px;
  margin: auto;
  border-bottom: 3px dotted gray;
  font-size: 31px;
}

.ipcc-tab :hover {
  color: orange;
}

.ipcc-tab1 {
  cursor: pointer;
  text-align: center;
  margin-top: 70px;
  float: left;
  width: 200px;
  height: 8vh;
  line-height: 8vh;
  font-weight: 500;
}

.line {
  width: 30px;
  margin-left: 28px;
  margin-top: -60px;
  border: 3px solid orange;
}

.ipcc2 {
  width: 1213px;
  height: 500;
  margin: 0 auto;
}

.ipcc-content2 {
  width: auto;
  margin: auto;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.ipcc-content2-text {
  margin-top: 8vh;
  display: inline-block;
}
</style>
