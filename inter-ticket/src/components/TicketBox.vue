<template>
  <b-row border-variant="primary" class="ticket-border ticket-flex py-3">
    <b-col>{{ item.choseDate }}</b-col>
    <b-col>{{ item.reservationNum }}</b-col>
    <b-col cols="3">{{ item.ticketName }}</b-col>
    <b-col cols="1">{{ item.ticketCount }}</b-col>
    <b-col>{{ item.date }}</b-col>
    <b-col>
      <span v-if="item.status.isCanceled">예매 취소</span>
      <div v-else class="btn-flex">
        <b-button size="sm" @click="modalEdit = !modalEdit">변경</b-button>
        <b-button size="sm" @click="modalCancel = !modalCancel">취소</b-button>
      </div>
    </b-col>
    <!-- 예매 변경 모달 -->
    <div>
      <b-modal v-model="modalEdit" :hide-header="true">
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
          <div class="ticketBtnArea">
            <b-button class="ticketBtn" v-b-modal.modal-multi-1
              >변경하기</b-button
            >
          </div>
          <!--예매하기 버튼 클릭시 나타나는 모달-->
          <span>
            <!--예매 변경 모달-->
            <b-modal
              id="modal-multi-1"
              size="lg"
              title="First Modal"
              ok-only
              no-stacking
            >
              <div>예매 날짜 : {{ this.picker }}</div>
              <div>예매 매수 : {{ this.counter }}</div>
              <div>예매 내용을 변경하시겠습니까?</div>
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
            <!--두번째 나타날 모달[변경 완료시]-->
            <b-modal id="modal-multi-2" title="Second Modal" ok-only>
              <div>예매되었습니다!</div>
              <template #modal-footer="{ cancel }">
                <b-button
                  size="sm"
                  variant="danger"
                  @click="cancel(), onChangeUrl()"
                  >확인</b-button
                >
              </template>
            </b-modal>
          </span>
        </v-app>
      </b-modal>
    </div>
    <!-- 예매 변경 모달 -->
    <!-- 예매 취소 모달 -->
    <div>
      <b-modal v-model="modalCancel" :hide-header="true"
        >예매를 취소하시겠습니까?</b-modal
      >
    </div>
    <!-- 예매 취소 모달 -->
  </b-row>
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
.ticketBtn {
  padding: 0.5em 6em;
  color: #fffbe9;
  margin: 0 1em;
  font-size: 0.9em;
}
.counter {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1.5em;
}
.counter p {
  font-size: 1em;
  padding-top: 0.5em;
}
.calender {
  margin-top: 1em;
}
</style>

<script>
export default {
  data: function () {
    return {
      modalEdit: false,
      modalCancel: false,
      dialog: false,
      value: "",
      context: null,
      modalShow: false,
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
  },
};
</script>