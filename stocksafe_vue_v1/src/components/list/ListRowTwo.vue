<template>
  <tr>
    <td>
      <a v-if="uri" target="_blank" :href="uri">{{ content }}</a>
      <a v-if="!uri" target="_blank" :href="uri">{{ content }}</a>
    </td>
    <td class="text-right">{{ date }}</td>
  </tr>
</template>

<script>
import moment from "moment";

export default {
  name: "BoardListRow",
  props: {
    content: String,
    date: String,
    uri: String,
  },
  computed: {
    changeDateFormat() {
      return moment(new Date(this.regtime)).format("YY.MM.DD.");
    },
  },
};
</script>

<style></style>
