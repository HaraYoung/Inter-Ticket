<!-- 파일 이름: ReviewBox.vue -->
<!-- 파일 설명: 마이 페이지 하단의 리뷰 영역 -->
<!-- 작성자: 황유진, 이메일: yjhwang@feelanet.com -->

<template>
  <div>
    <b-container v-if="reviewList.length > 0">
      <!-- 리뷰 내역 -->
      <ReviewComponent
        v-for="review in reviewList"
        :key="review.rv_seq"
        :review="review"
      />
      <!-- 리뷰 내역 -->
    </b-container>
    <b-container v-else>
      <div class="nonReview">작성된 리뷰가 없습니다.</div>
    </b-container>
  </div>
</template>

<script>
import ReviewComponent from "./ReviewComponent.vue";

export default {
  props: ["reviewList"],
  components: {
    ReviewComponent,
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
.nonReview {
  text-align: center;
  font-size: 1.2em;
}
</style>


