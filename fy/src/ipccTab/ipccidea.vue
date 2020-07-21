<template>
  <div class="skill">
    <!-- IPCC  tab切换下的技术架构   -->
    <div class="skill">
      <div class="skill-content1">
        <div class="skill-content1-top">
          <div class="skill-img">
            <img src="../assets/IPCC/技术架构/组 94.png" alt />
          </div>
          <div class="skill-text">
            <p class="skill-text1">B/S业务应用层</p>
            <p class="skill-text2">客户在B/S结构（基于浏览器架构）的前端使用的业务管理软件，例如CRM、ERP以及OA等系统。</p>
          </div>
        </div>
        <div class="skill-content1-top">
          <div class="skill-texts">
            <p class="skill-text1">C/S业务应用层</p>
            <p class="skill-text2">客户在C/S结构（基于应用程序架构）的前端使用的业务管理软件，例如CRM、ERP以及OA等系统。</p>
          </div>
          <div class="skill-imgs">
            <img src="../assets/IPCC/微信图片03.png" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="skill2">
      <div class="skill-content2" style="padding-top:80px;">
        <div class="skill-content2-img">
          <img src="../assets/IPCC/技术架构/组 94(1).png" alt srcset />
          <!-- 定位的文本信息 -->
          <div class="skill-content2-text">
            <p class="skill-title1">JavaScript接口层</p>
            <p class="skill-title2">呼叫中心与B/S结构业务应用系统集成时，提供的呼叫控制、状态监控以及数据交互的接口。</p>
          </div>
        </div>
        <div class="skill-content2-img">
          <img src="../assets/IPCC/技术架构/组 94(2).png" alt srcset />
          <div class="skill-content2-text">
            <p class="skill-title1">OCX双向接口层</p>
            <p class="skill-title2">呼叫中心与B/S结构业务应用系统集成时，提供的呼叫控制、状态监控以及数据交互的接口。</p>
          </div>
        </div>
        <div class="skill-content2-img2">
          <img src="../assets/IPCC/技术架构/组 94(3).png" alt srcset />
          <div class="skill-content2-text2">
            <p class="skill-title1">CTI服务</p>
            <p class="skill-title3">客户端与通信层衔接的桥梁，所有客户端的事件、状态、以及数据都经过CTI服务层，CTI服务层的核心是ACD排队管理。</p>
          </div>
        </div>
      </div>
      <div class="skill-content2" style="padding-bottom:60px;">
        <div class="skill-content2-img2">
          <img src="../assets/IPCC/技术架构/组 94(6).png" alt srcset />
          <!-- 定位的文本信息 -->
          <div class="skill-content2-text2">
            <p class="skill-title1">数据库</p>
            <p class="skill-title3">CTI保存各种类型配置、坐席状态、设备状态、呼叫事件的数据层。</p>
          </div>
        </div>
        <div class="skill-content2-img">
          <img src="../assets/IPCC/技术架构/组 94(4).png" alt srcset />
          <div class="skill-content2-text">
            <p class="skill-title1">底层通信服务</p>
            <p class="skill-title2">呼叫控制的处理层，也是核心层，所有的呼叫处理以及事件触发，设备的原始状态都是由该层处理。</p>
          </div>
        </div>
        <div class="skill-content2-img">
          <img src="../assets/IPCC/技术架构/组 94(5).png" alt srcset />
          <div class="skill-content2-text">
            <p class="skill-title1">通信配置服务</p>
            <p class="skill-title2">基于B/S结构的配置层，主要负责对通信的坐席配置、设备配置、路由配置、呼叫流程配置以及其他特殊配置。</p>
          </div>
        </div>
      </div>
    </div>

    <!-- IPCC技术架构立即免费使用立即申请开始 -->
    <div class="use">
      <div class="use-content">
        <p class="use-info1">
          <span class="now-use">立即免费试用--</span>
          <span class="information">填写个人信息</span>
        </p>
        <!-- 信息框 -->
        <div class="inp">
          <div class="inp1">
            <div style="width: 180px;font-size: 30px;    text-align: right;
    margin-right: 16px;">
              <span class="span1" style="color:red">*</span>
              <span class="span2">联系人</span>
            </div>
            <input type="text" placeholder="请输入您的姓名" class="inp2" />
          </div>
          <div class="inp1">
            <div style="width: 180px;font-size: 30px;    text-align: right;
    margin-right: 16px;">
              <span class="span1" style="color:red">*</span>
              <span class="span2">联系电话</span>
            </div>
            <input type="text" placeholder="请输入您的联系电话" class="inp2" />
          </div>
          <div class="inp1">
            <div style="width: 180px;font-size: 30px;    text-align: right;
    margin-right: 16px;">
              <span class="span1" style="color:red">*</span>
              <span class="span2">微信号</span>
            </div>
            <input type="text" placeholder="请输入您的微信号" class="inp2" />
          </div>
          <div class="inp1">
            <div style="width: 180px;font-size: 30px;    text-align: right;
    margin-right: 16px;">
              <span class="span1" style="color:red">*</span>
              <span class="span2">公司名称</span>
            </div>
            <input type="text" placeholder="请输入您的公司名称" class="inp2" />
          </div>
        </div>
        <!-- 提交按钮 -->
        <div class="but">
          <router-link to="/" tag="button" class="submit">提交</router-link>
        </div>
      </div>
    </div>
    <!-- 技术架构的尾部 -->
    <div class="skill-last">
      <div class="skill-last-content">
        <router-link to="/solution/IPCC" tag="button" class="submit2">关于IPCC</router-link>
        <router-link to="/solution/safe" tag="button" class="submit3">安全策略</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  // components:{List}
};
</script>
<style>
.skill {
  width: 100%;
  /* height: 100vh; */
  /* border: 1px solid red; */
}

