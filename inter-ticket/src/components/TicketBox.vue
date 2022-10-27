<template>
  <div>
    <ModalComponent item="item" />
    <b-row border-variant="primary" class="ticket-border ticket-flex py-3">
      <b-col>{{ item.choseDate }}</b-col>
      <b-col>{{ item.reservationNum }}</b-col>
      <b-col cols="3">{{ item.ticketName }}</b-col>
      <b-col cols="1">{{ item.ticketCount }}</b-col>
      <b-col>{{ item.date }}</b-col>
      <b-col>
        <span v-if="item.status.isCanceled">예매 취소</span>
        <div v-else class="btn-flex">
          <b-button size="sm" v-b-modal.modal-multi-1>변경</b-button>
          <b-button size="sm" v-b-modal="'my-modal'">취소</b-button>

          <!--변경 버튼 클릭시 나타나는 모달-->
          <span>
            <b-modal
              id="modal-multi-1"
              size="lg"
              title="예매 변경"
              ok-only
              no-stacking
            >
              <v-app class="ticketArea">
                <h4>{{ item.ticketName }}</h4>
                <div class="calender">
                  <v-row justify="center">
                    <v-date-picker
                      v-model="picker"
                      color="black lighten-1"
                      @click="dateChanger"
                    ></v-date-picker>
                  </v-row>
                </div>
                <div class="counter">
                  <p>예매 매수</p>
                  <div>
                    <b-button @click="onClickMinus()">-</b-button>
                    <b-button variant="outline-dark">{{ counter }}</b-button>
                    <b-button @click="onclickPlus()">+</b-button>
                  </div>
                </div>
              </v-app>
              <template #modal-footer="{ ok, cancel }">
                <b-button
                  size="sm"
                  variant="success"
                  @click="ok()"
                  v-b-modal.modal-multi-2
                  >확인</b-button
                >
                <b-button size="sm" variant="danger" @click="cancel()"
                  >취소</b-button
                >
              </template>
            </b-modal>
            <b-modal id="modal-multi-2" title="예매 변경">
              <div class="my-2">
                <div>예매 날짜 : {{ this.picker }}</div>
                <div>예매 매수 : {{ this.counter }}</div>
                <div>예매 내용을 변경하시겠습니까?</div>
              </div>
              <template #modal-footer="{ ok, cancel }">
                <b-button
                  v-b-modal.modal-multi-3
                  variant="success"
                  size="sm"
                  @click="ok()"
                  >확인</b-button
                >
                <b-button size="sm" variant="danger" @click="cancel()"
                  >취소</b-button
                >
              </template>
            </b-modal>
            <b-modal id="modal-multi-3" size="sm" title="예매 변경" ok-only>
              <p class="my-1">변경되었습니다!</p>
            </b-modal>
          </span>
          <b-modal id="my-modal">Hello From My Modal!</b-modal>
        </div>
      </b-col>
    </b-row>
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

.ticketArea {
  background-color: white;
  padding: 1em 2em;
  max-height: 65vh;
}
.ticketArea h4 {
  text-align: center;
  color: #53513d;
  background-color: white;
  padding: 0.5em;
  width: 100%;
  font-weight: bold;
  font-size: 1.1em;
}
.ticketBtnArea {
  margin-top: 1em;
  display: flex;
  justify-content: center;
}
.counter {
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 1.5em;
  margin: auto;
}
.counter p {
  font-size: 1em;
  padding-top: 0.5em;
}
.calender {
  width: 50%;
  margin-top: 1em;
  margin: auto;
}
::v-deep .v-application--wrap {
  min-height: fit-content;
}
</style>

<script>
import ModalComponent from "../components/modalComponent.vue";
export default {
  components: {
    ModalComponent,
  },
  data: function () {
    return {
      //취소 버튼 클릭시 나타는 모달을 보여주는 변수들
      modalShow: false,
      subModalShow: false,
      //캘린더에서 선택한 날짜
      //기본값은 기예매날짜
      picker: this.item.choseDate,
      //예매 매수를 카운팅할 값
      //기본값은 기예매매수
      counter: this.item.ticketCount,
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

      //페이지 새로고침
      this.$router.go();

      //마지막으로 첫 번째 모달과 두 번째 모달을 한꺼번에 닫음
      this.modalShow = !this.modalShow;
      this.subModalShow = !this.subModalShow;
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
      targetTicket[0].picker = this.picker;
      targetTicket[0].counter = this.counter;

      //tempArray에 변경 사항 반영
      tempArray = tempArray.map((item) =>
        item.reservationNum === reservationNum ? targetTicket : item
      );

      //로컬 스토리지에 저장되어 있던 원 데이터 삭제하고 변경된 tempArray 다시 로컬 스토리지에 저장
      localStorage.removeItem("reservation");
      localStorage.setItem("reservation", JSON.stringify(tempArray));

      //페이지 새로고침
      this.$router.go();
    },
  },
};
</script>