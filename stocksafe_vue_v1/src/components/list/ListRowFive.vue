<template>
  <tr>
    <td>
      <a>
        <!-- <router-link :to="{ name: 'StockDetail', params: { no: no } }">{{
          subject
        }}</router-link> -->
        {{ stockName }}
      </a>
    </td>

    <td>{{ stockYesterday }}</td>
    <td>{{ predictDay }}</td>
    <td>{{ predictMonth }}</td>
    <td>{{ predictYear }}</td>
  </tr>
</template>

<script>
import moment from "moment";

export default {
  name: "BoardListRow",
  props: {
    id: Number,
    memberId: String,
    predictDay: Number,
    predictGraph: String,
    predictId: String,
    predictMonth: Number,
    predictYear: Number,
    stockName: String,
    stockYesterday: Number,
  },
  computed: {
    changeDateFormat() {
      return moment(new Date(this.regtime)).format("YY.MM.DD.");
    },
  },
};
</script>

<style></style>
