<template>
  <v-app class="ticketArea">
    <h4>관람일</h4>
    <div class="calender">
      <v-row justify="center">
        <v-date-picker
          v-model="picker"
          color="black lighten-1"
          @input="clickDate()"
          :min="this.MinDate ? this.content.DP_START : this.toDay"
          :max="this.content.DP_END"
          prev-icon="mdi-skip-previous"
          next-icon="mdi-skip-next"
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
      <b-button class="ticketBtn" v-b-modal.modal-multi-1>예매하기</b-button>
    </div>
    <!--예매 하기 버튼 클릭시 나타나는 모달-->
    <span>
      <!--예매 확인 모달-->
      <b-modal
        id="modal-multi-1"
        size="lg"
        title="First Modal"
        ok-only
        no-stacking
      >
        <div>{{ content.DP_NAME }}</div>
        <div>예매 날짜 : {{ this.picker }}</div>
        <div>예매 매수 : {{ this.counter }}</div>
        <div>예매하시겠습니까?</div>
        <template #modal-footer="{ ok, cancel }">
          <b-button
            size="sm"
            variant="success"
            @click="ok()"
            v-b-modal.modal-multi-2
            >확인</b-button
          >
          <b-button size="sm" variant="danger" @click="cancel()">취소</b-button>
        </template>
      </b-modal>
      <!--두번째 나타날 모달[예매 완료시]-->
      <b-modal id="modal-multi-2" title="Second Modal" ok-only>
        <div>예매되었습니다!</div>
        <template #modal-footer="{ cancel }">
          <b-button size="sm" variant="danger" @click="cancel(), onChangeUrl()"
            >확인</b-button
          >
        </template>
      </b-modal>
    </span>
  </v-app>
</template>

<script>
export default {
  props: ["content"],
  data() {
    return {
      toDay: new Date().toLocaleDateString(),
      //전시명
      ticketName: "",
      //캘린더에서 선택한 날짜 값
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      //예매 매수를 카운팅할 값
      counter: 1,
      //예매 내역을 저장할 배열
      reservation: [],
      //예매할 수 있는 최소 날짜
      MinDate: true,
    };
  },
  methods: {
    //예매가 완료된 후 확인 버튼 클릭시 마이페이지로 이동하고
    //로컬스토리지에 예매정보를 추가하는 메서드
    onChangeUrl() {
      window.location.replace("http://localhost:8080/mypage");

      // 예매 내역에 저장해야 하는 데이터들
      // "id": 0,
      // "date": "2022-11-31",
      // "reservationNum": "A111111111",
      // "title": "반 고흐 영혼의 편지",
      // "amount": 1,
      // "reserveDate": "2022-09-15",
      // "status": {
      //   "isCanceled": 0
      // }

      //1. 로컬스토리지에 저장된 내역이 있는지 확인
      if (JSON.parse(localStorage.getItem("reservation"))) {
        //1-1. 저장된 내역이 있으면 getItem으로 해당 데이터 가져와서 배열에 push
        this.reservation = JSON.parse(localStorage.getItem("reservation"));
        //새 예매 내역 push
        this.reservation.push({
          id: Math.floor(Math.random() * 999999999),
          date: new Date().toISOString().substr(0, 10),
          reservationNum: "T" + Math.floor(Math.random() * 999999999),
          ticketName: this.content.DP_NAME,
          ticketCount: this.counter,
          choseDate: this.picker,
          status: {
            isCanceled: 0,
          },
        });
        //업데이트된 배열 로컬스토리지에 저장
        localStorage.setItem("reservation", JSON.stringify(this.reservation));
      } else {
        //1-2. 저장된 내역 없으면 곧바로 배열에 예매 내역 저장
        this.reservation.push({
          id: Math.floor(Math.random() * 999999999),
          date: new Date().toISOString().substr(0, 10),
          reservationNum: "T" + Math.floor(Math.random() * 999999999),
          ticketName: this.content.DP_NAME,
          ticketCount: this.counter,
          choseDate: this.picker,
          status: {
            isCanceled: 0,
          },
        });
        //업데이트된 배열 로컬스토리지에 저장
        localStorage.setItem("reservation", JSON.stringify(this.reservation));
      }
    },
    //예매 매수 - 버튼 클릭시
    onClickMinus() {
      //예매 매수가 1일때 -버튼 클릭시 나타나는 alert
      if (this.counter < 2) {
        alert("1매 이상 예매해주십시오");
        return;
      }
      this.counter = this.counter - 1;
      console.log(this.counter);
    },
    //예매 매수 + 버튼 클릭시
    onclickPlus() {
      this.counter = this.counter + 1;
      console.log(this.counter);
    },

    //선택한 날짜 값과 예매 매수 콘솔에서 확인
    clickDate() {
      console.log(this.picker);
      console.log(this.counter);
    },
    //예매할 수 있는 날짜는 현재 날짜 이전은 예매 불가능하도록 하기
    contentMinDate() {
      let date = new Date();
      //let startDate = new Date(this.content.DP_START);
      let startDate= this.content.DP_START
      // let arr = startDate.map((v)=> {
      //   arr.push(v)
      // });
      console.log(
        date.toLocaleDateString(),
        " ,,, ",
        startDate
        // startDate.toLocaleDateString()
      );
      // 현재 날짜가 전시 시작날짜 보다 작다면(시작날짜가 과거다..) 현재날짜 이전을 디세이블
      if (startDate <= date) {
        this.MinDate = false;
      } else if (startDate >= date) {
        this.MinDate = true;
      }
      console.log(this.MinDate);
      return this.MinDate;
    },
  },
  created() {
    this.contentMinDate();
  },
};
</script>

<style scoped>
::v-deep .v-application--wrap {
  min-height: fit-content;
}
.ticketArea {
  background-color: white;
  padding: 2em;
  max-width: 345px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ticketArea h4 {
  text-align: center;
  color: black;
  background-color: white;
  width: 100%;
  font-weight: bold;
  font-size: 1.1em;
}
.ticketBtnArea {
  margin-top: 1em;
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
