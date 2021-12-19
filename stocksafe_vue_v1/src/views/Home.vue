c
<template>
  <div>
    <div id="wrapper" style="min-width: 100%">
      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <!-- Topbar -->

          <!-- Begin Page Content -->
          <div class="container-fluid">
            <!-- Page Heading -->
            <div
              class="d-sm-flex align-items-center justify-content-between mb-4"
            >
              <h1 class="h3 mb-0 text-gray-800">오늘의 주식</h1>
            </div>

            <!-- Content Row -->

            <div>
              <!-- Area Chart -->
              <div>
                <div class="card shadow mb-4">
                  <!-- Card Header - Dropdown -->
                  <div
                    class="
                      card-header
                      py-3
                      d-flex
                      flex-row
                      align-items-center
                      justify-content-between
                    "
                    style="width: 100%"
                  >
                    <h6 class="m-0 font-weight-bold text-primary mr-2">
                      Earnings Overview
                    </h6>
                  </div>
                  <!-- Card Body -->
                  <div class="card-body">
                    <div class="chart-area">
                      <!-- <canvas id="myAreaChart"></canvas> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <footer class="sticky-footer bg-white">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Copyright &copy; Your Website 2021</span>
            </div>
          </div>
        </footer>
        <!-- End of Footer -->
      </div>
      <!-- End of Content Wrapper -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      key1: "width : 20%",
    };
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>

<style>
@import url("../css/sb-admin-2.css");
/* @import url("css/sb-admin-2.min.css"); */
</style>
