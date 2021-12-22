<template>
  <form class="user">
    <div class="form-group">
      <input
        type="text"
        class="form-control form-control-user"
        id="id"
        placeholder="ID"
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
    <a href="index.html" class="btn btn-google btn-user btn-block">
      <i class="fab fa-google fa-fw"></i> Register with Google
    </a>
    <a href="index.html" class="btn btn-facebook btn-user btn-block">
      <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
    </a>
  </form>
</template>

<script>
export default {};
</script>

<style></style>
