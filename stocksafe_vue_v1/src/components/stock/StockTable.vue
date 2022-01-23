<template>
  <table class="table borderless" id="dataTable" width="100%" cellspacing="0">
    <span class="border-top-0"></span>
    <tbody>
      <tr>
        <th>시장</th>
        <td class="text-right">{{ stockdetailinfo.stockMarket }}</td>
      </tr>

      <tr>
        <th>시가총액</th>
        <td class="text-right">{{ stockdetailinfo.stockMarketcap }}원</td>
      </tr>

      <tr>
        <th>상장주식수</th>
        <td class="text-right">{{ stockdetailinfo.stockCount }}주</td>
      </tr>
      <tr>
        <th>PER</th>
        <td class="text-right">{{ stockdetailinfo.stockPer }}</td>
      </tr>
      <tr>
        <th>PBR</th>
        <td class="text-right">{{ stockdetailinfo.stockPbr }}</td>
      </tr>
      <tr>
        <th>BPS</th>
        <td class="text-right">{{ stockdetailinfo.stockBps }}</td>
      </tr>
      <tr>
        <th>배당수익률</th>
        <td class="text-right">{{ stockdetailinfo.stockDivyield }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "StockTable",
  components: {},
  props: {
    data: [],
    columns: [],
    type: String,
    stockdetailinfo: {},
  },
  data() {
    return {
      keyword: "",
    };
  },
  created() {},
  computed: {},
  watch: {},
  methods: {
    range(start, end) {
      if (!end) {
        end = start;
        start = 0;
      }
      start -= 1;
      // end -= 1;
      let arr = [];
      while (start++ !== end) {
        arr.push(start);
      }
      return arr;
    },
    movePage(idx) {
      this.paging.nowPage = idx;
    },
    previous() {
      if (this.paging.nowPage <= 5) {
        alert("더이상 앞으로 갈 수 없습니다.");
      } else {
        this.paging.nowPage = this.paging.startPage - 1;
        this.paging.startPage -= 5;
        this.paging.endPage -= 5;
      }
    },
    next() {
      this.paging.nowPage = this.paging.endPage + 1;
      this.paging.startPage += 5;
      this.paging.endPage += 5;
    },
  },
};
</script>

<style></style>
