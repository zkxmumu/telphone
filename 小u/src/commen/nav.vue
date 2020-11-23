<template>
  <div>
       <div class="footer">
      <router-link to="/home" active-class="select"  class="iconfont icon-shouye-xianxing">首页
      </router-link>
      <router-link to="/cart"  active-class="select" class="iconfont icon-gouwuche">购物车</router-link>
      <router-link to="/mine" active-class="select" class="iconfont icon-wode">我的</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style lang="" scoped>
.footer{
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
   
    background: #ccc;
    height: 1rem;
    line-height: 1rem;
    display: flex;
}
.footer a{
    font-size: .5rem;
    flex: 1;
    color: #fff;
    display: inline-block;
    text-align: center;
}
.select{
    background: #ff0;
    color: red !important;
    /* font-size: .5rem !important; */
    
}

</style>
