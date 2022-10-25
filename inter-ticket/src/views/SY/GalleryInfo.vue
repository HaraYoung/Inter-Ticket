<template>
  <div class="tabInfo">
    <p v-if="content.DP_ARTIST">아티스트: {{ content.DP_ARTIST }}</p>
    <p>{{ content.DP_INFO }}</p>
  </div>
</template>
  
  <script>
export default {
  props: ["content"],
  //p태그, 특수문자 replace하는 computed 속성 작성
};
</script>
  
  <style>
.tabInfo {
  text-align: center;
  margin-right: 0.5em;
}
</style>