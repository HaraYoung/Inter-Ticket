<template>
  <div class="review-box mb-5">
    <div class="review-desc mb-4">
      <!-- 별점 내역 -->
      <star-rating
        :show-rating="false"
        :read-only="true"
        :rating="item.rating"
        :star-size="30"
      ></star-rating>
      <!-- 별점 내역 -->
      <!-- 리뷰 작성 날짜 -->
      <div>
        <span>{{ item.reviewDate }}</span>
      </div>
      <!-- 리뷰 작성 날짜 -->
      <!-- 리뷰 내용 -->
    </div>
    <div class="review-comment">
      <p>{{ item.comment }}</p>
    </div>
    <!-- 리뷰 내용 -->
  </div>
</template>

<style scoped>
.review-box {
  background-color: #f0e7db;

  padding: 30px 50px;
}

.review-desc {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

<script>
import StarRating from "vue-star-rating";

export default {
  props: {
    item: Object,
  },
  components: {
    StarRating,
  },
};
</script>
