// 전시 상세 정보 영역 
<template>
  <div class="tabInfo">
    <p v-if="content.DP_ARTIST">아티스트: {{ content.DP_ARTIST }}</p>
    <div v-html="content.DP_INFO"></div>
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