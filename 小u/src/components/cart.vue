<template>
  <div>
    <!-- <h1>我是购物车</h1> -->
    <div class="page">
      <!-- 头部 -->
      <header class="headcon">
        <a href="#"><img src="@/assets/images/arrowLeft (2).jpg" alt="" /></a>
        <p>购物车</p>
        <p class="meau">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </header>

      <div v-if="cartlist">
        <div class="banner" v-for="item in cartlist" :key="item.id">
          <input type="checkbox" v-model="item.clickch" @change="danxuan" />
          <van-swipe-cell>
            <van-card
              :num="item.num"
              :price="item.price.toFixed(2)"
              desc="hhh"
              :title="item.goodsname"
              class="goods-card"
              :thumb="
                item.img
                  ? $imgUrl + item.img
                  : 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2583035764,1571388243&fm=26&gp=0.jpg'
              "
            >
              <template #footer>
                <div>
                  <van-stepper
                    v-model="item.num"
                    theme="round"
                    button-size="22"
                    disable-input
                  />
                </div>
              </template>
            </van-card>
            <template #right>
              <van-button
                square
                text="删除"
                type="danger"
                class="delete-button"
                @click="sclist(item.id)"
              />
            </template>
          </van-swipe-cell>
        </div>
      </div>

      <div v-else>
        <van-empty description="空空如也，快去买买买" />
      </div>
      <div>
       
        <van-submit-bar v-for="item in cartlist" :key="item.id"
        :price="allPrice"
          button-text="提交订单"
          class="main"
         v-model="allPrice"
        >
          <input type="checkbox" v-model="allchilk" @change="allchecked" />
        </van-submit-bar>
      </div>

      <div class="kong"></div>
    </div>
    <navv></navv>
  </div>
</template>

<script>
import { getCartList, getCartDelete } from "../util/axios";
export default {
  data() {
    return {
      n: -1,
      num: 0,
      value: 1,
      allchilk: false,
      cartlist: [],
      sum:0
    };
  },
  mounted() {
    this.getCartListInfo();
  },
  methods: {
    getCartListInfo() {
      getCartList({
        uid: this.$route.query.id,
      }).then((res) => {
        let tt = res.list.map((item, index) => {
          item.clickch = false;
          return item;
        });
        this.cartlist = tt;
        
      });
    },
    danxuan() {
      let r = this.cartlist.every((item, index) => {
        return item.clickch;
      });
      this.allchilk = r;
    },
    sclist(id) {
      getCartDelete({ id }).then((res) => {
        if (res.code == 200) {
          this.getCartListInfo();
        }
      });
    },
    allchecked() {
      this.cartlist.map((item, index) => {
        item.clickch = this.allchilk;
      });
    },
    all() {
      console.log(all, "all");
    },
  },
  computed: {
    allPrice() {
      let sum =0
      this.cartlist.map((item, index) => {
      sum += item.price * item.num;
      console.log(sum,"sumsumsum");
      })
      let a=sum+'00'
      return Number(a)
    }
  },
};
</script>

<style lang="" scoped>
@import "../assets/css/cart.css";
.goods-card {
  margin: 0;
  background-color: #fff;
}

.delete-button {
  height: 100%;
}
.banner {
  display: flex;
}
.van-swipe-cell {
  flex: 1;
}
.kong {
  margin-bottom: 3rem;
}
</style>
