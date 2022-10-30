<template>
  <!--전시 상세 정보 영역 -->
  <div class="tabInfo">
    <div class="artist" v-if="content.DP_ARTIST">아티스트: {{ content.DP_ARTIST }}</div>
    <div><img :src="content.DP_MAIN_IMG" alt="img"></div>
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
  width:80%;
  margin: auto
}
.tabInfo .artist{
  border: 2px solid gray;
  padding: 1em;
  margin-bottom: 2em;
  font-weight: bold;
}
.tabInfo div{
  margin: 2em auto;
}
img{
  width: 100%;
}
</style>