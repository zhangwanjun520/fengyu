<template>
  <div class="passage">
    <!-- 智慧社区通行类 -->
    <div class="banner">
      <div class="cont1">
        <p>智慧通行</p>
        <p>智能管理是一套集合（智慧社区、智慧楼宇、智慧办公）为一体的综合管理平台， 用户只需一个账号，即可管理多个系统，每个系统都有自己独立的管理权限，使管理者更方便 管理各个系统，让管理更简单。</p>
        <p class="btn">

          <el-button>
            <a href="https://ai.sscai.club/login">立即使用</a>
          </el-button>
        </p>
      </div>
    </div>
    <!-- 通行类 -->
    <div class="passage-type">
      <p>通行类</p>
      <ul>
        <li @click="goDetail(1)">
          <p>
            <img src="../assets/productionCenter/passage/img1.png" alt />
          </p>
          <p>辊型闸机</p>
        </li>
        <li  @click="goDetail(2)">
          <p>
            <img src="../assets/productionCenter/passage/img5.png" alt />
          </p>
          <p>翼型闸机</p>
        </li>
        <li  @click="goDetail(3)">
          <p>
            <img src="../assets/productionCenter/passage/img3.png" alt />
          </p>
          <p>摆型闸机</p>
        </li>
        <li  @click="goDetail(4)">
          <p>
            <img src="../assets/productionCenter/passage/img4.png" alt />
          </p>
          <p>十字旋门</p>
        </li>
        <li>
          <p>
            <img src="../assets/productionCenter/passage/img2.png" alt />
          </p>
          <p style="color:#666666">幼儿园摆闸</p>
        </li>
      </ul>
      <p class="tip">特殊闸机：可根据各种应用场景按照甲方需求设计</p>
      <div class="clearFloat"></div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    goDetail(idx){
      this.$router.push({
        path:`/${idx}`,
         query:{
           id:idx
         }
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 680px;
  background: url("../assets/productionCenter/passage/banner.png") center
    no-repeat;
  background-size: cover;
  .cont1 {
    width: 800px;
    height: 380px;
    margin: auto;
    border: 1px solid transparent;
    p {
      color: white;
      font-size: 19px;
      line-height: 45px;
    }
    p:nth-child(1) {
      font-size: 34px;
      margin-top: 180px;
    }
  }
}
.btn {
  margin-top: 40px;
  .el-button {
    background: transparent;
    color: white;
    width: 150px;
    height: 50px;
    font-size: 18px;
  }
}
// 通行类
.passage-type {
  width: 900px;
  margin: 80px auto;
  // border: 1px solid;
  p:nth-child(1) {
    text-align: center;
    font-size: 30px;
    // margin-top: 70px;
    color: #666666;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 350px;
      margin-left: 50px;
      // border: 0.01rem dashed;
      margin-top: 20px;
      img {
        width: 100%;
      }
      p {
        text-align: center;
        font-size: 18px;
        color: #3988fc;
      }
    }
  }
  .tip {
    width: 82%;
    margin: auto;
    font-size: 12px;
    color: #666666;
  }
}
.clearFloat {
  clear: both;
}
</style>

