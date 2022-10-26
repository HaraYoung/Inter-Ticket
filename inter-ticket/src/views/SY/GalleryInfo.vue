// 전시 상세 정보 영역 
<template>
  <div class="tabInfo">
    <p v-if="content.DP_ARTIST">아티스트: {{ content.DP_ARTIST }}</p>
    <!-- 자바스크립트 문법으로 엘리먼트 추가하기 -->
    <p>{{ content.DP_INFO }}</p>
  </div>
</template>
  
<script>
export default {
  props: ["content"],
};
</script>
  
<style>
.tabInfo {
  text-align: center;
  margin-right: 0.5em;
}
</style>