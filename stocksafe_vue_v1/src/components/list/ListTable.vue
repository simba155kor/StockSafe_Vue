<template>
  <table
    class="table table-bordered"
    id="dataTable"
    width="100%"
    cellspacing="0"
  >
    <thead>
      <tr>
        <th v-for="(column, idx) in columns" :key="idx">{{ column }}</th>
      </tr>
    </thead>
    <tbody>
      <list-row v-for="(item, index) in data" :key="index" v-bind="item" />
    </tbody>
  </table>
</template>

<script>
import ListRow from "./ListRow.vue";
// import ListRow from "@/components/list/ListRow";
export default {
  name: "ListTable",
  components: {
    ListRow,
    // ListRow,
  },
  props: {
    data: [],
    columns: [],
    type: String,
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