.skill-content1 {
  width: 80vw;
  height: 800px;
  /* border: 1px solid red; */
  margin: auto;
}

.skill-content1-top {
  width: 100%;
  height: 316px;
  margin: auto;
  margin-top: 54px;
  display: flex;
  justify-content: center;
}

.skill-img {
  float: left;
}

.skill-text {
  float: right;
  width: 460px;
  margin-left: 80px;
}

.skill-text1 {
  font-size: 36px;
}

.skill-text2 {
  width: 390px;
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 40px;
}

.skill-content1-top>.skill-img>img {
  width: 580px;
}

.skill-imgs {
  float: right;
}

.skill-texts {
  float: left;
  width: 460px;
  margin-right: 68px;
}

.skill-content1-top>.skill-imgs>img {
  width: 599px;
}












/* 六张图片 */

.skill2 {
  width: 100%;
  height: 1021px;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
}

.skill-content2 {
  /* width: 100%; */
  height: auto;
  margin: auto;
}

.skill-content2>div {
  float: left;
  margin-left: 17px;
  position: relative;
}

.skill-content2-img {
  width: 420px;
  height: 350px;
}

.skill-content2-img>img {
  width: 420px;
  height: 350px;

}

.skill-content2-img2 {
  width: 280px;
  height: 350px;

  margin-bottom: 50px;
}

.skill-content2-img2>img {
  width: 280px;
  height: 350px;

}

.skill-content2-text {
  position: absolute;
  width: 420px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
}

.skill-content2-text2 {
  position: absolute;
  width: 280px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
}

.skill-title1 {
  text-align: center;
  font-size: 28px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin-block-start: 0;
  margin-block-end: 0;
  padding-top: 50px;
  padding-bottom: 40px;
}

.skill-title2 {
  width: 340px;
  margin: auto;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  line-height: 40px;
  margin-block-start: 0;
  margin-block-end: 0;
  text-align: center;
}

.skill-title3 {
  line-height: 40px;
  text-align: center;
  width: 266px;
  margin: auto;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  line-height: 35px;
}

.use {
  width: 100%;
  height: 850px;
}

.use-content {
  width: 100%;
  height: 1080px;
  margin: auto;
}

.use-info1 {
  width: 600px;
  height: 108px;
  font-size: 42px;
  margin-left: 160px;
}

.now-use {
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(12, 38, 74, 1);
}

.information {
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: orange;
}

.inp {
  width: 100%;
  height: auto;
  margin: auto;
}

.inp1 {
  margin-bottom: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inp1>.span1 {
  color: red;
  font-size: 30px;
  font-weight: 500;
  padding-right: .6vw;
}

.inp1>.span2 {
  width: 120px;
  font-size: 30px;
  font-weight: 500;
}

.inp2 {
  width: 489px;
  height: 43px;
  padding-left: 20px;
  margin-left: 20px;
  font-size: 16px;
}

.submit {
  width: 583px;
  height: 98px;
  background-color: #0c264a;
  margin: auto;
  display: block;
  color: white;
  font-size: 36px;
  font-weight: 500;
  border: none;
}

.but {
  height: 108px;
  width: 100%;
}

.skill-last {
  width: 100%;
  height: 296px;
  background-image: url("../assets/IPCC/技术架构/组87.png");
  background-position: center;
}

.skill-last-content {
  width: 100%;
  height: 108px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.submit2 {
  width: 368px;
  height:98px;
  background-color: transparent;
  margin: auto;
  margin-top: 12vh;
  color: white;
  font-size: 36px;
  font-weight: 500;
  border: none;
  display: block;
  float: left;
  border: 1px solid rgba(255, 255, 255, 1);
}

.submit3 {
 width: 368px;
  height:98px;
  background-color: transparent;
  margin: auto;
  color: white;
  font-size: 36px;
  font-weight: 500;
  border: none;
  display: block;
  float: right;
  margin-top: 12vh;
  border: 1px solid rgba(255, 255, 255, 1);
}
</style>
