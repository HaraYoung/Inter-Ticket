<template>
  <!-- 폰트 사이즈랑 색깔 변경할 수 있게 -->
  <div class="font" :style="{ fontSize: fontSize + 'px' }">INTERTICKET</div>
</template>

<style scoped>
@font-face {
  font-family: "OKDDUNG";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/OKDDUNG.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
}

.font {
  font-family: "OKDDUNG", sans-serif;
  color: #fffbe9;
}
</style>

<script>
export default {
  props: {
    fontSize: Number,
  },
};
</script>
