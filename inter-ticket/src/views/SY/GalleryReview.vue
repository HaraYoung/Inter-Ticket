<template>
  <div>
    <b-container>
      <ReviewBox v-for="item in reviewList" :key="item.id" :item="item" />
    </b-container>
  </div>
</template>

<script>
import ReviewBox from "@/components/ReviewBox.vue";
import tempData from "@/assets/tempData.json";

const reviewList = tempData.reviewList;

export default {
  data: function() {
    return {
      reviewList
    };
  },
  components: {
    ReviewBox
  }
};
</script>

<style scoped>
div {
  width: 90%;
  margin: auto;
}
</style>