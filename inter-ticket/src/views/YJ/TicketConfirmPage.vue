<template>
  <div id="confirm">
    <b-container id="wrapper">
      <h2 class="mb-2">예매 내역 확인</h2>
      <b-container id="content-box" class="p-5">
        <div class="content-header">
          <h4>{{ targetTicket.ticketName }}</h4>
          <div>
            <b-button class="mr-1" @click="goTo('my-page')"
              >마이페이지</b-button
            >
            <b-button @click="goTo('main-page')">메인페이지</b-button>
          </div>
        </div>

        <div class="grid-box">
          <div class="left">
            <img
              src="https://www.sac.or.kr/upfile/uploadfile/asa/goods/goods/2022/09/6cf446a2c87f7c632ba2ff4250f9351b.jpg"
              alt=""
            />
            <b-button @click="goToDetail('/detail')">상세보기</b-button>
          </div>
          <div class="right">
            <span><b>예매자</b></span>
            <span>송강</span>
            <span><b>예매번호</b></span>
            <span>{{ targetTicket.reservationNum }}</span>
            <span><b>이용일</b></span>
            <span>{{ targetTicket.choseDate }}</span>
            <span><b>장소</b></span>
            <span>예술의 전당</span>
            <span><b>티켓수령방법</b></span>
            <div>
              <p class="bold">예약 번호 입장</p>
              <p>
                - 공연 당일 현장 교부처에서 예약번호 및 본인 확인 후 티켓을
                수령하실 수 있습니다.
              </p>
              <p>
                - 상단 예매확인/취소 메뉴에서 예매내역을 프린트하여 가시면
                편리합니다.
              </p>
              <p class="bold">티켓 배송</p>
              <p>
                - 예매완료(결제익일) 기준 4~5일 이내에 배송됩니다. (주말,
                공휴일을 제외한 영업일 기준)
              </p>
              <p>
                - 배송 중 전달 불가사항이 발생할 시에는 반송되며, 본인 수령 불가
                시 경우에 따라 대리 수령도 가능합니다.
              </p>
              <p>
                - 공연 3일 전까지 티켓을 배송받지 못하신 경우
                고객센터(1544-1555)로 연락 주시기 바랍니다.
              </p>
              <p>
                - 반송이 확인되지 않은 티켓은 현장에서도 수령하실 수 없으며,
                공연 관람 및 환불이 불가합니다.
              </p>
              <p>
                - 티켓 배송 (배송상태 : 배송 준비중 이후) 후에는 주소 변경이
                불가합니다.
              </p>
              <p>
                - 부득이하게 주소 변경이 필요하신 경우 각 배송사에 수취 거절
                요청 후, 고객센터(1544-1555)로 재배송 신청할 수 있습니다.
                (배송비 3,000원 추가 부과)
              </p>
            </div>
          </div>
        </div>
      </b-container>
    </b-container>
  </div>
</template>

<style scoped>
#confirm {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
}

#wrapper {
  margin: 60px 0;
  padding-top: 48px;
  max-width: 1130px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #dce4ed;
}

#content-box {
  width: 95%;
}

.grid-box {
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
  grid-gap: 50px;

  margin-top: 30px;
}

.left {
  display: flex;
  flex-direction: column;
}

.right {
  display: grid;
  grid-template-columns: 0.25fr 0.75fr;
  grid-row-gap: 1em;
  /* grid-template-rows: repeat(4, 0.15fr) 1fr; */
}
.right b {
  color: white;
  background-color: rgb(108, 117, 125);
  padding: 0.5em;
}

h2,
h4 {
  font-weight: bold;
}

p {
  margin: 0;
}

span {
  margin-bottom: 10px;
}

img {
  margin-bottom: 10px;
}

.bold {
  font-weight: bold;
}

.btn {
  padding: 0.5em 1em;
  background-color: #25c4c2;

  font-size: 16px;
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.mr-1 {
  margin-right: 1em;
}
</style>

<script>
export default {
  data() {
    return {
      reservationNum: this.$route.params.reservationNum,
    };
  },
  methods: {
    //파라미터를 받아서 미리 설정된 name의 라우터로 이동하는 함수
    goTo(routeName) {
      this.$router
        .push({
          name: routeName,
        })
        .catch(() => {});
    },
    //클릭 시 전시 정보에 해당하는 상세 페이지로 이동하는 함수
    goToDetail(pathName) {
      this.$router
        .push({
          path: pathName + "/" + this.item.DP_SEQ,
        })
        .catch(() => {});
    },
  },
  computed: {
    targetTicket(reservationNum) {
      //로컬 스토리지에 저장된 예매 리스트 가져와서 새 배열에 저장
      let tempArray = JSON.parse(localStorage.getItem("reservation"));

      //예약 번호로 로컬 스토리지에 저장된 내역 가져옴
      const target = tempArray.filter((item) =>
        item.reservationNum.includes(reservationNum)
      );

      return target;
    },
  },
};
</script>
