<template>
  <div>
    <router-view></router-view>
    <div class="page">
      <!-- 头部 -->
      <header class="headcon">
        <img
          src="@/assets/images/arrowLeft.jpg"
          alt=""
          @click="$router.back()"
        />

        <router-link to="/home">
          <img src="@/assets/images/logo.jpg" alt="" />
        </router-link>
        <p class="meau">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </header>

      <div class="banner">
        <em></em>
        <input type="search" placeholder="搜索商品" />
      </div>

      <div class="main">
        <div class="one one1" v-for="item in listlist" :key="item.id">
          <div class="tu"  @click="tiao(item.id)">
            <img :src="item.img?$imgUrl+item.img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg'" alt="" />
          </div>
          <div class="word">
            <h3>
              {{ item.goodsname }}
            </h3>
            <p class="yen">&yen;{{ item.price.toFixed(2) }}</p>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getGoods } from "../util/axios";
export default {
  data() {
    return {
     listlist:[]
    };
  },
  mounted() {
    this.getGoodsLIst();
  },
  methods: {
    getGoodsLIst() {
      getGoods({ fid:this.$route.query.id }).then((res) => {
        console.log(res, "res");
        if(res.code==200){
          this.listlist=res.list
        }
      });
      
    },
    tiao(id){
        this.$router.push("/xiangqing?id="+id)
      }
  },
  components: {},
};
</script>

<style lang="" scoped>
@import "../assets/css/list.css";
</style>
