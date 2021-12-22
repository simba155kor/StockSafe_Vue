<template>
  <!-- Page Wrapper -->
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">내 주식 관리</h1>
    <p class="mb-4">
      보유한 주식을 확인합니다. facebook의 시계열 예측모델 Prophet을 이용한
      3일후의 예측 가격을 제공하나 참고용으로만 확인하십시오. <br />
      거래의 책임은 거래 당사자에게 있습니다.
      <a target="_blank" href="https://facebook.github.io/prophet/"
        >official Prophet documentation</a
      >.
    </p>

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">내 주식 목록</h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <list-table :data="data" :columns="columns" type="myStock">
          </list-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListTable from "@/components/list/ListTable.vue";

export default {
  name: "MyStock",
  data() {
    return {
      data: [],
      // 예측 가격을 3일, 1주일, 1달 단위로 여러개 보여줘도 될것같지만 이건 서버 비용을 고려해봐야
      columns: ["종목명", "예측가격"],
    };
  },
  components: {
    ListTable,
  },
  mounted() {
    this.data = [
      { no: 1, name: "삼성전자", price: "1111" },
      { no: 2, name: "LG전자", price: "2222" },
    ];
  },
};
</script>

<style></style>
