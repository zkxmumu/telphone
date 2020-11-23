<template>
  <div>
    <router-view></router-view>
    <div class="page">
      <!-- 头部 -->
      <header class="headcon">
          <router-link to="/cart">
          <img src="@/assets/images/arrowLeft (2).jpg" alt="" /></router-link>
        
        <p>确认订单</p>
        <p class="meau">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </header>

      <!-- banner -->
      <div class="banner">
        <div class="zi">
          <div class="top">
            <p>收货人:YunSu</p>
            <p>10000000000</p>
          </div>
          <div class="xia clearfix">
            <div class="huo"><p class="fl">收货地址:</p></div>
            <div>
              <p class="fr">北京市海淀区隐泉路清林苑6号楼中公优就业总部三层</p>
            </div>
          </div>
        </div>

        <div class="pic">
          <a href="">
            <img src="@/assets/images/arrowRight.jpg" alt="" />
          </a>
        </div>
      </div>

      <!-- nav -->
      <nav class="navbar">
        <div class="box">
          <div class="box1">
            <div class="left clearfix">
              <img src="@/assets/images/shop_4.jpg" alt="" />
              <div class="zi fr">
                <p class="p1">雅诗兰黛护肤霜</p>
                <p class="p2">规格：50g</p>
              </div>
            </div>

            <p class="p3">&yen;123.00</p>
          </div>
          <div class="box2">
            <p>购买数量：</p>
            <div
              class="kuang"
              v-for="(item, index) in carddlist"
              :key="item.id"
            >
              <a class="one" href="javascript:;" @click="jian(index)">-</a>
              <span id="span">{{ item.numm }}</span>
              <a class="one two" href="javascript:;" @click="add(index)">+</a>
            </div>
          </div>
          <div class="box3">
            <p>配送方式：</p>
            <p>xx快递</p>
          </div>
        </div>
      </nav>

      <div class="navbar2">
        <div class="shang">
          <p>优惠券</p>
          <p>无可用</p>
        </div>
      </div>

      <div class="navbar3">
        <div class="xia">
          <p>使用积分</p>
          <div class="right">
            <input type="text" placeholder="输入积分" />
            <a href="">使用</a>
            <p>可用<span>50</span>积分</p>
          </div>
        </div>
      </div>

      <!-- main -->
      <div class="main">
        <div class="left">
          <p>商品金额</p>
          <p>运费</p>
          <p>优惠券</p>
          <p>会员折扣</p>
          <p>积分折扣</p>
        </div>
        <div class="right">
          <p>&yen;{{ all }}</p>
          <p>+&yen;0.00</p>
          <p>-&yen;0.00</p>
          <p>-&yen;0.00</p>
          <p>-&yen;0.00</p>
        </div>
      </div>

      <div class="main1 clearfix">
        <p class="fr">
          实付金额 <span>&yen;{{ all }}</span>
        </p>
      </div>
      <div class="main2">
        <input type="submit" value="提交订单" />
      </div>
      <div class="komg"></div>
    </div>
    <navv></navv>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carddlist: [
        {
          numm: 1,
          price: "123",
        },
      ],
    };
  },
  methods: {
    add(index) {
      //   console.log(index,"索引");
      this.carddlist[index].numm++;
    },
    jian(index) {
      if (this.carddlist[index].numm <= 1) {
        alert("可怜可怜吧");
      } else {
        this.carddlist[index].numm--;
      }
    },
  },
  computed: {
    all() {
      let sum = 0;
      this.carddlist.map((itemm, idx, arr) => {
        sum += itemm.numm * itemm.price;
      });
      return sum
    },
  },
  components: {},
};
</script>

<style lang="" scoped>
@import "../assets/css/cartdd.css";
#span {
  font-size: 30px;
}
</style>
