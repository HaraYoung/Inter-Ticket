<template>
  <div class="review-box mb-5">
    <div class="review-desc mb-4">
      <star-rating
        :show-rating="false"
        :read-only="true"
        :rating="item.rating"
      ></star-rating>
      <div>
        <span>{{ item.title }} | {{ item.reviewDate }}</span>
      </div>
    </div>
    <div class="review-comment">
      <p>{{ item.comment }}</p>
    </div>
  </div>
</template>

<style scoped>
.review-box {
  background-color: #eae7d7;

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
