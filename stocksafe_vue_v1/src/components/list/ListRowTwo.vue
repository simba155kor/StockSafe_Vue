<template>
  <tr>
    <td>
      <a>
        <!-- <router-link :to="{ name: 'StockDetail', params: { no: no } }">{{
          subject
        }}</router-link> -->
        {{ content }}
      </a>
    </td>
    <td>{{ date }}</td>
  </tr>
</template>

<script>
import moment from "moment";

export default {
  name: "BoardListRow",
  props: {
    content: String,
    date: String,
  },
  computed: {
    changeDateFormat() {
      return moment(new Date(this.regtime)).format("YY.MM.DD.");
    },
  },
};
</script>

<style></style>
