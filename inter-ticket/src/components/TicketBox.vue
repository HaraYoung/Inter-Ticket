<template>
  <div>
    <b-row border-variant="primary" class="ticket-border ticket-flex py-3">
      <b-col>{{ item.choseDate }}</b-col>
      <b-col>{{ item.reservationNum }}</b-col>
      <b-col cols="3">{{ item.ticketName }}</b-col>
      <b-col cols="1">{{ item.ticketCount }}</b-col>
      <b-col>{{ item.date }}</b-col>
      <b-col>
        <span v-if="item.status.isCanceled">예매 취소</span>
        <div v-else class="btn-flex">
          <b-button size="sm" @click="onClickChange('open')">변경</b-button>
          <b-button size="sm" @click="onClickChange('cancel')">취소</b-button>
        </div>
      </b-col>
    </b-row>
    <div class="modalArea">
      <!-- 변경 버튼 클릭시 열리는 모달 -->
      <!--첫번째 모달- 날짜와 매수 선택-->
      <div class="wrapper" v-if="openModal_1">
        <v-app class="calenderModal">
          <h5>{{ item.ticketName }}</h5>
          <div class="calender">
            <v-date-picker
              v-model="picker"
              color="black lighten-1"
              :min="this.item.DP_START"
              :max="this.item.DP_END"
              prev-icon="mdi-skip-previous"
              next-icon="mdi-skip-next"
            ></v-date-picker>
          </div>
          <div class="counter">
            <p><b>예매 매수</b></p>
            <div>
              <b-button @click="onClickMinus()">-</b-button>
              <b-button style="background-color: black">{{ counter }}</b-button>
              <b-button @click="onclickPlus()">+</b-button>
            </div>
          </div>
          <div class="firstBtnArea">
            <b-button class="ticketBtn" @click="onChangeModal(1)"
              >변경</b-button
            >
            <b-button class="ticketBtn" @click="closeModal(1)">취소</b-button>
          </div>
        </v-app>
      </div>
      <!--두번째 모달- 날짜와 매수 확인-->
      <div class="wrapper" v-if="openModal_2">
        <div class="secondModal">
          <div>
            <b>예매 날짜 : </b><span>{{ picker }}</span>
          </div>
          <div>
            <b>예매 매수 :</b> <span>{{ counter }}</span>
          </div>
          <div><b>예매 내용을 변경하시겠습니까?</b></div>
          <div class="secondBtnArea">
            <b-button
              class="ticketBtn"
              @click="
                [onChangeModal(2), ticketEditHandler(item.reservationNum)]
              "
              >확인</b-button
            >
            <b-button class="ticketBtn" @click="closeModal(2)">취소</b-button>
          </div>
        </div>
      </div>
      <!--세번째 모달- 변경 확인-->
      <div class="wrapper" v-if="openModal_3">
        <div class="lastModal">
          <div>
            <h5><b>변경되었습니다!</b></h5>
          </div>
          <b-button class="ticketBtn" @click="[closeModal(3), onRefresh()]"
            >확인</b-button
          >
        </div>
      </div>
      <!-- 변경 버튼 클릭시 열리는 모달 -->

      <!-- 취소 버튼 클릭시 열리는 모달 -->
      <!-- 첫번째 모달- 취소 여부 묻기 -->
      <div class="wrapper" v-if="cancelModal_1">
        <div class="secondModal">
          <div><b>예매를 취소하시겠습니까?</b></div>
          <div class="secondBtnArea">
            <b-button
              class="ticketBtn"
              @click="
                [onChangeModal(3), ticketCancelHandler(item.reservationNum)]
              "
              >확인</b-button
            >
            <b-button class="ticketBtn" @click="closeModal(4)">취소</b-button>
          </div>
        </div>
      </div>
      <!--두번째 모달- 취소 확인-->
      <div class="wrapper" v-if="cancelModal_2">
        <div class="lastModal">
          <div>
            <h5><b>취소되었습니다!</b></h5>
          </div>
          <b-button class="ticketBtn" @click="[closeModal(5), onRefresh()]"
            >확인</b-button
          >
        </div>
      </div>
      <!-- 취소하는 버튼 클릭시 열리는 모달 -->
    </div>
  </div>
</template>

<style scoped>
.ticket-flex {
  display: flex;
  align-items: center;
}

.ticket-border {
  border-bottom: 1px solid #6c757d;
}

.btn-flex {
  display: flex;
  justify-content: space-around;
}

