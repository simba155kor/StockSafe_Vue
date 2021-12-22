<template>
  <form class="user">
    <div class="form-group">
      <input
        type="text"
        class="form-control form-control-user"
        id="exampleInputEmail"
        aria-describedby="emailHelp"
        placeholder="Enter Email Address..."
        v-model="user_id"
      />
    </div>
    <button class="btn btn-primary btn-user btn-block" @click="findPW()">
      Reset Password
    </button>
  </form>
</template>

<script>
import http from "@/utils/http-common.js";

export default {
  data() {
    return {
      user_id: "",
    };
  },
  methods: {
    findPW() {
      console.log(this.user_id);
      http
        .post(`/member/findPW`, {
          id: this.user_id,
        })
        .then(({ data }) => {
          let msg = "없는 아이디입니다.";
          if (data.message != "fail") {
            msg = "메일을 전송하였습니다.";
            alert(msg);
          } else alert(msg);
        });
    },
  },
};
</script>

<style></style>
