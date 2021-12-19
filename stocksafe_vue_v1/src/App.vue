<template>
  <div id="page-top">
    <div id="app">
      <!-- Page Wrapper -->
      <div>
        <div class="row mr-0">
          <navi-bar />
          <div class="col col-10">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NaviBar from "./components/layout/NaviBar.vue";
export default {
  components: {
    NaviBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