span {
  font-weight: bold;
  color: red;
}
.wrapper {
  box-sizing: border-box;

  position: fixed;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 999;

  background-color: rgba(0, 0, 0, 0.6);

  outline: 0;
}
::v-deep .v-application--wrap {
  min-height: fit-content;
}
.modalArea {
  position: absolute;
  width: 50%;
  left: 30%;
  top: 8%;
}
.secondModal {
  box-sizing: border-box;

  position: relative;

  background-color: white;

  width: 35%;
  min-width: 300px;
  max-height: 80%;

  top: 50%;
  transform: translateY(-50%);

  margin: 0 auto;

  padding: 0;
  border: 1px solid gray;
  border-radius: 4px;
}
.lastModal {
  box-sizing: border-box;

  position: relative;

  background-color: white;

  width: 35%;
  min-width: 300px;
  max-height: 80%;

  top: 50%;
  transform: translateY(-50%);

  margin: 0 auto;

  padding: 0;
  border: 1px solid gray;
  border-radius: 4px;
}
.lastModal div {
  padding-top: 3em;
}
.calenderModal {
  box-sizing: border-box;

  position: relative;

  width: 35%;
  min-width: 300px;
  max-height: 80%;

  top: 50%;
  transform: translateY(-50%);

  margin: 0 auto;

  padding: 0;
  border: 1px solid gray;
  border-radius: 4px;
}
.calenderModal h5 {
  padding-top: 1.5em;
  width: 80%;
  margin: auto;
}
.calender {
  padding-top: 2em;
  margin: auto;
}
.counter {
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 2em;
  margin: auto;
}
.counter p {
  font-size: 1em;
  padding-top: 0.5em;
}
.firstBtnArea {
  padding-bottom: 1em;
}
.ticketBtn {
  padding: 0.5em 1em;
  display: inline-block;
  margin: 1em;
}
.btn {
  background-color: #25c4c2;
}
.secondModal div {
  padding: 1em;
}
.secondModal div:last-child {
  padding-bottom: 2em;
}
.secondModal div:first-child {
  padding-top: 5em;
}
.secondModal div span {
  font-size: 18px;
}
</style>

<script>
export default {
  data: function () {
    return {
      //기본값은 기예매날짜
      picker: this.item.choseDate,
      //기본값은 기예매매수
      counter: this.item.ticketCount,
      //모달들의 상태값
      openModal_1: false,
      openModal_2: false,
      openModal_3: false,
      cancelModal_1: false,
      cancelModal_2: false,
    };
  },
  props: {
    item: Object,
  },
  methods: {
    //예매일 변경하는 함수
    dateChanger() {
      this.picker = new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10);
    },
    //예매 매수 - 버튼 클릭시
    onClickMinus() {
      //예매 매수가 1일때 -버튼 클릭시 나타나는 alert
      if (this.counter < 2) {
        alert("1매 이상 예매해주십시오");
        return;
      }
      this.counter = this.counter - 1;
    },
    //예매 매수 + 버튼 클릭시
    onclickPlus() {
      this.counter = this.counter + 1;
    },
    //예매 취소하는 함수
    ticketCancelHandler(reservationNum) {
      //로컬 스토리지에 저장된 예매 리스트 가져와서 새 배열에 저장
      let tempArray = JSON.parse(localStorage.getItem("reservation"));

      //예약 번호로 로컬 스토리지에 저장된 내역 가져오고 tempArray에서 해당 내역 임시 삭제
      const targetTicket = tempArray.filter((item) =>
        item.reservationNum.includes(reservationNum)
      );
      tempArray = tempArray.filter(
        (item) => item.reservationNum != reservationNum
      );

      //티켓의 취소 여부 변경
      targetTicket[0].status.isCanceled = 1;

      //변경된 티켓 내역 tempArray에 반영
      tempArray.push(...targetTicket);

      //로컬 스토리지에 저장되어 있던 원 데이터 삭제하고 변경된 tempArray 다시 로컬 스토리지에 저장
      localStorage.removeItem("reservation");
      localStorage.setItem("reservation", JSON.stringify(tempArray));
    },
    //예매 변경하는 함수
    ticketEditHandler(reservationNum) {
      //로컬 스토리지에 저장된 예매 리스트 가져와서 새 배열에 저장
      let tempArray = JSON.parse(localStorage.getItem("reservation"));

      //예약 번호로 로컬 스토리지에 저장된 내역 가져옴
      const targetTicket = tempArray.filter((item) =>
        item.reservationNum.includes(reservationNum)
      );

      //변경 사항 반영
      targetTicket[0].choseDate = this.picker;
      targetTicket[0].ticketCount = this.counter;

      //tempArray에 변경 사항 반영
      let temptemp = tempArray.map((item) =>
        item.reservationNum === reservationNum ? { ...targetTicket[0] } : item
      );

      //로컬 스토리지에 저장되어 있던 원 데이터 삭제하고 변경된 tempArray 다시 로컬 스토리지에 저장
      localStorage.removeItem("reservation");
      localStorage.setItem("reservation", JSON.stringify(temptemp));
    },
    //페이지 새로고침
    onRefresh() {
      this.$router.go();
    },
    onChangeModal(num) {
      switch (num) {
        case 1:
          this.openModal_1 = false;
          this.openModal_2 = true;
          break;
        case 2:
          this.openModal_2 = false;
          this.openModal_3 = true;
          break;
        case 3:
          this.cancelModal_1 = false;
          this.cancelModal_2 = true;
          break;
      }
    },
    closeModal(num) {
      switch (num) {
        case 1:
          this.openModal_1 = false;
          break;
        case 2:
          this.openModal_2 = false;
          break;
        case 3:
          this.openModal_3 = false;
          break;
        case 4:
          this.cancelModal_1 = false;
          break;
        case 5:
          this.cancelModal_2 = false;
          break;
      }
    },
    onClickChange(val) {
      if (val === "open") {
        this.openModal_1 = true;
      } else {
        this.cancelModal_1 = true;
      }
    },
  },
};
</script>
