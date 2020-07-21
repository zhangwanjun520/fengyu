<template>
  <div class="earPhone">
    <div class="con1">
      <div>
        <img src="../assets/productionCenter/earPhone2.png" alt />
      </div>
      <div class="text">
        <p>UB200NC</p>
        <p>产品特点：</p>
        <p>• 降噪式麦克风，适合大型呼叫中心长期使用；</p>
        <p>• 鹅颈管式吊杆，实现麦克风位置的精准调节；</p>
        <p>• 可调节式头条可实现佩戴的舒适性；</p>
        <p>• 进口海绵耳套，贴合皮肤</p>
      </div>
    </div>
    <!-- 详细介绍 -->
    <div class="con2">
      <p class="tit">市场定位：针对中大型呼叫中心，语音降噪，经济形话务耳机设计，可靠性高，性价比高</p>
      <p class="tit">产品描述</p>
      <p class="tit">主要技术参数</p>
      <p class="tit2">受话器</p>
      <p>• 动圈式钕铁棚磁喇叭</p>
      <p>• 外径尺寸:φ28mm</p>
      <p>• 频率响应:150HZ～6.8KHZ</p>
      <p>• 灵敏度:110±3dB(at1KHz 1mw)</p>
      <p>• 阻抗:150Ω±20%</p>
      <p>• 失真度:<3%</p>
      <p>• 额定输入功率:30mW</p>
      <p>• 最大承受功率:50mW</p>
      <p class="tit2">麦克风</p>
      <p>• 方向性:单指向</p>
      <p>• 尺寸:φ6*2.7mm</p>
      <p>• 频率范围:50HZ～3.0kHZ</p>
      <p>• 灵敏度:-38±3dB</p>
      <p>• 阻抗:2.2k ohm</p>
      <p>• 工作电压:3.0V</p>
      <p>• 电流:100uA～400uA</p>
      <p>• 耐压范围:1.0～10.0V</p>

      <p>• 频响在300HZ以下灵敏度按一定斜率衰减，声音听起来不发闷；</p>
      <p>•频响在300HZ～1KHZ间比较平坦，1KHZ～2KHZ间灵敏度小幅度变小，2KHZ～3KHZ间灵敏度小幅度变大，根据频响曲线理论人耳在中频比较敏感，因此我们的频响曲线在300HZ～6.8KHZ间设计，声音听起来饱满柔和不失真；</p>
      <p>• 频响曲线在6.8KHZ以上灵敏度按一定斜率衰减，使得产品在不同交换机或其他设备中使用不会产生高频啸叫音；</p>
      <p>注：频响曲线在常温 25℃，相对湿度在70%，1个大气压下测得。</p>
      <p class="tit2">优贝达耳机设计特点</p>
      <p>• 抗噪功能，能够降低周围声音对您的干扰，凸显您的声音，提高通话质量；</p>
      <p>• 音质清晰，我们采用高清钕铁棚磁喇叭，针对语音频率设计，提高清晰度；</p>
      <p>• 耳机采用了大耳盘设计，具有更好的服贴感，同时可避免耳朵的压迫感。</p>
      <p>• 麦克风330度旋转，精准的定位在最适合的位置，保证通话音质；</p>
      <p>• 超轻设计，耳机设计小于50g，轻便使用，适合呼叫中心长时间佩戴；</p>
      <p>• 符合人体工程学，音质清晰，保护您的听力，从而让您感受到佩戴的舒服性，呵护话务员的健康；</p>
      <p>• 适合于各种话务场合，大型呼叫中心、办公室应用、VoIP应用等应用。</p>
      <p class="tit2">售后服务：</p>
      <p>• 质保时间2年</p>
      <p>• 我们提供非人为损坏免费质保</p>
      <p>• 7*24小时电话远程支持</p>
      <p>• 大中型城市免费上门服务</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.con1 {
  width: 900px;
  // border: 1px solid;
  height: 500px;
  margin: auto;
  div {
    float: left;
    width: 400px;
    height: 450px;
    // border: 1px solid;
    margin-left: 30px;
    margin-top: 180px;
  }
  div:nth-child(1) {
    img {
      width: 400px;
    }
  }
}
.text {
  p {
    width: 80%;
    margin: auto;
    color: #666666;
    font-size: 14px;
    line-height: 30px;
  }
  p:nth-child(1) {
    font-size: 18px;
    color: #3988fc;
    margin-top: 80px;
    margin-bottom: 40px;
  }
  p:nth-child(2) {
    font-size: 16px;
    color: #3988fc;
    margin-bottom: 10px;
  }
}
.con2 {
  width: 700px;
  // height: 1000px;
  margin: auto;
  p {
    color: #666666;
    font-size: 13px;
    line-height: 30px;
  }
  .tit {
    font-size: 16px;
    color: #3988fc;
    // margin-top: 30px;
  }
  .tit2 {
    font-size: 14px;
    color: #3988fc;
    margin-top: 50px;
  }
}
</style>
