<template>
  <b-row border-variant="primary" class="ticket-border ticket-flex py-3">
    <b-col>{{ item.date }}</b-col>
    <b-col>{{ item.reservationNum }}</b-col>
    <b-col cols="3">{{ item.title }}</b-col>
    <b-col cols="1">{{ item.amount }}</b-col>
    <b-col>{{ item.reserveDate }}</b-col>
    <b-col class="btn-flex">
      <b-button v-if="item.status.isEdit === 0" size="sm">변경</b-button>
      <b-button v-if="item.status.isCanceled === 0" size="sm">취소</b-button>
      <b-button v-if="item.status.isReviewed === 0" size="sm">관람평</b-button>
    </b-col>
  </b-row>
</template>

<style scoped>
.ticket-flex {
  display: flex;
  align-items: center;
}

.ticket-border {
  border-bottom: 1px solid #6c757d;
}

.btn-flex {
  display: flex;
  justify-content: space-around;
}
</style>

<script>
export default {
  name: "SweetModal",
  props: {
    item: Object,
  },
};
</script>