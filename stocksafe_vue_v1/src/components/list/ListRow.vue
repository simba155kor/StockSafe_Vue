<template>
  <tr>
    <td>
      <a>
        <!-- <router-link :to="{ name: 'StockDetail', params: { no: no } }">{{
          subject
        }}</router-link> -->
        {{ memberId }}
      </a>
    </td>

    <td>{{ stockId }}</td>
  </tr>
</template>

<script>
import moment from "moment";

export default {
  name: "BoardListRow",
  props: {
    id: Number,
    memberId: String,
    stockId: String,
  },
  computed: {
    changeDateFormat() {
      return moment(new Date(this.regtime)).format("YY.MM.DD.");
    },
  },
};
</script>

<style></style>
