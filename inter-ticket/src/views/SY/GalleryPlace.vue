//전시 장소 정보
<template>
  <div class="place">
    <div>{{ content.DP_PLACE }}</div>
    <div>{{ content.DP_VIEWTIME }}</div>
  </div>
</template>

<script>
export default {
  props: ["content"],
};
</script>

<style>
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