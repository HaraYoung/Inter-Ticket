<!-- 파일 이름: CouponBox.vue -->
<!-- 파일 설명: 마이 페이지 하단의 쿠폰 영역 -->
<!-- 작성자: 황유진, 이메일: yjhwang@feelanet.com -->

<template>
  <div>
    <b-container class="text-center">
      <b-row border-variant="primary" class="head-border py-3">
        <b-col>쿠폰명</b-col>
        <b-col>할인금액</b-col>
        <b-col cols="1">수량</b-col>
        <b-col>발급기간</b-col>
        <b-col>사용여부</b-col>
      </b-row>
      <!-- 쿠폰 내역 -->
      <CouponComponent />
      <!-- 쿠폰 내역 -->
    </b-container>
  </div>
</template>

<script>
import CouponComponent from "./CouponComponent.vue";

export default {
  components: {
    CouponComponent,
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
</style>


