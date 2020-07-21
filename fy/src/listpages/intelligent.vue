<template>
  <div class="intelligent">
    <div class="header">

      <div class="feng">
        <div> <img src="../assets/intelligent/presen.png" alt="" style="width:303.84px;"></div>

        <h3 class="AI">AI智能通行系统</h3>
      </div>
    </div>
    <div class="system">
      <h3>系统概述</h3>
      <div class="biometrics">
        <div class="leftText">
          <div>生物识别是趋势</div>
          <div style="font-size:16px;">
            <div style="width: 578px;margin-bottom:16px;">
              <span style="color:#000000;font-size:19px;">以人为本：</span>身份认证更便捷、提供更个性化、 便利化和安全的服务，解放使用者和管理者；<br/>
            </div>
            <div style="width: 578px;margin-bottom:16px;">
              <span style="color:#000000;font-size:19px;">智慧连接：</span>以生物特征成为钥匙，开启人与设备连接、 人与系统连接、人与信息资源连接、人与 服务连接、人与人连接；<br/>
            </div>
            <div style="width: 578px;margin-bottom:16px;">
              <span style="color:#000000;font-size:19px;"> 服务升级：</span>促进管理精细化、服务精益化，以无处不在的智慧感知服务，助力智慧政府、智慧社区、智慧楼宇建设， 提高管理信息化水平。</div>
          </div>
        </div>
        <div class="rightImg">
          <img src="../assets/intelligent/man.jpeg" alt="">
        </div>
      </div>
    </div>
    <div class="scenarios">
      <h3>应用场景</h3>
      <div class="ban">
        <div class="faceSwiping">
          <div class="lary">
            <div style="width:152.06px;overflow: hidden;"><img src="../assets/intelligent/img1.jpeg" alt="" style="width:152.06px;"></div>
            <div>办公室门禁</div>
            <div>办公室门禁刷脸进出防止盗窃卡和非法入侵</div>
          </div>
          <div class="lary">
            <div style="width:152.06px;overflow: hidden;"><img src="../assets/intelligent/img2.jpeg" alt="" style="width:152.06px;"></div>
            <div>园区/写字楼进出</div>
            <div>-电梯出入口或关键区域实现刷脸进出</div>
          </div>
          <div class="lary">
            <div style="width:152.06px;overflow: hidden;"><img src="../assets/intelligent/img3.jpg" alt="" style="width:198.14px;"></div>
            <div> 机场安检</div>
            <div>乘客身份核验，闸机有序分流，贵宾室会员识别服务</div>
          </div>
          <div class="lary">
            <div style="width:152.06px;overflow: hidden;"><img src="../assets/intelligent/img4.png" alt="" style="width:152.06px;"></div>
            <div>高铁/地铁/客运站</div>
            <div>人脸识别快速通行，安防大数据身份核验</div>
          </div>
        </div>
        <div class="faceSwiping" style="margin:30px 0 60px 0;">
          <div class="lary">
            <div style="width:152.06px;height:14vh;overflow: hidden;"><img src="../assets/intelligent/img5.jpg" alt="" style="width:198.14px;"></div>
            <div>景区/博物馆</div>
            <div>网络预约、电子门票刷脸测温通行</div>
          </div>
          <div class="lary">
            <div style="width:147.45px;height:14vh;overflow: hidden;"><img src="../assets/intelligent/img6.jpg" alt="" style="width:147.45px;"></div>
            <div>医院、学校分权限差异化通行管理</div>
            <div>保障有序的就医学习秩序</div>
          </div>
          <div class="lary">
            <div style="width:152.06px;overflow: hidden;"><img src="../assets/intelligent/img7.png" alt="" style="width:152.06px;"></div>
            <div style="margin:10px auto;">视频安全监控</div>
            <div>-访客身份安全识别、人脸实时跟踪，外卖、快递、推销人员限制区域管理</div>
          </div>
          <div class="lary">
            <div style="width:168.95px;overflow: hidden;"><img src="../assets/intelligent/img8.png" alt="" style="width:168.95px;"></div>
            <div style="margin-top:0;margint-buttom:20px;">重点区域权限通行管理</div>
            <div>多级别多角色验证通行非法入侵告警</div>
          </div>
        </div>
      </div>
    </div>
    <div class="identification">
      <h3>识别流程</h3>
      <div><img src="../assets/intelligent/shibie.png" alt=""></div>
    </div>
    <div class="hardware">
      <ul class="uls">
        <li v-for="(item,index) in list" :key='index' :class="activeIndex==index?'active':''" class="activest" @click="tab(index)">{{item.item}}</li>
      </ul>
      <div class="intes" v-show="activeIndex==0">
        <div class="intelligents">
          <div class="leftTexts">
            <div>
              <p style="width:543.44px;font-size: 21px;">公司已经形成一整套工业级的智能控制系统。</p>
              <p style="width:543.44px;font-size: 21px;">无论从基础功能线路开发，还是NC\PLC及其他嵌入式控制应用都有着丰富的经验，在各个硬件平台的开发实施中具备综合的开发配套能力</p>

            </div>
          </div>
          <div class="rightImgs">
            <img src="../assets/intelligent/phone.png" alt="">
          </div>
        </div>
        <div class="yuan">
          <ul>
            <li><img src="../assets/intelligent/tong.png" alt="">
            </li>
            <li><img src="../assets/intelligent/jian.png" alt=""></li>
            <li><img src="../assets/intelligent/kong.png" alt=""></li>
            <li><img src="../assets/intelligent/bei.png" alt=""></li>
          </ul>
        </div>
      </div>
      <div class="productForm" v-show="activeIndex==1">
        <div> <img src="../assets/intelligent/arrow.png" alt=""></div>
      </div>
      <div class="identifications" v-show="activeIndex==2">
        <div class="leftImg">
          <img src="../assets/intelligent/girl.png" alt="">
        </div>
        <div class="rightText">
          <div class="applicable">
            <span>适用场景：</span>
            <p>可用于人脸门禁、人脸闸机控制终端等多场景</p>
            <span>性能参数：</span>
            <p style="width:663px;line-height:36px;">
              <strong style="font-size:18px;font-weight:500;">CPU：</strong>主控 RK3399 6核1.8GHz； 内置存储器：RAM 4GB/Flash 16GB； 显示屏：8寸, 分辨率800 *1280，五点触摸屏； 操作系统：Android 7.1； 硬件功能：5G全网通/WIFI /蓝牙/补光灯； 摄像头：双目，一个200w，一个100w； 红外人体感应：支持，红外人体感应； NFC（非接触式读卡器）：ISO 14443 A / B 型，Mifare®，符合ISO 18092标准；
            </p>
          </div>
        </div>
      </div>
      <div class="buildingGate" v-show="activeIndex==3">
        <div class="leftImgs">
          <img src="../assets/intelligent/wu.jpeg" alt="">
          <img src="../assets/intelligent/hua.jpeg" alt="">
        </div>
        <div class="rightTexts">
          <div class="overlayScene">
            <div>
              <strong style="font-size:20px;color:#000000;">覆盖场景：</strong> 楼宇通行管理</div>
            <div>
              <strong style="font-size:20px;color:#000000;">设备参数：</strong>
            </div>
            <strong style="font-size:16px;color:#000000;font-weight:500;">产品尺寸：</strong> 1200*300*1000mm<br/>
            <strong style="font-size:16px;color:#000000;font-weight:500;"> 材质：</strong>304#不锈钢。厚度1.2MM<br/>
            <strong style="font-size:16px;color:#000000;font-weight:500;">通道宽：</strong>550mm<br/>
            <strong style="font-size:16px;color:#000000;font-weight:500;">电源输入：</strong>AC220V，50Hz<br/>
            <strong style="font-size:16px;color:#000000;font-weight:500;">驱动电压：</strong>DC24V 5A<br/>
            <strong style="font-size:16px;color:#000000;font-weight:500;">驱动方式：</strong>直流电机<br/>
            <strong style="font-size:16px;color:#000000;font-weight:500;">通行方向：</strong>双向<br/>
            <strong style="font-size:16px;color:#000000;font-weight:500;"> 开闸时间：</strong>0.2S<br/>
            <strong style="font-size:16px;color:#000000;font-weight:500;"> 通行速度：</strong>35人/分<br/>
            <strong style="font-size:16px;color:#000000;font-weight:500;"> 读卡类型:</strong> M1 卡、CPU卡（只能读FM1208-10型号的CPU卡）<br/>
            <strong style="font-size:16px;color:#000000;font-weight:500;"> 工作指示：</strong>语音播报、指示灯<br/>
            <strong style="font-size:16px;color:#000000;font-weight:500;"> 工作环境：</strong>室内、室外<br/>
            <strong style="font-size:16px;color:#000000;font-weight:500;"> 工作温度：</strong>-15℃～60℃<br/>
            <strong style="font-size:16px;color:#000000;font-weight:500;"> 通讯方式：</strong>TCP/IP<br/>
            <strong style="font-size:16px;color:#000000;font-weight:500;"> 可外接设备：</strong>身份证阅读器、扫码枪、LED控制卡、人脸模块、指纹模块（需定制）<br/> 亚克力羽翼有大红色, 蓝色 ，透明色可选。软翼材质可定制（需定制）<br/>

          </div>
        </div>
      </div>
    </div>
    <div class="cover">
      <h3>覆盖场景</h3>
      <div class="topCover">
        <ul>
          <li><img src="../assets/intelligent/wu.jpeg" alt=""></li>
          <li>
            <div class="appliance" style="padding-left:30px;">应用一:楼宇闸机</div>
            <div style="padding-left:30px;font-size: 14px;"> 1.高效效保障办公区域的人员办公时间的进出<br/>
              2.充分掌控人员健康状况便于发生疫情时积极有效联动<br/>
              3.方便与办公OA系统充分对接有效掌控考勤状况<br/>
              4.防止非请自入推销人员影响办公秩序</div>
          </li>
          <li>
            <div class="appliance" style="padding-left:30px;">应用二:高铁/地铁通行</div>
            <div style="padding-left:30px;font-size: 14px;"> 1、方便高速使大流量人群通过，高效进行人员防疫检测<br/>
              2、有效与车票系统形成互相核对互相补充的数据管理系统<br/>
              3、有效跟踪人员流动，为安全、防疫、防控有效对接相关数据<br/>
              4、便于后续大数据统计分析</div>

          </li>
          <li>
            <img src="../assets/intelligent/duo.png" alt="">
          </li>
          <li> <img src="../assets/intelligent/zhao.png" alt=""></li>
          <li>
            <div class="appliance" style="padding-left:30px;">应用三:机场贵宾室</div>
            <div style="padding-left:30px;font-size: 14px;"> 1、使用设备：人脸识别摄像头<br/>
              2、主要功能：<br/>
              即时掌握VIP要客资料，提供人性化的要客服务<br/>
              一键倒查，随时发现乘客位置，提醒乘客登机信息</div>

          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      list: [
        {
          index: 0,
          item: '智能控制'
        },
        {
          index: 1,
          item: '产品形态'
        },
        {
          index: 2,
          item: '识别终端'
        },
        {
          index: 3,
          item: '楼宇闸机'
        }
      ],
      activeIndex: 0
    }
  },
  components: {

  },
  methods: {
    tab(index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.intelligent {
  width: 100%;
  height: auto;
  background: white;
  overflow: hidden;
  position: relative;
  top: 0px;
  bottom: 0px;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header {
  overflow: hidden;
  width: 100%;
  height: 552px;
  background-image: url("../assets/intelligent/skyblue.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
}

.feng {
  width: 50%;
  height: 40vh;
  position: absolute;
  left: 50%;
  margin-left: -25vw;
  top: 50%;
  margin-top:-20vh ;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}

.AI {
  color: white;
  font-size: 56px;
}

.system {
  width: 100%;
  height: auto;
}

.system>h3,
.scenarios>h3,
.identification>h3,
.cover>h3 {
  font-size: 40px;
  font-family: Source Han Sans CN;
  line-height: 15vh;
  text-align: center;
  font-weight: 500;
}

.biometrics,
.intelligents,
.identifications,
.buildingGate {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.leftText>div:nth-child(1) {
  font-size: 26px;
  margin-bottom: 16px;
}

.leftText>div:nth-child(2) {
  color: #999999;
  line-height: 30px;
}

.rightImg,
.rightImgs {
  padding-left: 60px;
}

.scenarios {
  width: 100%;
  background: #F7F8FA;
}

.ban {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.faceSwiping {
  display: flex;
  margin: 10px 0;
}

.lary {
  width: 211.68px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 40px;
  background: white;
}

.lary>div:nth-child(2) {
  font-size: 17px;
  margin: 20px auto;
  padding: 0 10px;
}

.lary>div:nth-child(3) {
  font-size: 14px;
  width: 80%;
  line-height: 24px;
  color: #999999;
}

.identification {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hardware {
  width: 100%;
  height: auto;
}

.uls {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.uls>li:nth-child(1) {
  margin-left: -90px;
}

.uls>li {
  list-style: none;
  font-size: 26px;
  line-height: 80px;
  margin-left: 200px;
}

.activest {
  border-bottom: 2px solid white;
}

.active {
  color: rgba(26, 156, 252, 1);
  border-bottom: 2px solid rgba(26, 156, 252, 1)!important;
  z-index: 999;
}

.leftTexts>div {
  line-height: 36px;
  color: #000000;
  font-size: 20px;
}

.intelligents {
  height: 580px;
  margin-top: 50px;
}

.intes {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.dis {
  display: none;
}

.dist {
  display: block;
}

.yuan {
  width: 70%;
  display: flex;
  justify-content: center;
}

.yuan>ul {
  width: 70%;
  display: flex;
  position: relative;
  top: -340px;
}

.yuan>ul>li {
  width: 40%;
  list-style: none;
  position: absolute;
}

.yuan>ul>li:nth-child(1) {
  margin-left: -80px;
}

.yuan>ul>li:nth-child(2) {
  margin-left: 140px;
}

.yuan>ul>li:nth-child(3) {
  margin-left: 360px;
}

.yuan>ul>li:nth-child(4) {
  margin-left: 580px;
}

.yuan>ul>li>img {
  width: 90%;
}

.productForm {
  width: 100%;
  height: auto;
  margin-top: 50px;
}

.productForm>div {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.productForm>div>img {
  width: 850.75px;
}

.identifications,
.buildingGate {
  margin-top: 50px;
}

.leftImg>img {
  width: 340.3px;
}

.rightText {
  padding-top: 50px;
  padding-left: 80px;
}

.applicable>span {
  font-size: 26px;
  font-weight: 600;
}

.leftImgs {
  width: 500px;
}

.rightTexts {
  margin-left: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.leftImgs>img {
  width: 500px;
}

.overlayScene {
  line-height: 36px;
}

.overlayScene {
  color: #999999;
  font-size: 14px;
}

.overlayScene>div:nth-child(2) {
  margin: 5px 0;
}

.cover {
  width: 100%;
  height: auto;
  margin-bottom: 30px;
}

.topCover {
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
}

.topCover ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.topCover>ul>li {
  width: 50%;
  list-style: none;
}

.topCover>ul>li>img {
  width: 100%;
  display: block;
}

.topCover ul>li:nth-child(2),
.topCover ul>li:nth-child(3),
.topCover ul>li:nth-child(6) {
  /* width: 587.67px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #3988FC;
  color: #fff;
  line-height: 30px;
}

.appliance {
  font-size: 22px;
  height: 50px;
  line-height: 50px;
}
</style>
