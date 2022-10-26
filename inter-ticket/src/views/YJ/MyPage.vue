<template>
  <div id="my">
    <b-container id="wrapper">
      <h2 class="mb-5">마이 페이지</h2>
      <!-- <div>
        <div>1: {{this.ticketName}}</div>
        <div>2: {{this.ticketCount}}</div>
        <div>3: {{this.choseDate}}</div>
      </div>-->
      <b-container id="content-box" class="p-5">
        <div class="recent mb-5">
          <h3 class="mb-3">최근 예매 내역</h3>
          <ReserveBox :ticketList="bookedList" />
        </div>
        <div class="cancel mb-5">
          <h3 class="mb-3">예매 취소 내역</h3>
          <ReserveBox :ticketList="canceledList" />
        </div>
        <div class="coupon">
          <h3 class="mb-3">보유 쿠폰 목록</h3>
          <CouponBox />
        </div>
      </b-container>
    </b-container>
  </div>
</template>

<style scoped>
#my {
  max-width: 1130px;
  width: 100%;
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

.head-border {
  border-top: 1px solid #6c757d;
  border-bottom: 1px solid #6c757d;

  background-color: #f0e7db;
}
</style>

<script>
import ReserveBox from "./ReserveBox.vue";
import CouponBox from "../../components/CouponBox.vue";

let bookedList = JSON.parse(localStorage.getItem("reservation")).filter(
  (item) => item.status.isCanceled == 0
);
let canceledList = JSON.parse(localStorage.getItem("reservation")).filter(
  (item) => item.status.isCanceled == 1
);

export default {
  data() {
    return {
      bookedList,
      canceledList,
      ticketName: "",
      choseDate: "",
      ticketCount: "",
      ticketObj: [],
    };
  },
  components: {
    ReserveBox,
    CouponBox,
  },
  mounted() {
    //로컬스토리지로 받아온 내용을 data변수에 할당
    // this.ticketName = localStorage.getItem("ticketName");
    // this.choseDate = localStorage.getItem("choseDate");
    // this.ticketCount = localStorage.getItem("ticketCount");
    // console.log(this.ticketName);
    //만약 각 예매 정보가 빈 문자열이 아니라면 ticketObj에 push
    // if (
    //   this.ticketName != "" &&
    //   this.choseDate !== "" &&
    //   this.ticketCount != ""
    // ) {
    //   this.ticketObj.push({
    //ticketObj의 길이만큼 반복을 돌면서 만약 예매번호와 같은 번호가 없다면
    // 새로 예매번호를 +1한 후 push
    //만약 길이가 0이라면 그냥 push
    // ticketNum: 1,
    //   ticketName: this.ticketName,
    //   choseDate: this.choseDate,
    //   ticketCount: this.ticketCount,
    // });
    //push후 캐시 삭제
    //push가 되었다면 json파일에 추가..?
    // }
    // console.log(this.ticketObj);
  },
};
</script>