<template>
  <div>
    <!--관람평 컴포넌트-->
      <ReviewBox/>
  </div>
</template>

<script>
import ReviewBox from "@/components/ReviewBox.vue";


export default {
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