<template>
  <div class="headlist" :style="{'background':(flag?'black':'transparent')}">
    <div class="content1">
      <img src="../assets/logo.png" class="img1" alt />
      <ul class="list2">
        <router-link to="/homePage" tag="li">首页</router-link>
        <li>
          <el-dropdown trigger="click" placement="bottom-start">
            <span class="el-dropdown-link" style="color:white">
              产品中心
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" class="menuu">
              <el-dropdown-item style="fontSize:16px;color:#3988FC">呼叫中心</el-dropdown-item>
              <el-dropdown-item style="fontSize:16px;color:#3988FC">视频会议</el-dropdown-item>
              <el-dropdown-item style="fontSize:16px;color:#3988FC">智慧社区</el-dropdown-item>
              <!-- target="_blank" -->

              <router-link tag="a" to="/ipPhone">
                <el-dropdown-item style="fontSize:12px">IP话机</el-dropdown-item>
              </router-link>

              <router-link tag="a" to="/video1">
                <el-dropdown-item style="fontSize:12px">24方视讯终端</el-dropdown-item>
              </router-link>
              <router-link tag="a" to="/passage">
                <el-dropdown-item style="fontSize:12px">通行类</el-dropdown-item>
              </router-link>
              <router-link tag="a" to="/earPhone">
                <el-dropdown-item style="fontSize:12px">话务耳机</el-dropdown-item>
              </router-link>

              <router-link tag="a" to="/cloudVideo">
                <el-dropdown-item style="fontSize:12px">智能云视讯终端</el-dropdown-item>
              </router-link>
              <router-link tag="a" to="/identify">
                <el-dropdown-item style="fontSize:12px">识别类</el-dropdown-item>
              </router-link>

              <router-link tag="a" to="/voice">
                <el-dropdown-item style="fontSize:12px">语音网关</el-dropdown-item>
              </router-link>
              <router-link tag="a" to="/meeting">
                <el-dropdown-item style="fontSize:12px">会议无线辅流传屏器</el-dropdown-item>
              </router-link>

              <!-- <el-dropdown-item style="fontSize:12px">外设类</el-dropdown-item> -->
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <el-dropdown trigger="click" placement="bottom-start">
            <span class="el-dropdown-link" style="color:white;font-szie:18px;">
              解决方案
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu
              slot="dropdown"
              id="pull"
              placement="bottom-start"
              style="font-size:22px"
            >
              <router-link
                tag="a"
                target="_blank"
                value="citem.name"
                style="text-decoration:none;font-size:16px;"
                v-for="(citem,cindex) in pulllist2"
                :key="cindex"
                :to="citem.path"
                active-class="cactive"
              >
                <el-dropdown-item style="text-decoration:none;font-size:12px;">{{citem.name}}</el-dropdown-item>
              </router-link>
              <el-dropdown-item>
                <a @click="machines" id="aa" style="font-size:12px;">机器人客服</a>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <router-link to="/homePage" tag="li" @click.native="abouts">关于我们</router-link>
      </ul>
      <ul class="tab">
        <el-button plain size="small">
          <a href="http://smsclient.sinocall.com/#/login" class="login-a">登录/注册</a>
        </el-button>
      </ul>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      pulllist2: [
        { name: "IPCC ", path: "/solution" },
        { name: "智能通行 ", path: "/solution/intelligentPassage" },
        { name: "视频会议", path: "/solution/videoconFerencing" }
        // { name: "5G/IOT", path: "" }
      ],
      flag: false
    };
  },
  methods: {
    phone() {
      window.open("http://www.sinocall.net", "_blank");
    },
    machines(item) {
      window.open("http://www.dongrobot.com", "_blank");
    },
    abouts() {
      this.$router.push("/aboutUs");
    }
  },
  watch: {
    //  监听路由修改头部导航样式
    $route: {
      handler: function(val, oldVal) {
        if (val.meta.level == 1) {
          console.log(this.$route);
          this.flag = true;
        } else {
          this.flag = false;
        }
      },
      // 深度观察监听
      deep: true
    }
  }
};
</script>
<style lang="scss" scoped>
.headlist {
  position: absolute;
  width: 100%;
  z-index: 999;
  top: 0;
}
.content1 {
  color: white;
  width: 1000px;
  min-width: 1000px;
  height: 100px;
  margin: auto;
  font-size: 18px;
}

.list2 {
  height: 20%;
  font-size: 17px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  float: left;
  margin-top: 50px;
  margin-left: 33px;
  width: 60%;
  min-width: 500px;
  margin-left: 70px;
  /* border: 1px solid red; */
}
.list2 > li {
  float: left;
  list-style: none;
  margin-right: 60px;
  cursor: pointer;
}

.img1 {
  width: 130px;
  display: block;
  float: left;
  padding-top: 35px;
}

.list2 > a {
  cursor: pointer;
}

.list2 > a：hover {
  color: orange;
}

.tab {
  font-size: 16px;
  float: left;
  margin-top: 50px;
  /* border: 1px solid; */
}

.tab > span {
  list-style: none;
  float: left;
  height: 30px;
  line-height: 43px;
  text-align: center;
}

.sel:hover {
  cursor: pointer;
  color: orange;
}

.el-dropdown-link {
  cursor: pointer;
  font-size: 17px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}

.el-icon-arrow-down {
  font-size: 12px;
}

#pull {
  line-height: 20px;
  font-size: 1.2vw;

  width: 285px;
}

#aa {
  text-decoration: none;
  color: grey;
}

.login-a {
  text-decoration: none;
  color: white;
}

.menuu {
  width: 500px;
}
.menuu {
  .el-dropdown-menu__item {
    display: inline-block;
    width: 109px;
    // border: 1px solid;
    margin-left: 14px;
  }
}
.tab {
  margin-top: 40px;
  .el-button {
    background: transparent;
    color: white;
    font-size: 16px;
  }
}
</style>
<style lang="scss">
</style>
