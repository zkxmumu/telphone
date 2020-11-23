<template>
  <div>
    <div class="page">
      <header class="headcon">
        <a href="javascript:;"><img src="@/assets/images/logo.jpg" alt="" /></a>
        <input class="search" type="search" placeholder="寻找商品" />
        <p class="meau">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </header>

      <nav class="navbar">
        <ul class="clearfix">
          <li v-for="(item, index) in indexlist" :key="item.id">
            <a href="#" :class="index === num ? 'cur' : ''" @click="a(index)">{{
              item.name
            }}</a>
          </li>
        </ul>
        <div class="arrow"></div>
      </nav>

      <!-- 轮播图 -->
      <div class="banner">
        <!-- <a href="#">
          <img src="@/assets/images/banner.jpg" alt="img" />
        </a> -->
        <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="item in bannerList" :key="item.id">
            <img :src="$imgUrl + item.img" alt="" class="lunboimg" />
          </van-swipe-item>
        </van-swipe> -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in bannerList" :key="item.id">
              <img class="lunbo" :src="$imgUrl + item.img" alt=""  />
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <!-- icon -->
      <ul class="icon">
        <!-- <li v-for="item1 in index1list" :key="item1.id">
          <a href="#">
            <img :src="item1.img" alt="" />
            <p>{{ item1.text }}</p>
          </a>
        </li> -->
        <van-grid :column-num="4" :border="false" :gutter="30">
          <van-grid-item icon="underway-o" text="限时抢购" />
          <van-grid-item icon="send-gift-o" text="积分商城" />
          <van-grid-item icon="phone-o" text="联系我们" />
          <van-grid-item to="/sort" icon="apps-o" text="商品分类" />
        </van-grid>
      </ul>

      <!-- main -->
      <div class="main">
        <div class="left">
          <img src="@/assets/images/timer.jpg" alt="" />
          <p class="xianshi">限时秒杀</p>
          <p class="zero">每天零点场 好货秒不停</p>
          <div class="time clearfix">
            <span class="one">02</span>
            <span class="two">:</span>
            <span class="one">16</span>
            <span class="two">:</span>
            <span class="one">45</span>
            <span class="miao">秒杀</span>
          </div>
          <div class="tu">
            <img src="@/assets/images/shop_5.jpg" alt="" />
            <div>&yen;14.8</div>
          </div>
        </div>
        <div class="right">
          <div class="top clearfix">
            <div class="left1 fl">
              <p class="pin">品牌上新</p>
              <p class="every">每日9点 抢大牌</p>
              <img src="@/assets/images/brand.jpg" alt="" />
            </div>
            <div class="right1 fr">
              <img src="@/assets/images/shop_1.jpg" alt="" />
            </div>
          </div>
          <div class="bottom">
            <div class="le">
              <p class="p1">每日十件</p>
              <p class="p2">只为你选好货</p>
              <img src="@/assets/images/shop_2.jpg" alt="" />
            </div>
            <div class="ri">
              <p class="p1">拼啊</p>
              <p class="p2">超级好价拼团</p>
              <img src="@/assets/images/shop_3.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <!-- guanggao -->
      <div class="guanggao">
        <img src="@/assets/images/bar.jpg" alt="" />
      </div>

      <div class="neirong">
        <!-- <a href="#" class="hot">热门推荐</a>
          <a href="#">发现好货</a>
          <a href="#">只看专场</a>
          <a href="#">只看商品</a> -->
        <van-tabs type="card">
          <van-tab title="发现好货">
            <van-card
              v-for="item in newList"
              :key="item.id"
              :price="item.price.toFixed(2)"
              :title="item.goodsname"
              :thumb="
                item.img
                  ? $imgUrl + item.img
                  : 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2709866189,4129601854&fm=26&gp=0.jpg'
              "
            />
          </van-tab>
          <van-tab title="热门推荐">
            <van-card
              v-for="item in hotList"
              :key="item.id"
              :price="item.price.toFixed(2)"
              :title="item.goodsname"
              :thumb="
                item.img
                  ? $imgUrl + item.img
                  : 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2709866189,4129601854&fm=26&gp=0.jpg'
              "
            />
          </van-tab>

          <van-tab title="所有商品">
            <van-card
              v-for="item in goodsList"
              :key="item.id"
              :price="item.price.toFixed(2)"
              :title="item.goodsname"
              :thumb="
                item.img
                  ? $imgUrl + item.img
                  : 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2709866189,4129601854&fm=26&gp=0.jpg'
              "
            />
          </van-tab>
        </van-tabs>
        <div id="kong"></div>
      </div>
    </div>
    <navv></navv>
  </div>
</template>

<script>
import Swiper from "swiper";
import { getBanner, getIndexGoods } from "../util/axios";
export default {
  data() {
    return {
      num: 0,
      bannerList: [],
      newList: [],
      hotList: [],
      goodsList: [],
      indexlist: [
        {
          id: 1,
          name: "推荐",
        },
        {
          id: 2,
          name: "女装",
        },
        {
          id: 3,
          name: "鞋包",
        },
        {
          id: 4,
          name: "居家",
        },
        {
          id: 5,
          name: "母婴儿童",
        },
        {
          id: 6,
          name: "美食",
        },
        {
          id: 7,
          name: "男装",
        },
      ],
    };
  },
  mounted() {
    this.getlunbo();
    this.getIndexGoodsList();
  },
  methods: {
    a(index) {
      console.log(index, "索引");
      this.num = index;
    },
    getlunbo() {
      getBanner().then((res) => {
        if (res.code == 200) {
          this.bannerList = res.list;
          console.log(this.bannerList, "123456789");
          this.$nextTick(() => {
            var swiper = new Swiper(".swiper-container", {
              loop: true,
              autoplay: {
                delay: 1000,
              },
            });
          });
        }
      });
    },
    getIndexGoodsList() {
      getIndexGoods().then((res) => {
        if (res.code == 200) {
          this.newList = res.list[0].content;
          this.hotList = res.list[1].content;
          this.goodsList = res.list[2].content;
        }
      });
    },
  },
  components: {
    // navv
  },
};
</script>

<style lang="" scoped>
@import "../assets/css/index.css";
.lunbo{
  width: 100%;
  height: 200px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
#kong {
  margin-bottom: 4rem;
}
</style>
