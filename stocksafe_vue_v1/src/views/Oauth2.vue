<template>
  <div class="container"></div>
</template>

<script>
import http from "@/utils/http-common.js";

export default {
  name: "Oauth2",
  created() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    http
      .post(`/login/oauth/google`, {
        code: code,
      })
      .then((res) => {
        this.data = res.data;
        // ^^서버에서 로그인 성공인지 아닌지 알려주라
      });
  },
};
</script>

<style></style>
