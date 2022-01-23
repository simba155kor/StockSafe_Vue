<template>
  <div>
    <!-- Begin Page Content -->
    <div class="container-fluid">
      <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">
          {{ stockdetailinfo.stockName }}
          <b-icon
            v-if="!star_tag"
            class="mb-2 mx-1 staricon1"
            icon="star"
            variant="secondary"
            @click="addLikeStock()"
          ></b-icon>
          <b-icon
            v-else
            class="mb-2 mx-1 staricon2"
            icon="star-fill"
            variant="warning"
            @click="deleteLikeStock()"
          ></b-icon>

          <b-icon
            v-if="!myStock_tag"
            class="mb-2 mx-1 staricon2"
            icon="bag"
            variant="secondary"
            @click="addMyStock()"
          ></b-icon>
          <b-icon
            v-else
            class="mb-2 mx-1 staricon2"
            icon="bag-fill"
            variant="info"
            @click="deleteMyStock()"
          ></b-icon>
        </h1>
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
                    현재가
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
                    종가
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
      <div class= "row">
        <div class="col-xl-8 col-lg-7">
          <!-- 가격 Chart -->
          <div>
            <div class="card shadow mb-4">
              <!-- Card Header - Dropdown -->
              <div
                class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
              >
                <h6 class="m-0 font-weight-bold text-primary">
                  가격요약
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
                
              </div>
            </div>
          </div>
          <!-- 표 -->
          <div>
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
        </div>

        <!-- 투자정보 -->
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
              <stock-table :stockdetailinfo="stockdetailinfo" />
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
              <div class="form-group">
                <textarea
                  class="form-control"
                  style="resize: none; width: 90%; float: left"
                  rows="3"
                  id="comment"
                  v-model="comment"
                ></textarea>
                <button
                  class="btn btn-primary"
                  style="width: 10%; height: 86px; float: left"
                  @click="addReply()"
                >
                  입력
                </button>
              </div>
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
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

import ListTable from "@/components/list/ListTable.vue";
import StockTable from "@/components/stock/StockTable.vue";
export default {
  created() {
    this.star_tag = false;
    console.log(this.$route.params.star_tag);
    if (this.$route.params.star_tag) {
      this.star_tag = true;
    }

    this.myStock_tag = false;
    console.log(this.$route.params.myStock_tag);
    if (this.$route.params.myStock_tag) {
      this.myStock_tag = true;
    }

    this.SET_FALSE_NOW_PAGE_STATE;

    this.getInfo();
  },
  name: "StockDetail",
  data() {
    return {
      star_tag: false,
      myStock_tag: false,
      newsData: [],
      replyData: [],
      stockdetailinfo: { stockName: "" },
      stockForeignerPer: "",
      comment: "",
    };
  },
  components: { ListTable, StockTable },
  computed: {
    ...mapGetters(["getId"]),
  },
  methods: {
    ...mapMutations([
      "SET_FALSE_NOW_PAGE_STATE",
      "SET_INDEX_LIKE_STOCK",
      "SET_INDEX_MY_STOCK",
    ]),
    getInfo() {
      http
        .get(`/stock`, { params: { id: this.$route.params.id } })
        .then(({ data }) => {
          console.log(data);
          console.log(">>");
          this.stockdetailinfo = data;
          console.log(this.stockdetailinfo);
          this.stockForeignerPer =
            "width: " + this.stockdetailinfo.stockForeigner + "%";
            
          this.getNews();
          this.getReplys();
        });
    },
    addLikeStock() {
      http
        .post(`/likestock`, {
          memberId: this.getId,
          predictId: this.stockdetailinfo.id,
        })
        .then(() => {
          this.star_tag = true;
          this.SET_INDEX_LIKE_STOCK(this.stockdetailinfo.id);
          alert("관심 주식에 등록되었습니다.");
        });
    },
    deleteLikeStock() {
      http
        .delete(`/likestock`, {
          params: {
            memberId: this.getId,
            predictId: this.stockdetailinfo.id,
          },
        })
        .then(() => {
          this.star_tag = false;
          this.SET_INDEX_LIKE_STOCK(this.stockdetailinfo.id);
          alert("관심 주식에서 삭제되었습니다.");
        });
    },
    getNews() {
      http
        .get(`/news`, { params: { stockId: this.stockdetailinfo.id } })
        .then(({ data }) => {
          this.newsData = data;
        });
    },
    getReplys() {
      http
        .get(`/reply`, { params: { stockId: this.stockdetailinfo.id } })
        .then(({ data }) => {
          this.replyData = data;
        });
    },
    addMyStock() {
      http
        .post(`/memberstock`, {
          memberId: this.getId,
          predictId: this.stockdetailinfo.id,
        })
        .then(() => {
          this.myStock_tag = true;
          this.SET_INDEX_MY_STOCK(this.stockdetailinfo.id);
          alert("내 주식에 등록되었습니다.");
        });
    },
    deleteMyStock() {
      http
        .delete(`/memberstock`, {
          params: {
            memberId: this.getId,
            predictId: this.stockdetailinfo.id,
          },
        })
        .then(() => {
          this.myStock_tag = false;
          this.SET_INDEX_MY_STOCK(this.stockdetailinfo.id);
          alert("내 주식에서 삭제되었습니다.");
        });
    },
    addReply() {
      // 대댓아닌 경우에 해당
      console.log(this.getId);
      console.log(this.comment);
      http
        .post("/reply", {
          memberId: this.getId,
          stockId: this.stockdetailinfo.id,
          replyContent: this.comment,
          replyLevel: 0,
        })
        .then(() => {
          this.comment = "";
          this.getReplys();
        });
    },
  },
  mounted() {},
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        this.star_tag = false;
        console.log(this.$route.params.star_tag);
        if (this.$route.params.star_tag) {
          this.star_tag = true;
        }

        this.myStock_tag = false;
        console.log(this.$route.params.myStock_tag);
        if (this.$route.params.myStock_tag) {
          this.myStock_tag = true;
        }

        this.SET_FALSE_NOW_PAGE_STATE;
        this.getInfo();
      }
    },
  },
};
</script>

<style>
@import url("../css/sb-admin-2.css");
/* @import url("css/sb-admin-2.min.css"); */

.staricon1:hover {
  cursor: pointer;
}

.staricon2:hover {
  opacity: 50%;
  cursor: pointer;
}
</style>
