<template>
  <b-container class="text-center">
    <!-- 제목 행 -->
    <b-row border-variant="primary" class="head-border py-3">
      <b-col>전시일</b-col>
      <b-col>예약번호</b-col>
      <b-col cols="3">전시명</b-col>
      <b-col cols="1">매수</b-col>
      <b-col>예매일</b-col>
      <b-col>상태</b-col>
    </b-row>
    <!-- 제목 행 -->
    <!-- 예매 내역이 있는 경우 -->
    <div v-if="ticketList.length > 0">
      <TicketBox v-for="item in ticketList" :key="item.id" :item="item" />
    </div>
    <!-- 예매 내역이 있는 경우 -->
    <!-- 예매 내역이 없는 경우 -->
    <div v-else>
      <b-row class="py-4">
        <b-col>예매 내역이 없습니다.</b-col>
      </b-row>
    </div>
    <!-- 예매 내역이 없는 경우 -->
  </b-container>
</template>

<style scoped>
.head-border {
  border-top: 1px solid #6c757d;
  border-bottom: 1px solid #6c757d;

  background-color: #f0e7db;
}
</style>

<script>
import TicketBox from "@/components/TicketBox.vue";
import tempData from "@/assets/tempData.json";

const ticketList = tempData.ticketList;

export default {
  data: function () {
    return {
      ticketList,
    };
  },
  components: {
    TicketBox,
  },
  props: {
    title: String,
  },
};
</script>
