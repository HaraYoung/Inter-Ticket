<template>
  <b class="font">INTERTICKET</b>
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
  color: #25c4c2;
  font-size: 40px;
}
</style>

<script>
export default {
  props: {
    fontSize: Number,
  },
};
</script>
