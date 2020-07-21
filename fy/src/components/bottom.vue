<template>
  <div class="foot">
    <!-- <div class="foot-content">
              <div class="contain">
                <div class="left-foot-content">
                  <ul>
                    <li>联系我们</li>
                    <li>公司地址：北京市朝阳区惠河南街62-108</li>
                    <li>联系电话：4008-175-888</li>
                    <li>售后服务：400-889-5678</li>
                  </ul>
                </div>
                <div class="right-foot-content">
                  <ul>
                    <li>友情链接</li>
                    <li>
                      <a href="http://www.dongrobot.com">北京中通网络股份有限公司机器人</a>
                    </li>
                    <li>
                      <a href='http://www.sinocall.net'>中国电信400电话</a>&nbsp;&nbsp;
                      <a href>电话录音</a>&nbsp;&nbsp;
                      <a href>法头条</a>&nbsp;&nbsp;
                      <a href='http://developer.sinocall.com'>秒上</a>&nbsp;&nbsp;
                    </li>
                    <li>联系电话：400-889-5678</li>
                  </ul>
                </div>
              </div>
              <div class="last-line">
                <p class='last-line-content'>
                  Copyright © 2006-2020 北京中通网络通信股份有限公司 版权所有 备案号：京ICP备07500258号
                </p>
                <p> 京公网安备 11010502036786号</p>
              </div>
            </div> -->
    <div>联系我们</div>
    <div>公司地址：北京朝阳区惠河南街62-108</div>
    <div>
      <div>联系电话：400-817-5888</div>
      <div class="afterSales">售后服务：400-889-5678</div>
      <div>传真电话：+86-010-85757990</div>
    </div>
    <div>
      <div>Copyright © 2006-2016 北京中通网络通信股份有限公司</div>
      <div class="recordNo">备案号：京ICP备07500258号</div>
      <div>京公网安备 11010502036786号</div>
    </div>

<div>
</div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.foot {
  width: 100%;
  height: 300px;
  background-position: center;
  background-color: #0C264A;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 9vh;
}

.foot>div {
  font-size: 16px;
  font-family: Source Han Sans CN;
  color: rgba(255, 255, 255, 1);
}

.foot>div:nth-child(1) {
  width: 951px;
  padding-top: 50px;
  padding-bottom: 30px;
}

.foot>div:nth-child(2) {
  width: 951px;
  padding-bottom: 30px;
}

.foot>div:nth-child(3) {
  width: 951px;
  display: flex;
  margin-bottom:30px;
}

.foot>div:nth-child(4) {
  width: 951px;
  display: flex;

}

.afterSales,.recordNo{
  margin: 0 2vw;
}



.foot-content {
  height: 33vh;
  width: 85vw;
  margin: auto;
  font-size: 0.9vw;
  color: white;
}

.foot-content>.contain>.left-foot-content>ul {
  text-align: left;
  border-right: 1px solid;
  list-style: none;
  margin-top: 1vh;
}

.foot-content>.contain>.right-foot-content>ul {
  list-style: none;
  margin-top: 1vh;
  padding-left: 6vw;
  width: 30vw;
}

.contain {
  height: 20vh;
  width: 80vw;
}

.foot-content>.contain>.right-foot-content>ul>li>a {
  text-decoration: none;
  color: white;
}

.left-foot-content {
  margin-left: 15vw;

  width: 25vw;
  margin-top: 4vh;
  float: left;
}

.right-foot-content {
  text-align: left;
  margin-top: 4vh;
  width: 30vw;
  float: right;
  margin-right: 10vw;
}

.last-line {
  text-align: center;
}

.last-line-content {
  display: block;
  text-align: center;
  margin: auto;
  margin-top: 3vh;
  font-size: 0.9vw;
}

.foot-content>.contain>.left-foot-content>ul>li:hover {
  color: orange;
}

.foot-content>.contain>.right-foot-content>ul>li:hover {
  color: orange;
}

.foot-content>.contain>.right-foot-content>ul>li>a:hover {
  color: orange;
}
</style>
