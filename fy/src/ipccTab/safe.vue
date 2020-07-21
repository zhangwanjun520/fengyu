<template>
  <div class="safe">
    <div class="safe2">
      <div class="safe-content1">
        <p class="safe-title1">智能呼叫中心</p>
        <p class="safe-title2">
          根据风语者IPCC研发团队在众多项目实施经验，总结了对IPCC存在的主要安全性 分为IP分组网本身的脆弱性和VoIP受到的安全攻击。中通网络针对上述的安全隐患， 在产品研发和项目实施中，遵循了以下安全原则。
        </p>
      </div>
    </div>
    <div class="safe3">
      <div class="safe3-content">
        <div class="safe-left">
          <img src="../assets/安全/组 94.png" alt />
          <div class="safe-left-info">
            <p class="safe-left-title1">保障IP分组网的安全</p>
            <p class="safe-left-title2">
              IP网络安全是各个网络层次上安全措施和内容的综合， 一旦一个端点出现漏洞，就会延续到整个IP网络，因此综合、全面实施各种安全措施至关重要。
            </p>
          </div>
        </div>
        <div class="safe-right">
          <p class="safe-right-title1">
            IP网络是实现宽带电话的基础，要保障宽带电话的安全，首先应该保障宽带网络的安全。 这方面的防护措施主要包括以下内容：
          </p>
          <ul class="safe-ul">
            <li>
              <i class="el-icon-s-release"></i>
              <div>
                <p class="safe-rights">防火墙</p>
                <p class="safe-right-title3">防火墙在两个网络之间执行访问控制策略，可以是软件或硬件设备。</p>
              </div>
            </li>

            <li>
              <i class="el-icon-document-delete"></i>
              <div>
                <p class="safe-rights"> 入侵检测和防护</p>
                <p class="safe-right-title3">在网络中不同端点安装和实施，以监测系统、网络运行和流量，在故障出现之前采取防护和补救措施，将损失降至最低。</p>
              </div>
            </li>
            <li>
              <i class="el-icon-warning-outline"></i>
              <div>
                <p class="safe-rights">反病毒软件</p>
                <p class="safe-right-title3">在网元设备和终端上分别安装和实施。</p>
              </div>
            </li>
            <li>
              <i class="el-icon-lock"></i>
              <div>
                <p class="safe-rights">加密</p>
                <p class="safe-right-title3">对于内容较为敏感的通信，将进行加密保护。</p>
              </div>
            </li>
            <li>
              <i class="el-icon-search"></i>
              <div>
                <p class="safe-rights">内容检查</p>
                <p class="safe-right-title3">
                  Java、JavaScript、ActiveX等互动技术是宽带内容站点和e-mail的重要组成部分，同时也是黑客攻击的潜在媒体， 在浏览器和e-mail中禁止这些功能。
                </p>
              </div>
            </li>
            <li>
              <i class="el-icon-s-platform"></i>
              <div>
                <p class="safe-rights">操作系统安全</p>
                <p class="safe-right-title3">风语者IPCC是基于Linux系统设计，有效的降低了操作系统对安全性的威胁。</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="safe4">
      <div class="safe4-content">
        <p class="safe4-title1">保障通话安全</p>
        <p class="safe4-title2">
          包括采用强认证方式，如二元认证，公共密钥基础设施(PKI)、SIP和H.323协议中也嵌套了安全功能,包括地址认证；保证呼叫处理<br/>软件运行平台的安全， 确保操作系统没有运行任何非必需软件，并且已安装必要的安全补丁， 服务器、路由器的不必要端口不打开。
        </p>
        <div class="smallIcon">
          <div class="safe4-img1">
            <img src="../assets/安全/组 94(1).png" alt />
            <p class="safe4-img1-info">减少因安全关联(SA)/密钥交换、加密操作引起的延迟，减少对话音质量的影响</p>
          </div>
          <div class="safe4-img1">
            <img src="../assets/安全/组 94(2).png" alt />
            <p class="safe4-img1-info">保证宽带等网络资源，带宽是实现较高质量通话的基础和优势所在</p>
          </div>
          <div class="safe4-img1">
            <img src="../assets/安全/组 94(3).png" alt />
            <p class="safe4-img1-info">合理选择VPN和加密，平衡安全性和质量</p>
          </div>
          <div class="safe4-img1">
            <img src="../assets/安全/组 94(4).png" alt />
            <p class="safe4-img1-info">选择合适的多VPN隧道模式，如加密的VPN模式和没有加密的VPN模式</p>
          </div>
          <div class="safe4-img1">
            <img src="../assets/安全/组 94(5).png" alt />
            <p class="safe4-img1-info">网络地址翻译和呼叫控制，减少操作时间给话音质量带来的影响</p>
          </div>
        </div>
      </div>
    </div>
    <div class="safe5-top">
      <p class="safe5-top-title1">SYSTEM SAFETY FEATURE CONTROL</p>
      <p class="safe5-top-title2">系统安全特性控制</p>
    </div>
    <div class="safe5">
      <div class="safe5-content">
        <div class="safe5-left-img">
          <img src="../assets/安全/组 94(7).png" alt />
        </div>
        <div class="safe5-left-text">
          <ul>
            <li style="color:white">1. 不允许任何IP地址来源的SIP认证请求</li>
            <li style="color:white">2. 不允许任何未经系统认证的通话请求</li>
            <li>3. 加强SIP分机密码的强度</li>
            <li>4. 封锁系统管理接口账号</li>
            <li>5. 设定分机在同一时间内，只允许有一个通话</li>
            <li>6. 确保呼叫流程安全</li>
            <li>7. 分机名称与分机号码不允许设成相同的号码</li>
            <li>8. 设定中继和分机的认证方式为安全认证</li>
            <li>9. 禁止匿名账号连接系统</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="three-button">
      <div class="three-button-content">
        <router-link to="/solution/IPCC" tag="div" class="button-infos">技术架构</router-link>
        <router-link to="/solution/ipccidea" tag="div" class="button-infos">立即免费试用</router-link>
        <router-link to="/solution/safe" tag="div" class="button-infos">安全策略</router-link>
      </div>
    </div>
  </div>
