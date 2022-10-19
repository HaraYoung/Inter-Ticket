<template>
  <div id="my">
    <b-container id="wrapper">
      <h2 class="mb-5">마이 페이지</h2>
      <b-container id="content-box" class="p-5">
        <div class="recent mb-5">
          <h3 class="mb-3">최근 예매 내역</h3>
          <ReserveBox />
        </div>
        <div class="cancel mb-5">
          <h3 class="mb-3">예매 취소 내역</h3>
          <ReserveBox />
        </div>
        <div class="coupon">
          <h3 class="mb-3">보유 쿠폰 목록</h3>
          <ReserveBox />
        </div>
      </b-container>
    </b-container>
  </div>
</template>

<style scoped>
#my {
  width: 1130px;
  margin: 0 auto;

  display: flex;
  justify-content: center;

  min-height: calc(100vh - 100px);
}

#wrapper {
  margin: 80px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
}

#content-box {
  background-color: white;
  width: 95%;
}

.btn-group {
  width: 100%;
}

h2,
h3 {
  font-weight: bold;
}
</style>

<script>
import ReserveBox from "./ReserveBox.vue";

export default {
  components: {
    ReserveBox,
  },
};
</script>
