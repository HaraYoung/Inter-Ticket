<template>
  <div>
    <b-container class="text-center">
      <b-row border-variant="primary" class="head-border py-3">
        <b-col>쿠폰명</b-col>
        <b-col>할인금액</b-col>
        <b-col cols="1">수량</b-col>
        <b-col>발급기간</b-col>
        <b-col>사용여부</b-col>
      </b-row>
    </b-container>
    <b-row border-variant="primary" class="ticket-border ticket-flex py-3">
      <b-col></b-col>
      <b-col></b-col>
      <b-col cols="1"></b-col>
      <b-col></b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>

<style scoped>
.head-border {
  border-top: 1px solid #6c757d;
  border-bottom: 1px solid #6c757d;

  background-color: #f0e7db;
}
</style>

<script>
export default {};
</script>
