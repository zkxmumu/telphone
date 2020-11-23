<template>
  <div>
    <div class="page">
      <!-- 头部 -->
      <header class="headcon">
        <img
          src="@/assets/images/arrowLeft (2).jpg"
          alt=""
          @click="$router.back()"
        />
        <p>商品详情</p>
        <p class="meau">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </header>

      <!-- banner -->
      <div v-for="item in goods" :key="item.id">
        <div class="banner">
          <img
            :src="
              item.img
                ? $imgUrl + item.img
                : 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg'
            "
            alt=""
          />
          <div class="wenzi">
            <p class="p1">
              {{ item.goodsname }}
            </p>
            <p class="mon">
              &yen;{{ item.price }}<span>(此价格不与套装优惠同时享受)</span>
            </p>
          </div>
        </div>

        <!-- nav -->
        <nav class="navbar">
          <div class="one">
            <div class="left clearfix">
              <p class="cu fl">促销：</p>
              <p class="jian fl">满减</p>
              <p class="zhe fl">满2件9折；3件8折</p>
            </div>
            <div class="right">
              <img src="@/assets/images/arrow.jpg" alt="" />
            </div>
          </div>
          <div class="two">
            <div class="box2">
              <p>购买数量：</p>
              <div class="right1">
                <!-- <a class="one" href="">-</a>
                <span>1</span>
                <a class="one two1" href="">+</a> -->
                <van-stepper v-model="value" />
              </div>
            </div>
          </div>
          <div class="three">
            <div class="top">
              <p>商品属性</p>
              <img src="@/assets/images/arrow.jpg" alt="" />
            </div>
            <div class="bottom">
              <p>{{ item.specsname }}</p>
              <div class="lianjie">
                <!-- <a href="" class="duo" v-for="item in specsAttr" :key="item">{{item}}</a> -->
                <van-tag
                  class="duo"
                  type="success"
                  v-for="(item2, index) in specsAttr"
                  :key="index"
                  >{{ item2 }}</van-tag
                >
                <!-- <span>{{item.specsattr}}</span> -->
                <!-- <van-tag v-for="item in specsAttr" :key="item" type="success">{{item}}</van-tag> -->
              </div>
            </div>
          </div>
        </nav>

        <!-- main -->
        <div class="main">
          <p>{{ item.description }}</p>
        </div>

        <div class="main1">
          <div class="top">
            <p>商品评价</p>
          </div>
          <div class="center">
            <p class="shu">1235668fg</p>
            <p>效果很好，物流到位，下次继续来！</p>
            <div class="pic">
              <img src="@/assets/images/picDetail_8.jpg" alt="" />
              <img src="@/assets/images/picDetail_9.jpg" alt="" />
              <img src="@/assets/images/picDetail_10.jpg" alt="" />
            </div>
          </div>
          <div class="shijian">
            <p>2020-01-13</p>
          </div>

          <div class="bottom">
            <p>共 <span>1000</span>+条评论</p>
            <a href="">查看更多></a>
          </div>
        </div>

        <div class="main2">
          <div class="left">
            <a href="cart.html">
              <img src="@/assets/images/iconCart.jpg" alt="" />
            </a>

            <div class="dot">2</div>
            <p>购物车</p>
          </div>
          <div class="r">
            <a href="javascript:;" class="r1" @click="adD">加入购物车</a>
            <a href="javascript:;" class="r2">立即购买</a>
          </div>
        </div>
      </div>
      <div class="kong"></div>
    </div>
  </div>
</template>

<script>
import { getGoodsInfo, getCartList ,getCartAdd} from "../util/axios";
import {Toast} from "vant";
export default {
  data() {
    return {
      goods: [],
      value: 1,
      specsAttr: [],
    };
  },
  mounted() {
    this.getgoodsinfo();
  },
  methods: {
    getgoodsinfo() {
      getGoodsInfo({
        id: this.$route.query.id,
      }).then((res) => {
        if (res.code == 200) {
          this.goods = res.list;
          this.specsAttr = res.list[0].specsattr
            ? res.list[0].specsattr.split(",")
            : [];
          console.log(this.goods, "this.goods");
        }
      });
    },
    adD() {
      if (sessionStorage.getItem("userInfo")) {
        getCartAdd({
          uid: JSON.parse(sessionStorage.getItem("userInfo")).uid,
          goodsid: this.goods[0].id,
          num: this.value,
        }).then((res) => {
          console.log(res);
          if (res.code == 200) {
            console.log(res);
            this.$router.push({
              path:"./cart",
              query:{
                id:JSON.parse(sessionStorage.getItem("userInfo")).uid,
              }
            });
          }
        });
      } else {
        Toast.fail("请先登录");
        this.$router.push("/denglu");
      }
    },
  },
  components: {},
};
</script>

<style lang="" scoped>
@import "../assets/css/xiangqing.css";
</style>
