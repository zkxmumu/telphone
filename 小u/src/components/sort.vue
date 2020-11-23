<template>
  <div>
    <router-view></router-view>
    <div class="page">
      <!-- 头部 -->
      <header class="headcon">
        <img
          src="@/assets/images/arrowLeft (2).jpg"
          alt=""
          @click="$router.back()"
        />

        <p>商品分类</p>
        <p class="meau">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </header>
      <div class="main">
        <div class="left">
          <ul>
            <van-sidebar v-model="activeKey" @change="onChange">
              <van-sidebar-item
                v-for="item in leftlist"
                :key="item.id"
                :title="item.catename"
              />
            </van-sidebar>
          </ul>
        </div>
        <div class="right clraefix">
          <div class="title">
            <h3 class="fl">洗发类</h3>
            <a href="javascript:;" class="fr">更多 ></a>
          </div>
          <van-grid :border="false" :column-num="3" >
            <van-grid-item v-for="item in rightlist" :key="item.id" :to="'/list?id='+item.id">
              <img class="imgtu"
                :src="
                  item.img
                    ? $imgUrl + item.img
                    : 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg'
                "
                alt=""
              />
              <p>{{item.catename}}</p>
            </van-grid-item>
          </van-grid>
          <!-- <div class="pic">
            <div class="one" v-for="item2 in rightlist1" :key="item2.id">
              <img :src="item2.img" alt="" />
              <p>{{ item2.text }}</p>
            </div>
          </div>
          <div class="pic pic1">
            <div class="one" v-for="item2 in rightlist1" :key="item2.id">
              <img :src="item2.img" alt="" />
              <p>{{ item2.text }}</p>
            </div>
          </div>
          <div class="title1">
            <h3 class="fl">染发类</h3>
            <a href="javascript:;" class="fr">更多 ></a>
          </div>
          <div class="pic2">
            <div class="one" v-for="item1 in rightlist2" :key="item1.id">
              <img :src="item1.img" alt="" />
              <p>{{ item1.text }}</p>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCateTree } from "../util/axios";
export default {
  data() {
    return {
      num: 0,
      activeKey: 0,
      // leftlist: [
      //   {
      //     id: "1",
      //     name: "施华蔻",
      //   },
      //   {
      //     id: "2",
      //     name: "沙宣",
      //   },
      //   {
      //     id: "3",
      //     name: "欧莱雅",
      //   },
      //   {
      //     id: "4",
      //     name: "潘婷",
      //   },
      //   {
      //     id: "5",
      //     name: "资生堂",
      //   },
      //   {
      //     id: "6",
      //     name: "阿道夫",
      //   },
      //   {
      //     id: "7",
      //     name: "卡诗",
      //   },
      //   {
      //     id: "8",
      //     name: "海飞丝",
      //   },
      // ],
      leftlist: [],
      rightlist: [],
    };
  },
  mounted() {
    this.getCateTreeList();
  },

  methods: {
    a(index) {
      this.num = index;
    },
    getCateTreeList() {
      getCateTree().then((res) => {
        if (res.code == 200) {
          this.leftlist = res.list;
          this.rightlist = res.list[this.activeKey].children;
          console.log(this.rightlist, "this.rightlist");
        }
      });
    },
    onChange(id) {
      this.rightlist = this.leftlist[id].children;
    },
  },
  components: {},
};
</script>

<style lang="" scoped>
@import "../assets/css/fenlei.css";
.imgtu{
  width: 100%;
}
.van-grid{
  width: 100%;
}
</style>
