<template>
  <form class="user">
    <div class="form-group">
      <input
        type="text"
        class="form-control form-control-user"
        id="id"
        placeholder="ID"
        readonly
      />
    </div>
    <div class="form-group row">
      <div class="col-sm-6 mb-3 mb-sm-0">
        <input
          type="password"
          class="form-control form-control-user"
          id="exampleInputPassword"
          placeholder="Password"
        />
      </div>
      <div class="col-sm-6">
        <input
          type="password"
          class="form-control form-control-user"
          id="exampleRepeatPassword"
          placeholder="Repeat Password"
        />
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-6 mb-3 mb-sm-0">
        <input
          type="text"
          class="form-control form-control-user"
          id="firstName"
          placeholder="First Name"
        />
      </div>
      <div class="col-sm-6">
        <input
          type="text"
          class="form-control form-control-user"
          id="lastName"
          placeholder="Last Name"
        />
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-6 mb-3 mb-sm-0">
        <input
          type="text"
          class="form-control form-control-user"
          id="exampleFirstName"
          placeholder="email"
        />
      </div>
      @
      <div class="col-sm-6">
        <input
          type="text"
          class="form-control form-control-user"
          id="exampleLastName"
          placeholder="email domain"
        />
      </div>
    </div>
    <a href="login.html" class="btn btn-primary btn-user btn-block">
      Register Account
    </a>
    <hr />
  </form>
</template>

<script>
export default {
  name: "UserUpdate",
  components: {},
};
</script>

<style></style>
