<template>
  <div>
    <!-- Begin Page Content -->
    <div class="container-fluid">
      <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">{{ stockdetailinfo.stockName }}</h1>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>
      </div>

      <!-- Content Row -->
      <div class="row">
        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div
                    class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                  >
                    시장
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">
                    {{ stockdetailinfo.stockMarket }}
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div
                    class="text-xs font-weight-bold text-success text-uppercase mb-1"
                  >
                    분류
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">
                    {{ stockdetailinfo.stockSector }}
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pending Requests Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div
                    class="text-xs font-weight-bold text-warning text-uppercase mb-1"
                  >
                    WICS 섹터
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">
                    {{ stockdetailinfo.stockWics }}
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-comments fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-info shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div
                    class="text-xs font-weight-bold text-info text-uppercase mb-1"
                  >
                    외국인소진률
                  </div>
                  <div class="row no-gutters align-items-center">
                    <div class="col-auto">
                      <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                        {{ stockdetailinfo.stockForeigner }} %
                      </div>
                    </div>
                    <div class="col">
                      <div class="progress progress-sm mr-2">
                        <div
                          class="progress-bar bg-info"
                          role="progressbar"
                          :style="stockForeignerPer"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- Area Chart -->
        <div class="col-xl-8 col-lg-7">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div
              class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
            >
              <h6 class="m-0 font-weight-bold text-primary">
                Earnings Overview
              </h6>
              <div class="dropdown no-arrow">
                <a
                  class="dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div class="dropdown-header">Dropdown Header:</div>
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
            <!-- Card Body -->
            <div class="card-body">
              <div class="chart-area">
                <canvas id="myAreaChart"></canvas>
              </div>
            </div>
          </div>
        </div>

        <!-- Pie Chart -->
        <div class="col-xl-4 col-lg-5">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div
              class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
            >
              <h6 class="m-0 font-weight-bold text-primary">투자정보</h6>
            </div>
            <!-- Card Body -->
            <div class="card-body">
              <stock-table :stockdetailinfo1="stockdetailinfo" />
            </div>
          </div>
        </div>
      </div>

      <!-- Content Row news -->
      <div class="row">
        <!-- Content Column -->
        <div class="col-lg-12 mb-4">
          <!-- Project Card Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">뉴스</h6>
            </div>
            <div class="card-body">
              <list-table :data="newsData" type="two"> </list-table>
            </div>
          </div>
        </div>
      </div>
      <!-- news end-->

      <!-- Content Row Reply -->
      <div class="row">
        <!-- Content Column -->
        <div class="col-lg-12 mb-4">
          <!-- Project Card Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">댓글</h6>
            </div>
            <div class="card-body">
              <list-table :data="replyData" type="two"> </list-table>
            </div>
          </div>
        </div>
      </div>
      <!-- Reply end-->
    </div>
    <!-- /.container-fluid -->
  </div>
  <!-- End of Main Content -->
</template>

<script>
import http from "@/utils/http-common.js";

import ListTable from "@/components/list/ListTable.vue";
import StockTable from "@/components/stock/StockTable.vue";
export default {
  created() {
    this.getInfo();
  },
  name: "StockDetail",
  data() {
    return {
      newsData: [
        {
          content: "[Asia마감] 오미크론 경계감에…日·中 동반 하락",
          date: "2021-08-11",
          uri: "https://finance.naver.com/news/news_read.naver?mode=mainnews&office_id=008&article_id=0004688550",
        },
        {
          content: "[긴급]어제 밤 청와대 나선 김모씨...충격!",
          date: "2021-08-12",
          uri: "https://finance.naver.com/news/news_read.naver?mode=mainnews&office_id=018&article_id=0005114684",
        },
      ],
      replyData: [
        { content: "8만전자 간다, 존버가 답이다", date: "2021-08-11" },
        { content: "댓글테스트", date: "2021-08-12" },
      ],
      stockdetailinfo: { stockName: "" },
      stockForeignerPer: "",
    };
  },
  components: { ListTable, StockTable },
  methods: {
    getInfo() {
      http
        .get(`/stock`, { params: { id: this.$route.params.id } })
        .then(({ data }) => {
          this.stockdetailinfo = data;
          console.log(this.stockdetailinfo);
          this.stockForeignerPer =
            "width: " + this.stockdetailinfo.stockForeigner + "%";
        });
    },
  },
  mounted() {},
  watch: {
    $route(to, from) {
      if (to.path !== from.path) this.getInfo();
    },
  },
};
</script>

<style>
@import url("../css/sb-admin-2.css");
/* @import url("css/sb-admin-2.min.css"); */
</style>
