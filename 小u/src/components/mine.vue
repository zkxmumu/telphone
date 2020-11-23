<template>
  <div>
    <!-- <h1>我是个人中心</h1> -->
    <div class="page">
      <!-- 头部 -->
      <header class="headcon">
        <a href="javascript:;"
          ><img src="@/assets/images/arrowLeft (2).jpg" alt=""
        /></a>
        <p>我的订单</p>
        <p class="meau">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </header>

      <div v-if="!userInfo" id="buxianshi">
        <van-image
          round
          width="2.2rem"
          height="2rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <p style="font-size: 1rem">{{userInfo.nickname}}</p>
        <div id="buttondl">
          <button @click="$router.push('/denglu')">未登录，请先去登录</button>
        </div>
      </div>
      <div v-else>
        <!-- banner -->
        <div class="banner">
          <div class="p clearfix">
            <img src="@/assets/images/mine.png" class="fl" alt="" />
            <div class="zi fr">
              <p class="name fl">欢迎{{userInfo.nickname}}用户登录</p>
            </div>
          </div>

          <a href="javascript:;" @click="tuichu">退出登录</a>
        </div>

        <!-- nav -->
        <nav class="navbar">
          <ul>
            <li>
              <a href="javascript:;">
                <img src="@/assets/images/iconMine_1.jpg" alt="" />
                <p>全部订单</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="@/assets/images/iconMine_2.jpg" alt="" />
                <p>代付款</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="@/assets/images/iconMine_3.jpg" alt="" />
                <p>待收货</p>
              </a>
            </li>
          </ul>
        </nav>

        <!-- main -->
        <div class="main">
          <div class="one clearfix">
            <img class="fl" src="@/assets/images/iconMine_4.jpg" alt="" />
            <p class="fl">地址管理</p>
            <a href="javascript:;" class="fr">
              <img src="@/assets/images/arrowRight.jpg" alt="" />
            </a>
          </div>
          <div class="one two clearfix">
            <img class="fl" src="@/assets/images/iconMine_5.jpg" alt="" />
            <p class="fl">钱包</p>
            <a href="javascript:;" class="fr">
              <p class="fl">200余额</p>
              <img src="@/assets/images/arrowRight.jpg" alt="" />
            </a>
          </div>

          <div class="one clearfix">
            <img class="fl" src="@/assets/images/iconMine_6.jpg" alt="" />
            <p class="fl">我的优惠券</p>
            <a href="javascript:;" class="fr">
              <img src="@/assets/images/arrowRight.jpg" alt="" />
            </a>
          </div>
          <div class="one clearfix">
            <img class="fl" src="@/assets/images/iconMine_7.jpg" alt="" />
            <p class="fl">我的二维码</p>
            <a href="javascript:;" class="fr">
              <img src="@/assets/images/arrowRight.jpg" alt="" />
            </a>
          </div>
          <div class="one clearfix">
            <img class="fl" src="@/assets/images/iconMine_8.jpg" alt="" />
            <p class="fl">我的小伙伴</p>
            <a href="javascript:;" class="fr">
              <img src="@/assets/images/arrowRight.jpg" alt="" />
            </a>
          </div>
          <div class="kong"></div>
        </div>
      </div>
    </div>
    <navv></navv>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: "",
    };
  },
  mounted() {
    this.userInfo = sessionStorage.getItem("userInfo")
      ? JSON.parse(sessionStorage.getItem("userInfo"))
      : "";
  },
  methods: {
    tuichu() {
      sessionStorage.removeItem("userInfo");
      this.$router.push("/home");
    },
  },
  components: {},
};
</script>

<style lang="" scoped>
@import "../assets/css/mine.css";
</style>
