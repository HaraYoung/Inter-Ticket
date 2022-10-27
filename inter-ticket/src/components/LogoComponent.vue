<template>
  <!-- 폰트 사이즈랑 색깔 변경할 수 있게 -->
  <b class="font" :style="{ fontSize: fontSize + 'px' }">INTERTICKET</b>
</template>

<style scoped>
@font-face {
  font-family: "CHONBUKL";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/CHONBUKL.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

.font {
  font-family: "CHONBUKL", sans-serif;
  color: #25C4C2;
}
</style>

<script>
export default {
  props: {
    fontSize: Number,
  },
};
</script>
