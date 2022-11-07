<!-- 파일 이름: CouponBox.vue -->
<!-- 파일 설명: 마이 페이지 하단의 쿠폰 영역 -->
<!-- 작성자: 황유진, 이메일: yjhwang@feelanet.com -->

<template>
  <div>
    <b-container>
      <!-- 쿠폰 내역 -->
      <CouponComponent>
          <div> ddddd</div>
        </CouponComponent>
      <!-- 쿠폰 내역 -->
    </b-container>
  </div>
</template>

<script>
import CouponComponent from "./ReviewBox.vue";

export default {
  components: {
    CouponComponent
  },
  data() {
    return {
      page: 1
    };
  }
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


