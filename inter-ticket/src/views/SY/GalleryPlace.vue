<template>
  <div class="place">
    <div>본관 전체 3층 총 6개 전시실</div>
    <div>10:00 ~ 19:00</div>
    <div>매주 월요일 휴관</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.place{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  padding: 3em 0;
  padding-bottom: 5em;
}
.place div{
  margin:1em;
}
.place div:first-child{
  font-size: 20px;
  font-weight: bolder;
}

</style>