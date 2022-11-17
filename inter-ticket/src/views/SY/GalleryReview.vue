<!-- 파일 이름: GalleryReview.vue -->
<!-- 파일 설명: 상세 페이지의 관람평 -->
<!-- 작성자: 박세영, 이메일: sypark@feelanet.com -->

<template>
  <div>
    <!--관람평 컴포넌트-->
    <ReviewComponent />
  </div>
</template>

<script>
import ReviewComponent from "@/components/ReviewComponent.vue";

export default {
  components: {
    ReviewComponent,
  },
};
</script>

<style scoped>
div {
  width: 90%;
  margin: auto;
}
</style>