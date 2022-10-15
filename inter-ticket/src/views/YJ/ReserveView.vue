<template>
  <b-container class="text-center">
    <b-row border-variant="primary" class="head-border py-3">
      <b-col>전시일</b-col>
      <b-col>예약번호</b-col>
      <b-col cols="3">전시명</b-col>
      <b-col cols="1">매수</b-col>
      <b-col>예매일</b-col>
      <b-col>상태</b-col>
    </b-row>
    <div v-if="ticket.length > 0">
      <TicketBox v-for="item in ticket" :key="item.id" :item="item" />
    </div>
    <div v-else>
      <b-row class="py-4">
        <b-col>예매 내역이 없습니다.</b-col>
      </b-row>
    </div>
  </b-container>
</template>

<style scoped>
.head-border {
  border-top: 1px solid #6c757d;
  border-bottom: 1px solid #6c757d;
}
</style>

<script>
import TicketBox from "./TicketBox.vue";

export default {
  data: function () {
    return {
      ticket: [
        {
          id: 0,
          date: "2022-11-31",
          reservationNum: "A111111111",
          title: "반 고흐 영혼의 편지",
          amount: 1,
          reserveDate: "2022-09-15",
          status: {
            isEdit: 0,
            isCanceled: 0,
            isReviewed: 0,
          },
        },
        {
          id: 1,
          date: "2022-12-31",
          reservationNum: "A222222222",
          title: "지브리 원화 전시회",
          amount: 2,
          reserveDate: "2022-10-15",
          status: {
            isEdit: 0,
            isCanceled: 1,
            isReviewed: 0,
          },
        },
      ],
    };
  },
  components: {
    TicketBox,
  },
};
</script>
