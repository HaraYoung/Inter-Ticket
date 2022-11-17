<!-- 파일 이름: GalleryPlace.vue -->
<!-- 파일 설명: 상세 페이지의 전시 장소 -->
<!-- 작성자: 박세영, 이메일: sypark@feelanet.com -->

<template>
  <!--전시 장소 정보-->
  <div class="place">
    <div>
      {{ content.p_name }}
    </div>
    <div>{{ content.dp_viewtime }}</div>
  </div>
</template>

<script>
export default {
  props: ["content"],
};
</script>

<style scoped>
.place {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  padding: 3em 0;
  padding-bottom: 5em;
}
.place div {
  margin: 1em;
}
.place div:first-child {
  font-size: 20px;
  font-weight: bolder;
}
</style>