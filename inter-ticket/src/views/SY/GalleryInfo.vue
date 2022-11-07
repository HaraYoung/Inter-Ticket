<!-- 파일 이름: GalleryInfo.vue -->
<!-- 파일 설명: 상세 페이지의 전시 정보 -->
<!-- 작성자: 박세영, 이메일: sypark@feelanet.com -->

<template>
  <!--전시 상세 정보 영역 -->
  <div class="tabInfo">
    <div class="artist" v-if="content.DP_ARTIST">
      아티스트: {{ filteredArtist }} 등
    </div>
    <div><img :src="content.DP_MAIN_IMG" alt="img" /></div>
    <div v-html="content.DP_INFO"></div>
  </div>
</template>
  
<script>
export default {
  props: ["content"],
  computed: {
    filteredArtist() {
      let temp = this.content.DP_ARTIST.split(",").slice(0, 2).join(",");
      return temp;
    },
  },
};
</script>
  
<style scoped>
.tabInfo {
  text-align: center;
  margin-right: 0.5em;
  width: 80%;
  margin: auto;
}
.tabInfo .artist {
  border: 2px solid gray;
  padding: 1em;
  margin-bottom: 2em;
  font-weight: bold;
}
.tabInfo div {
  margin: 2em auto;
}
img {
  width: 100%;
}
</style>