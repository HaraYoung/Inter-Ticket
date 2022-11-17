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
          <ReserveBox :ticketList="canceledList" isCanceled="true" />
        </div>
        <div class="review">
          <h4 class="mb-3">작성한 리뷰</h4>
          <ReviewBox :reviewList="reviewList" />
        </div>
      </b-container>
    </b-container>
  </div>
</template>

<script>
import ReserveBox from "./ReserveBox.vue";
import ReviewBox from "../../components/ReviewBox.vue";
import { fetchReviewList, fetchTicketList } from "@/API";

export default {
  data() {
    return {
      bookedList: [],
      canceledList: [],
      reviewList: [],
    };
  },
  components: {
    ReserveBox,
    ReviewBox,
  },
  created() {
    //yjhwang(userSeq=1)로 로그인했다는 가정
    fetchTicketList(1).then((res) => {
      let ticketList = res.data;
      this.bookedList = ticketList
        ? ticketList.filter((item) => item.bk_is_canceled == 0)
        : [];
      this.canceledList = ticketList
        ? ticketList.filter((item) => item.bk_is_canceled == 1)
        : [];
    });
    fetchReviewList(1).then((res) => {
      this.reviewList = res.data;
    });
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
