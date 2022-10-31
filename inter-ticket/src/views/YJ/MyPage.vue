<!-- 파일 이름: MyPage.vue -->
<!-- 파일 설명: 마이 페이지 -->
<!-- 작성자: 황유진, 이메일: yjhwang@feelanet.com -->

<template>
  <div id="my">
    <b-container id="wrapper">
      <b-container id="content-box" class="p-5">
        <h2 class="mb-5 text-center">마이 페이지</h2>
        <div class="recent mb-5">
          <h4 class="mb-3">최근 예매 내역</h4>
          <ReserveBox :ticketList="bookedList" />
        </div>
        <div class="cancel mb-5">
          <h4 class="mb-3">예매 취소 내역</h4>
          <ReserveBox :ticketList="canceledList" />
        </div>
        <div class="coupon">
          <h4 class="mb-3">보유 쿠폰 목록</h4>
          <CouponBox />
        </div>
      </b-container>
    </b-container>
  </div>
</template>

<script>
import ReserveBox from "./ReserveBox.vue";
import CouponBox from "../../components/CouponBox.vue";

//로컬 스토리지에 저장된 예매 내역 중 취소되지 않은 내역을 반환하는 리스트
let bookedList = JSON.parse(localStorage.getItem("reservation"))
  ? JSON.parse(localStorage.getItem("reservation")).filter(
      (item) => item.status.isCanceled == 0
    )
  : [];

//로컬 스토리지에 저장된 예매 내역 중 취소된 내역을 반환하는 리스트
let canceledList = JSON.parse(localStorage.getItem("reservation"))
  ? JSON.parse(localStorage.getItem("reservation")).filter(
      (item) => item.status.isCanceled == 1
    )
  : [];

export default {
  data() {
    return {
      bookedList,
      canceledList,
    };
  },
  components: {
    ReserveBox,
    CouponBox,
  },
};
</script>

<style scoped>
#my {
  max-width: 1130px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: center;

  min-height: calc(100vh - 100px);
  position: relative;
}

#wrapper {
  margin: 60px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
}

#content-box {
  background-color: #dce4ed;
  width: 95%;
}

h2,
h4 {
  font-weight: bold;
}

.head-border {
  border-top: 1px solid #6c757d;
  border-bottom: 1px solid #6c757d;

  background-color: #f0e7db;
}
</style>