</template>
<script>

export default {
};
</script>
<style>
.safe2 {
  width: 100%;
  height: 25vh;
  margin-bottom: 108px;
}
.safe-content1 {
  width: 100%;
  height: 180px;
  margin: auto;
}
.safe-title1 {
  width: 100%;
  text-align: center;
  font-size: 36px;
  font-weight: 500;
}
.safe-title2 {
  width: 930px;
  margin: auto;
  text-align: center;
  font-size: 19px;
  color: #666666;
  font-family: Source Han Sans CN;
  font-weight: 500;
  line-height: 38px;
}
.safe3 {
  width: 100%;
  height: auto;
}
.safe3-content {
  width: 100%;
  height: auto;
  margin: auto;
  position: relative;
  display: flex;
}

.safe-left>img {
  width: 600px;
}

.safe-right {
  width: 100%;
  height: 826px;
  background-color: #000000;
  color: white;
}

.safe-rights {
  font-size: 17px;
  margin-block-start: 0;
  margin-block-end: 0;
}

@media screen and (max-width: 1210px) {
  .safe-right-title3 {
    width: 441px!important;
  }
  .safe-right-title1 {
    width: 486px!important;
  }
}

.smallIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 80px;
}

.smallIcon>.safe4-img1:nth-child(1) {
  margin-left: 0;
}

.safe-left-info {
  width: 660px;
  height: 467px;
  background-color: white;
  position: absolute;
  top: 50%;
  margin-top: -308px;
  z-index: 12;
}

.safe-left-title1 {
  font-size: 36px;
  font-weight: 500;
  margin-left: 80px;
  margin-top: 14vh;
}

.safe-left-title2 {
  width: 460px;
  font-size: 16px;
  font-weight: 400;
  margin-left: 80px;
  line-height: 40px;
  color: #666666;
}

.safe-right-title1 {
  margin-left: 120px;
  width: 600px;
  margin-top: 10vh;
  font-size: 17px;
  font-family: Source Han Sans CN;
  line-height: 36px;
  margin-bottom: 30px;
}

.safe-ul {
  list-style: none;
  margin-left: 84px;
  width: 40vw;
}

.safe-ul>li {
  display: flex;
  align-items: center;
}

.safe-ul>li>div {
  margin-left: 16px;
}

.safe-right-title3 {
  width: 600px;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  opacity: 0.5;
  line-height: 28px;
}

.safe4 {
  width: 100%;
  height: auto;
}

.safe4-content {
  width: 100%;
  height: auto;
  margin: auto;
}

.safe4-title1 {
  height: 5vh;
  text-align: center;
  font-size: 36px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  margin-top: 8vh;
}

.safe4-title2 {
  width: 100%;
  text-align: center;
  margin: auto;
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 40px;
}

.safe4-img1 {
  text-align: center;
  height: 310px;
  background: rgba(255, 255, 255, 1);
  float: left;
  /* margin-left: 70px; */
  width: 205px;
  border: 0.01rem solid #dddddd;
}

.safe4-img1>img {
  width: 67.58px;
  margin-top: 45px;
  margin-top: 60px;
}

.safe4-img1-info {
  line-height: 30px;
  text-align: center;
  margin: auto;
  width: 153.6px;
  font-size: 13.6px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-top: 5vh;
}

.safe5 {
  width: 100%;
  height: 70vh;
  position: relative;
}

.safe5-content {
  width: 100%;
  height: auto;
  margin: auto;
  position: absolute;
  background-color: transparent;
  top: -150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.safe5-top {
  width: 100%;
  height: 368.9px;
  background-image: url("../assets/安全/组94.png");
  background-position: center;
  background-size: cover;
}

.safe5-top-title1 {
  width: 100%;
  height: 3vh;
  text-align: center;
  padding-top: 9vh;
  font-size: 20px;
  font-family: Arial;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  opacity: 0.6;
  letter-spacing: .1vw;
}

.safe5-top-title2 {
  width: 100%;
  height: 40px;
  text-align: center;
  font-size: 32px;
  color: #ffffff;
  padding-bottom: 78px;
}

.safe5-left-img {
  float: left;
  width: auto;
  height: auto;
}

.safe5-left-img>img {
  width: 422.4px;
  height: auto;
}

.safe5-left-text {
  font-weight: 500;
  font-size: 17px;
  color:black;
  text-indent: 6em;
  line-height: 60px;
}

.safe5-left-text>ul>li {
  list-style: none;
}

.three-button {
  width: 100%;
  height: 320px;
  margin-top: 50px;
}

.three-button-content {
  width: 100%;
  height: 320px;
  display: flex;
  margin: auto;
  justify-content: center;
}

.three-button-content>.button-infos:nth-child(2) {
  margin-left: 80px;
  margin-right: 80px;
}

.button-infos {
  float: left;
  width: 311.8px;
  height: 83.73px;
  line-height: 83.73px;
  font-size: 28px;
  background-color: #0c264a;
  color: white;
  text-align: center;
  margin-top: 130px;
}

.button-infos:hover {
  color: orange;
}
</style>
