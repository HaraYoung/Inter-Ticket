<!-- 파일 이름: CouponComponent.vue -->
<!-- 파일 설명: 마이 페이지 하단의 쿠폰 컴포넌트 -->
<!-- 작성자: 황유진, 이메일: yjhwang@feelanet.com -->

<template>
  <div>
    <b-row
      border-variant="primary"
      class="ticket-border ticket-flex py-3"
      v-for="item in couponList"
      :key="item.id"
    >
      <b-col>{{ item.cpPrice }} 할인 쿠폰</b-col>
      <b-col>{{ item.cpPrice }}</b-col>
      <b-col cols="1">{{ item.cpAmount }}매</b-col>
      <b-col>{{ item.cpDeadline }}까지</b-col>
      <b-col :style="[item.isValid === 0 ? 'color: red' : '']">{{
        item.isValid === 0 ? "사용 완료" : "미사용"
      }}</b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      couponList: [
        {
          id: 0,
          cpPrice: "11,000원",
          cpAmount: 1,
          cpDeadline: "2022년 12월 31일",
          isValid: 1,
        },
        {
          id: 1,
          cpPrice: "5,000원",
          cpAmount: 2,
          cpDeadline: "2022년 11월 31일",
          isValid: 0,
        },
      ],
    };
  },
};
</script>

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