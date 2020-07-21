<template>
  <div class="Home">
    <div class="heaDer">

      <div class="centerTitle">
        <div class="AIX">AI智能人脸识别通行系统</div>
        <div class="biao">
         灵活应用于金融、泛安防、零售等行业场景，满足身份核验、
        </div>
        <p  class="biao">人脸考勤、闸机通行等业务需求</p>


        <div></div>
      </div>
    </div>
    <div class="hardwares">
      <div>硬件产品</div>
      <div>cla Hardware products
      </div>
    </div>
    <div class="leftFigure">
      <div class="topFigure">
        <ul>
          <li><img src="../assets/page/girl.png" alt=""></li>
          <li>
            <div>适用场景：</div>
            <div>可用于人脸门禁、人脸闸机控制终端、人脸支付等多场景</div>
            <div>硬件功能：灵活的客户信息管理、照片添加、权限下发与收回、数据统计功能，进行人脸检测、人脸识别、人脸检活等。</div>
          </li>
        </ul>
      </div>
      <div class="bottomFigure">
        <ul>
          <li>
            <div>覆盖场景：楼宇通行管理</div>
            <div class="yin">硬件功能：高效效保障办公区域的人员办公时间的进出；充分掌控人员健康状况便于发生疫情时积极有效联动；方便与办公OA系统充分对接有效掌控考勤状况；防止非请自入推销人员影响办公秩序</div>
          </li>
          <li><img src="../assets/page/gate.png" alt=""></li>
        </ul>
      </div>
    </div>
    <div class="softwareProduct">
      <div class="topProduct">
        <div>软件产品-风语者AI智能通行系统</div>
        <div>
          Software products - AI intelligent communication system of Whisperwind
        </div>
      </div>
      <div class="centerProduct">
        <div class="centerlines">
          <img src="../assets/page/tu1.png" alt="">
          <div class="centerline1">
            <div>人员信息建模</div>
            <div>员工统计、考勤次数、访客统计、访客通行次数、昨日考勤统计、今日通行、实时监控进出情况。</div>
          </div>
        </div>
        <div class="centerlines2">
          <img src="../assets/page/tu2.png" alt="">
          <div class="centerline2">
            <div>设备管理</div>
            <div> 所有楼宇的设备<br/>进行状态监控、<br/>统一管理</div>
          </div>
        </div>
        <div class="centerlines3">
          <img src="../assets/page/tu3.png" alt="">
          <div class="centerline3">
            <div>记录查询与统计</div>
            <div>正常进出门禁<br/>记录查询<br/>异常记录查询</div>
          </div>
        </div>
      </div>
      <div class="bottomProduct">
        <a @click="login">立即使用</a>

      </div>
    </div>
    <div class="hardwares" style="margin-bottom:5.21vh;">
      <div>应用场景</div>
      <div>Application scenario</div>
    </div>
    <div class="applicationScenario">
      <div class="one-scenario">
        <img src="../assets/page/ji.png" alt="">
        <div class="one-swiping">
          <div>刷脸闸机通行</div>
          <div>将人脸识别功能集成到闸机中，快速录入人脸信息，用户刷脸通行，可以解决用户忘带工卡、被盗卡等问题，实现企业、商业、住宅等多场景门禁通行</div>
        </div>
      </div>
      <div class="one-scenario2">
        <img src="../assets/page/face.png" alt="">
        <div class="one-swiping2">
          <div>智慧人脸考勤</div>
          <div>提供移动考勤、摄像头无感知考勤、一体机考勤三种方案，确保签到人员身份识别准确性，实现1秒内快速认证，有效防止代打卡等作弊行为，增强企业信息化员工管理</div>
        </div>
      </div>
      <div class="one-scenario3">
        <img src="../assets/page/she.png" alt="">
        <div class="one-swiping3">
          <div>智能视频监控</div>
          <div>结合人脸识别技术，在工厂、学校、商场、餐厅等人流密集的场所进行监控，对人流进行自动统计、识别和追踪，同时标记存在安全隐患的行为及区域，并发出告警提醒，加强信息化安全管理，降低人工监督成本</div>
        </div>
      </div>
    </div>
    <div class="robotCustomer">
      <div class="robotService">
        <div>机器人客服</div>
        <div>
          覆盖企业售前咨询、售中跟进、售后服务所有环节（在线+通话）<br/> 降低企业人力运营成本，提高企业服务效率
        </div>
      </div>
    </div>
    <div class="initiative" ref='qu'>
      <div v-show="t" class="animated bounceInRight" style="animation-duration:2s;">首创六位一体智能客服体系</div>
      <div v-show="t" class="animated bounceInLeft" style="animation-duration:2s;">打造全流程闭环服务</div>
    </div>
    <div class="customerServicesystem">
        <div class="customers">
          <img src="../assets/page/cust1.png" alt="">
          <div class="one-customers">
            <div>智能机器人</div>
            <div>通过人工智能方式解答客户的问题，提供永不离线的客户服务，降低80%的客服人力成本。</div>
          </div>
        </div>
        <div class="customers2">
          <img src="../assets/page/cust2.png" alt="">
          <div class="one-customers2">
            <div>人工客服</div>
            <div>通过大规模知识处理、自然语义理解等技术，模拟人类回答与发问方式，对产品进行隐性推销。</div>
          </div>
        </div>
        <div class="customers3">
          <img src="../assets/page/cust3.png" alt="">
          <div class="one-customers3">
            <div>多沟通方式</div>
            <div>无论客服是否在线，都能接收客户反馈；表情、图片、语音、订单发送让沟通效率更高。</div>
          </div>
        </div>
    </div>
    <div class="customerServicesystem serv">
      <div class="customer">
        <img src="../assets/page/cust4.png" alt="">
        <div class="one-customers">
          <div>客服APP</div>
          <div>利用风语者的客服APP，你的企业可以随时随地和客户进行沟通，不会漏掉任何沟通机会，手机和PC端的无缝融合和相辅相承。</div>
        </div>
      </div>
      <div class="customer2">
        <img src="../assets/page/cust5.png" alt="">
        <div class="one-customers2">
          <div>数据统计</div>
          <div>机器人强大的数据分析系统，不仅可以根据访客记录自动生成各类数据报表，更可通过服务记录发掘客户新需求。</div>
        </div>
      </div>
      <div class="customer3">
        <img src="../assets/page/cust6.png" alt="">
        <div class="one-customers3">
          <div>多渠道接入</div>
          <div>快捷的部署在微信、微博、网页、邮件、APP等多个入口，让您的客服能轻松管理和服务公司的所有渠道。</div>
        </div>
      </div>
    </div>
    <div class="teamEfficiency">
      <div class="teamEff">
        <div>团队效率提升75%,只因有它</div>
        <div>基于16亿华人语言习惯 运用国内顶级AI技术</div>
      </div>
      <div class="teamEfficing">
        <div class="fengyu">
          <div>风语者小懂</div>
          <div>基于DeepQA技术，结合ASR（语音识别）、NLP（自然语言处理）等技术，实现高级人工智能机器人，快速剖析问题并组织回复方案；专注在客户服务、生活服务、情感寄托等领域。依托于声学模型和语言模型的ASR引擎可以从声学特征、音素搭配学特征、词汇特征、韵律学特征、语法特征五大方面进行特征提龋其ASR语音识别技术对中文的性能指标达96%.</div>
        </div>
        <div><img src="../assets/page/jiqiren.png" alt=""></div>
      </div>
    </div>
    <div class="he">
      <div>他为何，这样强？</div>
    </div>
    <div class="why">
      <div>
        <div class="whys">
          <img src="../assets/page/sou1.png" alt="">
          <div class="one-whys">
            <div>
              三层立体式引导<br/> 输入自动补位引导<br/> 模糊推理反问引导<br/> 职能语句横向拓展
            </div>
          </div>
        </div>
        <div class="pin">平滑流畅的交互体验</div>
      </div>
      <div>
        <div class="whys2">
          <img src="../assets/page/sou2.png" alt="">
          <div class="one-whys2">
            <div>
              自动收集类似问题和问法<br/> 匹配相似问法自动学习<br/> 口语化处理算法引擎
            </div>
          </div>
        </div>
        <div class="pin">智能学习自主成长</div>
      </div>
      <div>
        <div class="whys3">
          <img src="../assets/page/sou3.png" alt="">
          <div class="one-whys3">
            <div>
              业务知识结构化搭建<br/> 基于语境频次关联式知识图谱<br/> 海量标注语料及行业细分数据支撑
            </div>
          </div>
        </div>
        <div class="pin">网状业务知识图谱</div>
      </div>
    </div>
    <div class="theBest">
      <div class="thes">
        <div>它是企业的极品 “宠物”</div>
      </div>
      <div class="pets">
        <div class="pets-jian">
          <div>简单靠谱</div>
          <div>
            接入简单，操作方便，轻松管理智能机<br/>器人。非技术人员也可完成接入操作。 </div>
        </div>
        <div class="pets-qie">
          <div>亲切温和</div>
          <div>
            精心设计的对话流程和寒暄内容，让聊天<br/>过程自然，客户几乎分不清是人工还是机器人。
          </div>
        </div>
      </div>
      <div class="petst">
        <div class="petst-jian">
          <div>天生敏捷</div>
          <div>
            7*24小时待命，客户需求即时响应，滴水不漏，同时接待多名客户游刃有余。 </div>
        </div>
        <div class="petst-qie">
          <div> 聪明伶俐 </div>
          <div>
            大规模知识库、强大的自然语义检索引擎，准确回答客户的各种问题。
          </div>
        </div>
      </div>
    </div>
