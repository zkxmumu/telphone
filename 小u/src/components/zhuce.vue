<template>
  <div>
    <router-view></router-view>
    <div class="inner">
      <header class="header">
        <a href="javascript:;">&lt;</a>
        <h2>注册</h2>
        <router-link to="/denglu">登录</router-link>
      </header>
      <div class="main">
        <div class="tel">
          昵称：<input
            type="text"
            class="form-control"
            v-model="user.nickname"
          />
        </div>
        <div class="tel">
          手机号：<input
            type="text"
            class="form-control"
            v-model="user.phone"
          />
        </div>
        <div class="tel">
          密码：<input
            type="password"
            class="form-control"
            v-model="user.password"
          />
        </div>
        <!-- <div class="tel">
          验证码：<input type="text" class="form-control" v-model="user.cap" />
        </div> -->
        <button @click="register" class="btn btn-danger">注册</button>
        <div class="xieyi">
          <input
            type="checkbox"
            v-model="user.xieyi"
          />我已阅读并同意使用条款和隐私政策
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRegister } from "../util/axios";
export default {
  data() {
    return {
      user: {
        phone:'',
        nickname:'',
        password:'',
      },
      studentInfo: [],
    };
  },
  methods: {
    register() {
      if (
        this.user.nickname == "" ||
        this.user.phone == "" ||
        this.user.password == "" 
      ) {
        alert("请输入");
      } else {
        // console.log(this, "register");
        // this.studentInfo.push(this.user);
        // localStorage.setItem("stu", JSON.stringify(this.studentInfo));
        
        getRegister(this.user)
        .then(res=>{
          console.log(res,"res");
          if(res.code==200){
            this.$router.push("/denglu")
          }
        })
      }
    },
  },
  components: {
    

  },
};
</script>

<style lang="" scoped>
.inner {
  width: auto;
  margin: 0 auto;
}

.header {
  background-color: orange;
  padding: 0 0.5rem;
  display: flex;
  justify-content: space-between;
}

.header a {
  color: white;
  line-height: 2rem;
  font-size: 0.5rem;
}

.header h2 {
  color: white;
  line-height: 2rem;
  font-size: 0.5rem;
}

.main .tel {
  width: 80%;
  margin: 0 auto;
  font-size: 0.3rem;
  line-height: 1.5rem;
  border-bottom: 0.1rem solid #999;
}

.btn {
  width: 70%;
  line-height: 1rem;
  border: 0px solid transparent;
  background: orange;
  border-radius: 0.3rem;
  text-align: center;
  font-size: 0.5rem;
  color: #fff;
  margin-left: 1rem;
  margin-top: 1rem;
}

.xieyi {
  line-height: 1rem;
  margin-left: 1.5rem;
}
</style>







         