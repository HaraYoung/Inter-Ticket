<template>
  <div>
      <div class="review-box" v-for="v in this.reviewList" :key="v.id">
    <div class="review-desc mb-4">
      <!-- 별점 내역 -->
      <star-rating :show-rating="false" :read-only="true" :rating="v.rating" :star-size="20"></star-rating>
      <!-- 별점 내역 -->
      <!-- 리뷰 작성 날짜 -->
      <div>
        <span>{{ v.reviewDate }}</span>
      </div>
      <!-- 리뷰 작성 날짜 -->
      <!-- 리뷰 내용 -->
    </div>
    <div class="review-comment">
      <p>{{ v.comment }}</p>
    </div>
    <!-- 리뷰 내용 -->
  </div>
  </div>

</template>

<style scoped>
.review-box {
  background-color: white;

  padding: 1em 2em;

  margin:1em 0;
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
  components: {
    StarRating
  },
  data() {
    return {
      reviewList: [
        {
          id: 0,
          reviewDate: "2022-05-19",
          comment: "볼 만합니다.",
          rating: 3
        },
        {
          id: 1,
          reviewDate: "2022-09-04",
          comment: "여자친구랑 좋은 시간 보냈습니다!",
          rating: 5
        },
        {
          id: 2,
          reviewDate: "2022-05-19",
          comment: "볼 만합니다1.",
          rating: 3
        },
        {
          id: 3,
          reviewDate: "2022-05-19",
          comment: "볼 만합니다.2",
          rating: 1
        },
        {
          id: 4,
          reviewDate: "2022-05-19",
          comment: "볼 만합니다.3",
          rating: 5
        },
      ]
    };
  }
};
</script>
