<template>
  <div>
    <!-- 智慧社区通行类闸机详情 -->
    <!-- 辊型闸机 -->
    <div class="box" v-if="ind==1">
      <div class="cont">
        <p>
          <img src="../assets/productionCenter/passage/img1.png" alt />
        </p>
        <p>产品介绍</p>
        <p>三辊闸是经过我司多年精心开发、研制、生产的智能化通道管理设备，采用304不锈钢冲压成型，造型美观大方、防锈、耐用。该设备将机械、电子、微处理器控制及各种身份识别技术有机地融为一体，可兼容条码卡、IC卡等读写设备集成在本设备上，为出入人员提供有序文明的通行方式，杜绝非法人员进出，并在紧急情况下快速控制落杆或收杆。主要应用于住宅小区、企事业单位、学校、政府机关、工厂、景区、休闲娱乐等场所的人行专用出入口通道。</p>
        <p>规格参数</p>
        <p style="text-align:left;margin:auto;margin-bottom:50px">
          产品名称：桥式三辊闸
          <br />产品尺寸：1200*280*980mm
          <br />材质：304#不锈钢，顶盖厚度1.3MM.侧身厚度1.2MM
          <br />内部结构：钢材框架结构
          <br />辊长：510mm
          <br />电源电压：AC220V，50Hz
          <br />驱动电压：DC24V 5A
          <br />通行方向：支持单向和双向
          <br />开闸时间：0.2S
          <br />通行速度：35人/分
          <br />读卡类型:M1 卡、CPU卡（只能读FM1208-10型号的CPU卡）
          <br />工作指示：语音播报、指示灯
          <br />工作环境：室内、室外(需加阴棚)
          <br />工作温度：-15℃～60℃
          <br />通讯方式：TCP/IP
          <br />可外接设备：身份证阅读器、扫码枪、LED控制卡、人脸模块、指纹模块（需定制）
        </p>
      </div>
    </div>

    <!-- 翼型闸机 -->
    <div class="box" v-if="ind==2">
      <div class="cont">
        <p>
          <img src="../assets/productionCenter/passage/img5.png" alt />
        </p>
        <p>产品介绍</p>
        <p>智能翼闸是经过我司多年精心开发、研制、生产的智能化通道管理设备，主要是针对人员通道进行智能管理的高科技产品。该设备将机械、电子、微处理器控制及各种身份识别技术有机地融为一体，方便兼容IC卡、条码卡、指纹、人脸等识别设备的使用，通过选配各种身份识别系统设备和采用的安全保护装置、报警装置、方向指示、，实现对通道智能化控制与管理等。主要应用于住宅小区、企事业单位、学校、政府机关、工厂、景区、休闲娱乐等场所的人行专用出入口通道。</p>
        <p>规格参数</p>
        <p style="text-align:left;margin:auto;margin-bottom:50px">
          产品名称：桥式翼闸
          <br />产品尺寸：1200*300*1000mm
          <br />材质：304#不锈钢。厚度1.2MM
          <br />内部结构：钢材框架结构
          <br />通道宽：550mm
          <br />电源输入：AC220V，50Hz
          <br />驱动电压：DC24V 5A
          <br />驱动方式：直流电机
          <br />通行方向：双向
          <br />开闸时间：0.2S
          <br />通行速度：35人/分
          <br />读卡类型:M1 卡、CPU卡（只能读FM1208-10型号的CPU卡）
          <br />工作指示：语音播报、指示灯
          <br />工作环境：室内、室外
          <br />工作温度：-15℃～60℃
          <br />通讯方式：TCP/IP
          <br />可外接设备：身份证阅读器、扫码枪、LED控制卡、人脸模块、指纹模块（需定制）
          <br />
        </p>
      </div>
    </div>
    <!-- 摆型闸机 -->
    <div class="box" v-if="ind==3">
      <div class="cont">
        <p>
          <img src="../assets/productionCenter/passage/img3.png" alt />
        </p>
        <p>产品介绍</p>
        <p>速通门是经过我司多年精心开发、研制、生产的智能化通道管理设备，主要是针对人员通道进行智能管理的高科技产品。该设备将机械、电子、微处理器控制及各种身份识别技术有机地融为一体，方便兼容IC卡、条码卡、指纹、人脸等识别设备的使用，通过选配各种身份识别系统设备和采用的安全保护装置、报警装置、方向指示、，实现对通道智能化控制与管理等。主要应用于住宅小区、企事业单位、学校、政府机关、工厂、景区、休闲娱乐等场所的人行专用出入口通道。</p>
        <p>规格参数</p>
        <p style="text-align:left;margin:auto;margin-bottom:50px">
          产品名称：小摆闸
          <br />产品尺寸：1000*220*880mm
          <br />材质：304#不锈钢
          <br />内部结构：钢材框架结构
          <br />通道宽：550mm
          <br />电源输入：AC220V，50Hz
          <br />驱动电压：DC24V 5A
          <br />驱动方式：直流电机
          <br />通行方向：双向
          <br />开闸时间：0.1S
          <br />通行速度：40人/分
          <br />读卡类型:M1 卡、CPU卡（只能读FM1208-10型号的CPU卡）
          <br />工作指示：语音播报、指示灯
          <br />工作环境：室内、室外
          <br />工作温度：-15℃～60℃
          <br />通讯方式：TCP/IP
          <br />可外接设备：身份证阅读器、扫码枪、LED控制卡、人脸模块、指纹模块（需定制）
        </p>
      </div>
    </div>

    <!-- 十字玄门 -->
    <div class="box" v-if="ind==4">
      <div class="cont">
        <p>
          <img src="../assets/productionCenter/passage/img4.png" alt />
        </p>
        <p>产品介绍</p>
        <p>
          采用人工转动闸杆与自动复位，自动锁定及解锁机构相结合的传动系统，使得十字转门的运行更加安全，可靠，便利;整个系统运行平稳、噪音小;具有多种工作模式可供选择，既可双向读卡限流，也可一边读卡，另一方向禁行;一边读卡，另一方向自由通行，且闸机工作模式可由用户通过内置轻触按钮进行设定;具有标准的对外电气接口，可与各种读写设备对接，便于系统集成，并可通过管理计算机实现远程控制与管理
          具有远距离操作开门功能，以满足用户的特殊需求及消防安全要求
          可自动对通行方向的通行人数进行统计，可选加装LED屏显示额外信息
          具有明确的通行指示功能，以直观的LED方式或背光源给通行者指示通行或禁止通行状态
        </p>
        <p>规格参数</p>
        <p style="text-align:left;margin:auto;margin-bottom:50px">
          产品名称：转闸单机芯
          材质：304 不锈钢;
          <br />尺寸: 1630x1500x2310mm;
          <br />解锁时间: 0.2s ;
          <br />通行速度: 35 人 /分;
          <br />通道宽:650mm;
          <br />输入电压 :100V~240V;
          <br />驱动电压: 24v;
          <br />环境温度: -25~+70;
          <br />功率:30w;
          <br />开闸信号输入: 12v 干接点
          <br />毛重: 310kg
          <br />包装尺寸: 2210x1680x1320mm
          <br />
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 内容显示的标识
      ind: ""
    };
  },
  methods: {},
  created() {
    this.ind = this.$route.query.id;
  }
};
</script>
<style lang="scss" scoped>
.cont {
  width: 700px;
  margin: auto;
  p {
    text-align: center;
    color: #666666;
    line-height: 40px;
  }
  p:nth-child(1) {
    margin-top: 170px;
    img {
      width: 400px;
    }
  }
  p:nth-child(2) {
    margin-top: 70px;

    color: #071d3c;
    font-size: 20px;
  }
  p:nth-child(4) {
    margin-top: 70px;
    margin-bottom: 40px;
    color: #071d3c;
    font-size: 20px;
  }
}
</style>
