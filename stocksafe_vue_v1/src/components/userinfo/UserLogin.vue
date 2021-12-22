<template>
  <form class="user">
    <div class="form-group">
      <input
        type="text"
        class="form-control form-control-user"
        id="exampleInputEmail"
        aria-describedby="emailHelp"
        placeholder="Enter Email Address..."
        v-model="login_user.id"
      />
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control form-control-user"
        id="exampleInputPassword"
        placeholder="Password"
        v-model="login_user.pw"
      />
    </div>
    <div class="form-group">
      <div class="custom-control custom-checkbox small">
        <input type="checkbox" class="custom-control-input" id="customCheck" />
        <label class="custom-control-label" for="customCheck"
          >Remember Me</label
        >
      </div>
    </div>
    <button class="btn btn-primary btn-user btn-block" @click="Login()">
      Login
    </button>
    <hr />
    <a href="index.html" class="btn btn-google btn-user btn-block">
      <i class="fab fa-google fa-fw"></i> Login with Google
    </a>
    <a href="index.html" class="btn btn-facebook btn-user btn-block">
      <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
    </a>
    <hr />
    <div class="text-center">
      <router-link class="small" :to="{ name: 'UserPassword' }"
        >Forgot Password?</router-link
      >
    </div>
    <div class="text-center">
      <a class="small" href="register.html">Create an Account!</a>
    </div>
  </form>
</template>

<script>
import http from "@/utils/http-common.js";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      login_user: { id: "", pw: "" },
    };
  },
  methods: {
    ...mapMutations(["SET_LOGIN_STATE"]),
    Login() {
      http
        .post(`/member/login`, {
          id: this.login_user.id,
          memberPw: this.login_user.pw,
        })
        .then(({ data }) => {
          let msg = "아이디 혹은 비밀번호를 확인해주세요.";
          if (data != "") {
            msg = "로그인 성공";
            this.SET_LOGIN_STATE({
              id: this.login_user.id,
              name: data,
            });
            alert(msg);
            this.$router.push({ name: "Home" });
          } else alert(msg);
        });
    },
  },
};
</script>

<style></style>
