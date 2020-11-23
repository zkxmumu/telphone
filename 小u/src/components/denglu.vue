<template>
  <div>
      <router-view></router-view>
    <div class="inner">
      <header class="header">
          <a href="javascript:;">&lt;</a>
        <h2>登录</h2>
        <router-link to="/zhuce">注册</router-link>
      </header>
      <div class="main">
        <div class="tel">
          手机号：<input
            type="text"
            class="form-control"
            v-model="user.phone"
            @blur="blur"
          />
        </div>
        <div class="tel">
          密码：<input
            type="password"
            class="form-control"
            v-model="user.password"
          />
        </div>
        <button class="btn btn-danger" @click="login" >登录</button>
        <button class="btn btn-danger" @click="$router.push('/zhuce')" >未注册先去注册</button>
      </div>
    </div>
  </div>
</template>

<script>
import {getLogin} from "../util/axios"
export default {
  data() {
    return {
      user: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      // let [a] = JSON.parse(localStorage.getItem("stu"));
        getLogin(this.user)
        .then(res=>{
          if(res.code==200){
            sessionStorage.setItem("userInfo",JSON.stringify(res.list))
            this.$router.push("/mine")
          }
        })
    },
    blur() {
      if (this.user.telphone == "" && this.user.password == "") {
        alert("请输入手机号或密码");
      }
    },
   
  },
  components: {},
};
</script>

<style lang="" scoped>
.inner {
  width: auto;
  margin: 0 auto;
}

.header {
  background-color: orange;
  padding: 0 .5rem;
  display: flex;
  justify-content: space-between;
}

.header a {
  color: white;
  line-height: 2rem;
  font-size: .5rem;
}

.header h2 {
  color: white;
  line-height: 2rem;
  font-size: .5rem;
}
.main{
  margin-top:2rem ;
}
.main .tel {
  width: 80%;
  margin: 0 auto;
  font-size: .2rem;
  line-height: 1rem;
  border-bottom: 0.1rem solid #999;
}

.main .wang {
  display: block;
  font-size: .3rem;
  line-height: 2rem;
  text-align: right;
  margin-right: 2rem;
  color: rgb(172, 170, 170);
}

.btn {
  width: 70%;
  line-height: .8rem;
  margin: .5rem 0;
  border: 0px solid transparent;
  background: orange;
  border-radius: 0.3rem;
  text-align: center;
  font-size: .3rem;
  color: #fff;
  margin-left: 1rem;
}

</style>
