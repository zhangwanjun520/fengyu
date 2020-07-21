<template>
  <div>
    <!-- 会议无线回流传屏器 -->
    <div class="banner1">
      <div class="cont1">
          <div class="left">
        <img src="../assets/productionCenter/video3/img3.png" alt />
      </div>
      <div class="right">
        WPP20
        <br />视频会议无线辅流传屏器
        <p style="font-size:16px">无线分享，极致传屏体验</p>
      </div>

      </div>

    </div>

    <!-- 即插即用，一键传屏，让分享突破“线”制   -->
    <div class="introduce">
      <div class="cont2">
          <p>即插即用，一键传屏，让分享突破“线”制</p>
      <p>•自建Wi-Fi无线网络系统，无需依赖公司网络，采用5GHz 802.11ac标准，良好的抗干扰能力，保障传屏顺畅无卡顿；</p>
      <p>•通用USB接口，即插即用，无需安装任何软件或驱动，轻轻一按即可传屏分享；</p>
      <p>•摆脱有线传屏的视频接口适配困扰，更可免去电视区域与会议桌的布线连接，大大降低部署成本，打造简洁、富有科技感的会议环境。</p>
      <p>
        <span class="img">
          <img src="../assets/productionCenter/video3/img1.png" alt />
        </span>
        <span>
          <img src="../assets/productionCenter/video3/01.png" alt />
          <p>即插即用</p>
        </span>
        <span>
          <img src="../assets/productionCenter/video3/02.png" alt />
          <p>802.11ac无线网络</p>
        </span>
      </p>
      </div>

    </div>
    <!-- 低延迟高清传屏 多方分享互动 -->
    <div class="content">
      <div class="main">
        <div class="text">
          <p>
            低延迟高清传屏
            <br />多方分享互动
          </p>
          <p>• 支持1080P30帧高清传屏，低延迟，快速响应，流畅体验；</p>
          <p>• 最多支持8台设备同时连接，4台设备同时投屏，轻松开启高效快捷的协作沟通。</p>
        </div>
        <div class="imgg">
          <img src="../assets/productionCenter/video3/img2.png" alt />
        </div>
      </div>
    </div>

    <!-- 内置会议助手软实现无线会议控制 -->

    <div class="content active">
      <div class="main">
        <div class="imgg">
          <img src="../assets/productionCenter/video3/img5.png" alt />
        </div>
        <div class="text">
          <p>
            内置会议助手软件
            <br />实现无线会议控制
          </p>
          <p>WPP20不仅具备传屏功能，同时内置会议助手软件，支持本地会议录制、视讯终端设备控制、及会议控制等多种完美适配视频会议系统的功能，可轻松取代遥控器，带来更高效的会议操作体验。</p>
        </div>
      </div>
    </div>
    <!-- 双屏联动，反向控制 -->
    <div class="plan">
      <div>
        <p>双屏联动，反向控制</p>
        <p>兼容触控电视，在传屏的同时，可在触控电视上对电脑进行反向控制，实现双屏联动。</p>

        <p>
          <img src="../assets/productionCenter/video3/img4.png" alt />
        </p>
      </div>
    </div>

    <!-- 多平台支持 -->
    <div class="support">
      <div class="cont4">
         <p>多平台支持</p>
      <p>视频会议无线辅流传屏器适用于Windows和Mac OS操作系统，同时支持苹果AirPlay镜像功能，让您在会议中也可轻松分享iPhone/iPad屏幕内容，有效满足多平台互动需求。</p>
      </div>

    </div>

    <!-- 规格参数 -->
    <div class="peizhi">
      <p>规格参数</p>
      <div class="peizhi1"></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.banner1 {
  width: 100%;
  height: 550px;
  background-image: url("../assets/productionCenter/video3/banner1.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  .cont1{
    width: 900px;
    // border: 1px solid;
    margin: auto;
    div {
    float: left;
  }
  .left {
    // border: 1px solid;
    width: 400px;
    height: 500px;
    // border: 1px solid;


    img {
      width: 400px;
      margin-top: 200px ;
    }
  }
  .right {
    width: 400px;
    margin-top: 250px;
    font-size: 30px;
    color: white;
    font-weight: bold;
    line-height: 50px;
    margin-left: 50px;
  }
  }

}

