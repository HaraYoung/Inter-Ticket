<!-- 파일 이름: ReserveBox.vue -->
<!-- 파일 설명: 마이 페이지의 예매 영역 -->
<!-- 작성자: 황유진, 이메일: yjhwang@feelanet.com -->

<template>
  <b-container class="text-center">
    <!-- 제목 행 -->
    <b-row border-variant="primary" class="head-border py-3">
      <b-col>관람 예정일</b-col>
      <b-col>예약번호</b-col>
      <b-col cols="3">전시명</b-col>
      <b-col cols="1">매수</b-col>
      <b-col>{{ isCanceled ? "취소일" : "예매일" }}</b-col>
      <b-col>상태</b-col>
    </b-row>
    <!-- 제목 행 -->
    <!-- 예매 내역이 있는 경우 -->
    <div v-if="ticketList.length > 0">
      <TicketBox v-for="(item, idx) in ticketList" :key="idx" :item="item" />
    </div>
    <!-- 예매 내역이 있는 경우 -->
    <!-- 예매 내역이 없는 경우 -->
    <div v-else>
      <b-row class="py-4 ticket-border">
        <b-col>{{ isCanceled ? "취소" : "예매" }} 내역이 없습니다.</b-col>
      </b-row>
    </div>
    <!-- 예매 내역이 없는 경우 -->
  </b-container>
</template>

<script>
import TicketBox from "@/components/TicketBox.vue";

export default {
  props: ["ticketList", "isCanceled"],
  components: {
    TicketBox,
  },
};
</script>

<style scoped>
.head-border {
  border-top: 1px solid #6c757d;
  border-bottom: 1px solid #6c757d;

  background-color: black;
  color: white;
}

.ticket-border {
  border-bottom: 1px solid #6c757d;
}
</style>
