<template>
  <div>
    <div class="banner">
      <p>
        <img src="../assets/productionCenter/video2/mainImg.png" alt />
      </p>
      <p>VC200</p>
      <p>智能云视讯终端</p>
      <p>4K超清镜头与超大广角，会议室全景尽收眼底</p>
      <p>
        • 采用Ultra HD 4K超清镜头，支持4倍数码变焦及电子云台，搭配103°超大水平视角，全景视野尽收眼底；
        <br />• 支持1080P30帧的视频通话，支持H.265/HEVC编解码，最高可抗30%视频丢包。
      </p>
    </div>

    <!-- 6个Beamforming阵列麦克风，声音更清晰 -->
    <div class="bf">
      <div class="content">
            <p>
        <img src="../assets/productionCenter/video2/img5.png" alt />
      </p>
      <p style="font-size:22px">6个Beamforming阵列麦克风，声音更清晰</p>
      <p>•内置6个麦克风阵列，采用先进的Beamforming技术，支持定向拾音，通过智能识别与比对，使发言者声音更清晰</p>
      <p>•支持风语者专利的智能消噪技术，自动过滤会场无关噪音，使会议更专注</p>

      </div>

    </div>
    <!-- 超简约设计，一分钟完成安装部署 -->
    <div class="introduce">
      <div class="content2">
           <p>超简约设计，一分钟完成安装部署</p>
      <p>•主机、摄像机、麦克风与挂架一体化设计，可直挂电视。挂架角度灵活可调，可适配6mm~50mm厚度的电视机；</p>
      <p>• 支持PoE供电，只需2根线（HDMI线+网线）即可完成部署；</p>
      <p>• 采用安卓智能操作系统，支持触控电视，所见即所得，零学习成本。</p>
      <p>
        <span>
          <img src="../assets/productionCenter/video2/img2.png" alt />
          <p>安卓操作系统</p>
        </span>
        <span>
          <img src="../assets/productionCenter/video2/img3.png" alt />
          <p>支持触控电视</p>
        </span>
        <span class="img">
          <img src="../assets/productionCenter/video2/img1.png" alt />
        </span>
      </p>
      </div>

    </div>
    <!-- 无线化应用，会议室更整洁  -->
    <div class="banner active">
      <p style="padding-top:80px">
        <img src="../assets/productionCenter/video2/img4.png" alt style="width:700px" />
      </p>

      <p style="font-size:22px">无线化应用，会议室更整洁</p>

      <p style="font-size:16px;line-height:34px">
        •内置Wi-Fi/蓝牙，可选配WPP20视频会议无线辅流传屏器，使电视区域与会议桌之间再无需布线，大大降低会议室改造及部署成本
        <br />•可选配无线麦克风，有效扩展拾音范围
      </p>
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
.banner {
  width: 100%;
  height: 730px;
  background-image: url("../assets/productionCenter/video2/banner1.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  p {
    width: 60%;
    margin: auto;
    text-align: center;
    color: white;
    line-height: 40px;
  }
  p:nth-child(1) {
    padding-top: 150px;
    font-size: 28px;

    img {
      width: 400px;
    }
  }
  p:nth-child(2) {
    font-size: 26px;
    margin-top: 40px;
  }
  p:nth-child(3) {
    font-size: 24px;
    margin-top: 20px;
  }
  p:nth-child(4) {
    font-size: 20px;
    margin-top: 30px;
  }
  p:nth-child(5) {
    font-size: 16px;
    margin-top: 10px;
    line-height: 34px;
  }
}
// 6个Beamforming阵列麦克风，声音更清晰
.bf {
  width: 100%;
  height: 780px;
  background: url("../assets/productionCenter/video2/background2.png") center
    no-repeat;
  background-size: cover;
  .content{
    width: 1100px;
    margin: auto;
      p {
    width: 80%;
    margin: auto;
    color: white;
    font-size: 20px;
    line-height: 44px;
  }
  p:nth-child(1) {
    padding-top: 60px;
    padding-bottom: 60px;
    // border: 1px solid;
    img {
      width: 940px;
    }
  }
  }

}
// 超简约设计，一分钟完成安装部署
.introduce {
  width: 100%;
  height: 730px;
  background: url("../assets/productionCenter/video2/background1.png") center
    no-repeat;
  background-size: cover;
  .content2{
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
      // margin-right: 20px;
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
    span:nth-child(2) {
      margin-right: 150px;
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
// 无线化应用，会议室更整洁
.active {
  background: url("../assets/productionCenter/video2/background2.png");
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
  background-image: url("../assets/productionCenter/video2/guige.jpg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