// 即插即用，一键传屏，让分享突破“线”制

.introduce {
  width: 100%;
  height: 750px;
  background: url("../assets/productionCenter/video2/background1.png") center
    no-repeat;
  background-size: cover;
  .cont2{
    width: 1100px;
    margin: auto;
      p {
    width: 80%;
    margin: auto;
    color: white;
    font-size: 16px;
    line-height: 44px;
  }
  p:nth-child(1) {
    padding-top: 60px;
    padding-bottom: 60px;
    font-size: 22px;
  }
  p:last-child {
    width: 900px;

    height: 300px;
    // border: 1px solid;
    margin: auto;

    span {
      display: inline-block;
      width: 140px;
      text-align: center;
      margin-right: 20px;
      padding-bottom: 30px;
      p {
        width: 140px;
        height: 50px;
        font-size: 12px;
        color: white;
      }
      img {
        width: 80px;
      }
    }
    span:nth-child(1) {
      margin-right: 430px;
    }
    .img {
      img {
        padding-top: 50px;
        width: 500px;

        // border: 1px solid;
      }
    }
  }
  }

}
// 双屏联动，反向控制
.content {
  width: 100%;
  height: 550px;
  background: url("../assets/productionCenter/banner3.png") center no-repeat;
  background-size: cover;
  .main {
    width: 1000px;
    height: 410px;
    margin: auto;
    padding-top: 50px;
    display: flex;
    align-items: center;
  }
  div {
    width: 400px;
    height: 300px;
    margin-left: 70px;
  }
  .text {
    p {
      font-size: 16px;
      color: white;
      line-height: 40px;
    }
    p:nth-child(1) {
      font-size: 22px;
      line-height: 44px;
      margin-bottom: 20px;
    }
  }
  .imgg {
    img {
      width: 430px;
    }
  }
}
//  <!-- 内置会议助手软实现无线会议控制 -->
.active {
  width: 100%;
  background: url("../assets/productionCenter/video3/banner2.png") center
    no-repeat;
    background-size: cover;
}
// <!-- 主机与摄像机一体化设计，部署更简单 -->
.plan {
  width: 100%;
  height: 690px;
  background: url("../assets/productionCenter/banner3.png") center no-repeat;
  background-size: cover;
  // border: 1px solid;

  p {
    margin: auto;
    text-align: center;
    color: white;
    font-size: 18px;
    line-height: 60px;
  }
  p:nth-child(1) {
    padding-top: 50px;
    font-size: 26px;
    height: 40px;
  }
  p:last-child {
    padding-top: 50px;
    width: 800px;

    img {
      width: 850px;
    }
  }
}
// 多平台支持
.support {

  width: 100%;
  height: 450px;
  background: url("../assets/productionCenter/video3/img6.png") center no-repeat;
  background-size: cover;
    .cont4{
     width: 100%;
  height: 450px;
  background-color: rgba($color: black, $alpha: .3);
  }
  p {
    width: 1000px;
    margin: auto;
    color: #ffffff;
    font-weight: bold;
    line-height: 50px;
    font-size: 20px;
  }
  p:nth-child(1) {
    font-size: 30px;
    padding-top: 200px;
    line-height: 50px;

  }
}

// 规格参数
.peizhi {
  margin-bottom: 60px;
  p {
    width: 100%;
    text-align: center;
    color: #002e73;
    font-size: 26px;
    margin-top: 80px;
    margin-bottom: 50px;
    font-weight: bold;
  }
}
.peizhi1 {
  width: 62%;
  margin: auto;
  height: 600px;
  background-image: url("../assets/productionCenter/video3/peizhi.jpg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
