<template>
  <div class="voice">
    <div class="banner1"></div>
    <div class="voice2">
      <div class="left">
        <p>MX100G-S (1-4 E1)</p>
        <p>MX100G-S数字中继网关（以下简称“MX100G-S”），通过网口和E1/T1接口实现IMS/SIP与ISDN PRI（30B+D）呼叫协议之间的转换，实现新一代VOIP语音业务网与企业侧传统程控交换机（PBX）的连接，或实现将新一代企业IP语音交换机（IP-PBX）与传统PSTN网的连接。MX100G-S支持1至4个E1/T1链路以及512个SIP中继账号注册，满足大中型企业对VoIP的要求。</p>
      </div>
      <div class="right">
        <img src="../assets/productionCenter/ppbx.png" alt />
      </div>
    </div>
    <!-- 详细介绍 -->
    <div class="intro">
      <p class="tit">高性能</p>
      <p
        class="content"
      >MX100G-S数字中继网关采用美国TI公司高性能语音处理DSP芯片。通过DSP阵列子卡，每台网关可拥有6000MIPS的处理能力，保证在120路通话满负荷运行状态下，MX100G-S数字中继网关仍能执行语音处理（G.711、G.729A、G.723.1）、回音消除、传真中继（T.38）。</p>
      <p class="tit">高安全性</p>
      <p
        class="content"
      >MX100G-S数字中继网关支持的安全防护手段包括：信令和媒体流加密、自动密码强度检测、防密码暴力破解、用户数据密文存储、Telnet/SSH功能开关、访问白名单、系统日志备份等。</p>
      <p class="tit">高可靠性</p>
      <p
        class="content"
      >MX100G-S数字中继网关配备双网口冗余保护，确保通话不受局部网络故障影响；同时，可选配1+1直流/交流电源模块，满足用户对高可靠性的需求。在部署方面，MX100G-S提供包括主备SIP服务器注册切换的容灾机制。</p>
      <p class="tit">便捷多样的远程管理</p>
      <p
        class="content"
      >MX100G-S数字中继网关内置迅时云服务客户端，实现从外网访问部署在企业NAT或防火墙后的设备。MX100G-S数字中继网关可与迅时网管监控系统配合使用，便于进行设备实时监控、告警通知、远程抓包、软件升级等维护工作。此外，还支持通过TR-069连接第三方网管系统。</p>
      <p class="tit">丰富的功能</p>
      <p class="content">主/被叫号码变换、路由选择、RADIUS计费接口、播放二次拨号音和回铃音、自动拨号（DTMF）、语音检测、RTP语音代理（用于 NAT/防火墙穿透）。</p>
    </div>
    <!-- 产品特点 -->
    <div class="special">
      <p class="tit3">产品特点</p>
      <p>- 支持SIP和IMS协议</p>
      <p>- 500条路由和号码转换规则</p>
      <p>- 双网口/双电源冗余保护</p>
      <p>
        - 512个SIP中继账号注册
        代码
      </p>
      <p>- 支持TLS/SRTP加密</p>
      <p>- 支持语音VLAN</p>
      <p>- 支持迅时网管系统和第三方网管系统TR-069</p>
      <p>- 兼容思科CallManager/CUCM、Broadsoft、微软Skype for Business （原Lync）、 华为IMS、VoS、FreeSWITCH和Asterisk/Elastix等业务平台</p>
      <p>- 提供3.5kV的防雷保护</p>
    </div>
        <!-- 优质声音效果，智能消噪 -->

    <!-- 产品配置 -->
    <div class="peizhi">
      <p>产品配置</p>
      <table>
        <tr class="one">
          <td></td>
          <td>MX100G-S</td>
        </tr>
        <tr>
          <td>最大自带模拟分机+模拟外线数</td>
          <td>4T1/E1</td>
        </tr>
        <tr class="one">
          <td>最大同时通话数</td>
          <td>120</td>
        </tr>
        <tr>
          <td>内置VPN客户端</td>
          <td>-</td>
        </tr>
        <tr class="one">
          <td>高速传真</td>
          <td>支持（透传）</td>
        </tr>
        <tr>
          <td>TLS/SRTP</td>
          <td>支持</td>
        </tr>
      </table>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>
<style lang="scss" scoped>
.banner1 {
  width: 100%;
  height: 450px;
  background-image: url("../assets/productionCenter/banner.png");
  background-position: center 50px;
  background-size: cover;
  background-repeat: no-repeat;
}
.voice2 {
  width: 1000px;
  margin: auto;
  // border: 1px solid red;
  height: 450px;

  div {
    float: left;
    margin-left: 70px;
    width: 400px;
    height: 400px;
  // border: 1px solid red;

  }
  .right {
    img {
      width: 320px;
      margin-top: 170px;
    }
  }
  .left {
    p {
      width: 70%;
      margin: auto;
    }
    p:nth-child(1) {
      font-size: 24px;
      color: #002e73;
      margin-top: 50px;
      margin-bottom: 30px;
      font-weight: bold;
    }
    p:nth-child(2) {
      font-size: 14px;
      color: #666666;
      line-height: 26px;
    }
  }
}
.intro {
  p {
    color: #666666;
    width: 800px;
    margin: auto;
  }
  .tit {
    margin-top: 40px;
    font-size: 16px;
  }
  .content {
    line-height: 26px;
  }
}
// 产品特点
.special {
  margin-top: 60px;
  width: 100%;
  height: 500px;
  background-image: url("../assets/productionCenter/banner2.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  p {
    width: 900px;
    margin: auto;
    line-height: 30px;
  }
  .tit3 {
    font-size: 22px;
    padding-top: 50px;
    margin-bottom: 40px;
  }
}

// 产品配置
.peizhi {
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
.one {
  td {
    background: #d0e3ea;
  }
}
tr {
  td {
    background-color: #e9f1f6;
  }
  td:nth-child(1) {
    width: 280px;
    height: 50px;
    // border: 1px solid;
  }
  td:nth-child(2) {
    width: 150px;
    height: 50px;
    // border: 1px solid;
  }
}
table {
  margin: auto;
  margin-bottom: 60px;
  color: #666666;
  font-size: 15px;
  text-align: center;
  tr:nth-child(1) {
    td {
      background: #4bacc7;
      color: white;
      font-size: 18px;
    }
  }
}
</style>