<partner></partner>
  </div>
</template>


<script>
import partner from '../components/officalPartner'
// export default {
//   components: { HeadList },
//   methods:{
//      login() {
//       window.open("https://ai.sscai.club/index", '_blank')
//     },
//   }
// };
export default {
  components: { partner},
  data() {
    return {
      t: false
    }
  },
  methods: {
    login() {
      window.open("https://ai.sscai.club/index", '_blank')
    },
    handleScroll() {
      let that = this
      let arr = [{ ref: 'qu', show: 't' }]
      arr.forEach((r, i) => {
        that.gd(r.ref, 20, () => {
          that[r.show] = true
        })
      })
    },
    gd(div, offset, callback) {
      let dom = this.$refs[div]
      if (dom) {
        var a, b, c, d;
        d = dom.offsetTop
        a = eval(d)
        b = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop //  获取窗口滚动条高度
        c = document.documentElement.clientHeight || document.body.clientHeight // 获取浏览器可视区的高度
        if (b + c > a) {
          callback && callback()
        }
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  }
};
</script>
<style lang='scss' scoped>
.Home {
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
  float: left;
  .heaDer {

  overflow: hidden;
  width: 100%;
  height: 600px;
  background-image: url("../assets/home/banner2.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-position: center center;
}
.centerTitle {
  width: 80%;
  margin: 250px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    // background-color: red;
}
}





.AIX {
  font-size: 56px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(252, 253, 254, 1);
  margin-top: -50px;
}

.biao {
  /* width: 30.1vw; */
  font-size: 22px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(235, 238, 246, 1);
  line-height: 30px;
  text-align: center;
  margin-top: 5vh;
}
.btn{
  margin-top: 20px;
}
.hardwares {
  width: 100%;
  margin-top: 9.4vh;
  text-align: center;
}

.hardwares>div:nth-child(1) {
  font-size: 30px;
  font-family: Microsoft YaHei;
  color: rgba(51, 51, 51, 1);
  line-height: 38px;
  margin-bottom: 10px;
}

.hardwares>div:nth-child(2) {
  font-size: 18px;
  font-family: Arial;
  color: rgba(95, 97, 109, 1);
  line-height: 3.2vh;
}

.leftFigure {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.topFigure {
  margin-top: 10.6vh;
}

.bottomFigure {
  margin-top: 16.19vh;
}

.topFigure>ul,
.bottomFigure>ul {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding-inline-start: 0;
}

.topFigure>ul>li:nth-child(1) img {
  width: 226px;
}

.topFigure>ul>li:nth-child(2) {
  width: 502px;
  font-size: 17px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 45px;
  margin-left: 100px;
}

.bottomFigure>ul {
  padding-inline-start: 0;
}

.bottomFigure>ul>li:nth-child(1) {
  font-size: 17px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 74px;
}

.bottomFigure>ul>li:nth-child(2) img {
  width: 482px;
}

.yin {
  width: 336px;
}

.softwareProduct {
  width: 100%;
  height: 798px;
  background-image: url("../assets/page/homePage.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin-top: 15.2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.topProduct {
  margin-top: 89px;
  margin-bottom: 78px;
}

.topProduct>div:nth-child(1) {
  font-size: 30px;
  font-family: Microsoft YaHei;
  color: rgba(255, 255, 255, 1);
  line-height: 38px;
  text-align: center;
}

.topProduct>div:nth-child(2) {
  font-size: 18px;
  font-family: Arial;
  color: rgba(255, 255, 255, 1);
  line-height: 30px;
  margin-top: 1.5vh;
}

.centerProduct {
  width: 100%;
  display: flex;
  justify-content: center;
}


.centerlines,
.centerlines3 {
  width: 260px;
  height: 330px;
  background-image: url("../assets/page/bian.png");
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.centerlines2 {
  width: 260px;
  height: 330px;
  background-image: url("../assets/page/blue.png");
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 124px;
  margin-right: 136px;
}

.centerlines>img,
.centerlines3>img {
  width: 63px;
  padding: 38px 0 28px 0;
}

.centerlines2>img {
  width: 80px;
  padding: 42px 0 16px 0;
}


.centerline1>div:nth-child(1) {
  font-size: 20px;
  font-family: Microsoft YaHei;
  color: rgba(255, 255, 255, 1);
  line-height: 38px;
  margin-bottom: 22px;
}

.centerline1,
.centerline3,
.one-scenario,
.one-scenario2,
.one-scenario3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.centerline1>div:nth-child(2) {
  width: 79%;
  font-size: 12.4px;
  font-family: Microsoft YaHei;
  color: rgba(212, 222, 244, 1);
  line-height: 24px;
}

.centerline2>div:nth-child(1),
.centerline3>div:nth-child(1) {
  font-size: 20px;
  font-family: Microsoft YaHei;
  color: rgba(255, 255, 255, 1);
  line-height: 24px;
  margin-bottom: 22px;
}

.centerline2>div:nth-child(2) {
  font-size: 12.4px;
  font-family: Microsoft YaHei;
  color: rgba(212, 222, 244, 1);
  line-height: 24px;
}

.centerline3>div:nth-child(2) {
  font-size: 12.4px;
  font-family: Microsoft YaHei;
  color: rgba(212, 222, 244, 1);
  line-height: 24px;
  text-align: center;
}

.bottomProduct>a {
  width: 260px;
  height: 74px;
  border: .01vh solid rgba(255, 255, 255, .5);
  font-size: 22px;
  font-family: Source Han Sans CN;
  color: rgba(255, 255, 255, 1);
  line-height: 74px;
  text-align: center;
  margin-top: 71px;
  text-decoration: none;
  display: block;
}

.applicationScenario {
  width: 80%;
  display: flex;
  justify-content: center;
}

.one-scenario>img,
.one-scenario2>img,
.one-scenario3>img {
  width: 280px;
}

.one-swiping,
.one-swiping2,
.one-swiping3 {
  width: 280px;
  height: 230px;
  /* background-image: url("../assets/page/heng.png"); */
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 3px 3px rgb(241, 241, 241);
}

.one-swiping>div:nth-child(1) {
  font-size: 20px;
  font-family: Source Han Sans CN;
  color: rgba(51, 51, 51, 1);
  line-height: 30px;
  padding: 3.69vh 0 2.5vh 20px;
}

.one-swiping>div:nth-child(2) {

  width: 90%;
  font-size: 13.4px;
  font-family: Source Han Sans CN;
  color: rgba(102, 102, 102, 1);
  line-height: 30px;
  margin-left: 20px;
}

.one-scenario2 {
  padding-left: 70px;
  padding-right: 80px;
}

.one-swiping2>div:nth-child(1) {
  padding: 3.69vh 0 2.5vh 18px;
}

.one-swiping3>div:nth-child(1) {
  padding: 2.6vh 0 2.28vh 18px;
}

.one-swiping2>div:nth-child(1),
.one-swiping3>div:nth-child(1) {
  font-size: 20px;
  font-family: Source Han Sans CN;
  color: rgba(51, 51, 51, 1);
  line-height: 30px;
}

.one-swiping2>div:nth-child(2),
.one-swiping3>div:nth-child(2) {
  width: 90%;
  font-size: 13.4px;
  font-family: Source Han Sans CN;
  color: rgba(102, 102, 102, 1);
  line-height: 21px;
  margin-left: 18px;
}

.robotCustomer {
  width: 100%;
  height: 650px;
  background-image: url("../assets/page/shou.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin-top: 60px;
  display: flex;
  align-items: center;
}

.robotService {
  margin-left: 16.19vw;
}

.robotService>div:nth-child(1) {
  font-size: 50px;
  font-family: Source Han Sans CN;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 6.08vh;
}

.robotService>div:nth-child(2) {
  font-size: 19px;
  font-family: Source Han Sans CN;
  color: rgba(255, 255, 255, 1);
  line-height: 33px;
}

.initiative {
  width: 100%;
  margin-top: 15.2vh;
  margin-bottom: 8.58vh;
  text-align: center;
}

.initiative>div:nth-child(1) {
  font-size: 48px;
  font-family: Source Han Sans CN;
  color: rgba(64, 80, 123, 1);
}

.initiative>div:nth-child(2) {
  font-size: 28px;
  font-family: Source Han Sans CN;
  color: rgba(102, 102, 102, 1);
  line-height: 5.2vh;
  margin-top: 6.4vh;
  letter-spacing: 4px;
}

.customerServicesystem,
.why {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.serv {
  margin-top: 20px;
}

.customers,
.customers2,
.customers3 {
  width: 340px;
  height: 410px;
  background-image: url("../assets/page/shu.png");
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.customers2,
.customer2 {
  margin: 0 20px;
}

.customers>img {
  width: 71px;
 margin-top: 45px;
  margin-bottom: 20px;
}

.customers2>img {
  width: 88px;
  margin-top: 45px;
  margin-bottom: 20px;
}

.customers3>img {
  width: 72px;
 margin-top: 45px;
  margin-bottom: 20px;
}

.customer,
.customer2,
.customer3 {
  width: 340px;
  height: 410px;
  background-image: url("../assets/page/shu.png");
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.customer>img {
  width: 65px;
   margin-top: 45px;
  margin-bottom: 20px;
}

.customer2>img {
  width: 48px;
   margin-top: 45px;
  margin-bottom: 20px;
}

.customer3>img {
  width: 75px;
  margin-top: 45px;
  margin-bottom: 20px;
}

.one-customers>div:nth-child(1),
.one-customers2>div:nth-child(1),
.one-customers3>div:nth-child(1) {
  font-size: 22px;
  font-family: Source Han Sans CN;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
  margin-bottom: 3.69vh;
}

.one-customers>div:nth-child(2),
.one-customers2>div:nth-child(2),
.one-customers3>div:nth-child(2) {
  width: 62%;
  font-size: 17px;
  font-family: Source Han Sans CN;
  color: rgba(102, 102, 102, 1);
  line-height: 30px;
  text-align: center;
}

.one-customers,
.one-customers2,
.one-customers3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.teamEfficiency {
  width: 100%;
  height: 1020px;
  background-image: url("../assets/page/sky.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin-top: 13vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.teamEff {
  width: 100%;
  margin-top: 15.43vh;
  margin-bottom: 16.19vh;
  text-align: center;
}

.teamEff>div:nth-child(1) {
  font-size: 58px;
  font-family: Source Han Sans CN;
  color: rgba(255, 255, 255, 1);
}

.teamEff>div:nth-child(2) {
  font-size: 24px;
  font-family: Source Han Sans CN;
  color: rgba(255, 255, 255, 1);
  line-height: 5.2vh;
  margin-top: 6.4vh;
}

.teamEfficing {
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.teamEfficing>div:nth-child(2) {
  display: flex;
  justify-content: center;
  align-items: center;
}

.teamEfficing>div:nth-child(2) img {
  width: 560px;
}

.fengyu>div:nth-child(1) {
  font-size: 50px;
  font-family: Source Han Sans CN;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 2.8vh;
}

.fengyu>div:nth-child(2) {
  width: 450px;
  text-indent: 2.3vw;
  font-size: 24px;
  font-family: Source Han Sans CN;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
}

.he {
  width: 100%;
  margin-top: 15vh;
  margin-bottom: 12.6vh;
  text-align: center;
}

.he>div {
  font-size: 58px;
  font-family: Source Han Sans CN;
  color: rgba(64, 80, 123, 1);
}

.whys,
.whys2,
.whys3 {
  width: 340px;
  height: 410px;
  background-image: url("../assets/page/biankuang.png");
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.whys>img {
  width: 81px;
  margin-top: 9.3vh;
  margin-bottom: 6.36vh;
}

.whys2>img {
  width: 80px;
  margin-top: 9.84vh;
  margin-bottom: 6.91vh;
}

.whys3>img {
  width: 83px;
  margin-top: 9.5vh;
  margin-bottom: 6.36vh;
}

.one-whys,
.one-whys2,
.one-whys3 {
  font-size: 16px;
  font-family: Source Han Sans CN;
  color: rgba(102, 102, 102, 1);
  line-height: 30px;
  text-align: center;
}

.why>div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.pin {
  font-size: 26px;
  font-weight: bold;
  font-family: Source Han Sans CN;
  color: rgba(31, 36, 48, 1);
}

.whys2 {
  margin-left: 2vw;
  margin-right: 2vw;
}

.theBest {
  width: 100%;
  height: 1200px;
  background-image: url("../assets/page/jian.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin-top: 13vh;
}

.thes {
  width: 100%;
  margin-top: 190px;
  margin-bottom: 166px;
  text-align: center;
}

.thes>div {
  font-size: 58px;
  letter-spacing: 6px;
  font-family: Source Han Sans CN;
  color: #ffffff;
}

.pets,
.petst {
  width: 86%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.pets>div,
.petst>div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}








/* .pets>div:nth-child(1) {
  width: 36%;
}

.pets>div:nth-child(2) {
  width: 45%;
} */

.pets>div:nth-child(2),
.petst>div:nth-child(2) {
  margin-left: 120px;
}

.pets-jian>div:nth-child(1),
.pets-qie>div:nth-child(1),
.petst-jian>div:nth-child(1),
.petst-qie>div:nth-child(1) {
  font-size: 46px;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 3vh;
}

.pets-jian>div:nth-child(2),
.petst-jian>div:nth-child(2) {
  width: 420px;
  font-size: 24px;
  font-family: Source Han Sans CN;
  color: rgba(255, 255, 255, 1);
  line-height: 60px;
}

.pets-qie>div:nth-child(2),
.petst-qie>div:nth-child(2) {
  width: 470px;
  font-size: 22px;
  text-indent: 2.6vw;
  font-family: Source Han Sans CN;
  color: rgba(255, 255, 255, 1);
  line-height: 60px;
}

.petst {
  margin-top: 25.86vh;
}







/* .petst>div:nth-child(1) {
  width: 38%;
}*/

.petst>div:nth-child(2) {
  text-align: center;
}
</style>
