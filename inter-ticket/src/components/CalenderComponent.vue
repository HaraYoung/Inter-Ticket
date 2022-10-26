<template>
    <v-app>
        <div class="calender">
      <v-row justify="center">
        <v-date-picker
          v-model="picker"
          color="black lighten-1"
          @input="clickDate()"
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
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
    return {
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
    };
  },
  methods: {
    //예매가 완료된 후 확인 버튼 클릭시 마이페이지로 이동하고
    //로컬스토리지에 예매정보를 추가하는 메서드
    onChangeUrl() {
      window.location.replace("http://localhost:8080/mypage");
      this.ticketName = "전시명";

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
          ticketName: this.ticketName,
          choseDate: this.picker,
          ticketCount: this.counter,
        });
        //업데이트된 배열 로컬스토리지에 저장
        localStorage.setItem("reservation", JSON.stringify(this.reservation));
      } else {
        //1-2. 저장된 내역 없으면 곧바로 배열에 예매 내역 저장
        this.reservation.push({
          ticketName: this.ticketName,
          choseDate: this.picker,
          ticketCount: this.counter,
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
  },
})
</script>