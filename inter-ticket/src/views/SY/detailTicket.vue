<template>
  <v-app class="ticketArea">
    <h4>관람일</h4>
    <div class="calender">
      <v-row justify="center">
        <v-date-picker
          v-model="picker"
          color="black lighten-1"
          @input="clickDate()"
          :min="this.MinDate ? '' : this.content.DP_START"
          :max="this.content.DP_END"
          prev-icon="mdi-skip-previous"
          next-icon="mdi-skip-next"
        ></v-date-picker>
      </v-row>
    </div>
    <div class="counter">
      <p>
        <b>예매 매수</b>
      </p>
      <div>
        <b-button @click="onClickMinus()">-</b-button>
        <b-button style="background-color: white; color: black">{{
          counter
        }}</b-button>
        <b-button @click="onclickPlus()">+</b-button>
      </div>
    </div>
    <div class="ticketBtnArea">
      <b-button
        class="ticketBtn"
        v-b-modal.modal-multi-1
        @click="onChangeModal(1)"
        >예매하기</b-button
      >
    </div>

    <!--예매 하기 버튼 클릭시 나타나는 모달-->
    <div class="modalArea">
      <!--첫번째 모달- 날짜와 매수 선택-->
      <div class="wrapper" v-if="openModal_1">
        <div class="firstModal">
          <h5>{{ content.DP_NAME }}</h5>
          <div class="firstModalText">
            <div>
              예매 날짜 : <span>{{ this.picker }}</span>
            </div>
            <div>
              예매 매수 : <span>{{ this.counter }}</span>
            </div>
            <div>예매하시겠습니까?</div>
          </div>

          <div class="firstBtnArea">
            <b-button class="ticketBtn" @click="onChangeModal(2)"
              >변경</b-button
            >
            <b-button class="ticketBtn" @click="onChangeModal(4)"
              >취소</b-button
            >
          </div>
        </div>
      </div>
      <!--두번째 모달- 날짜와 매수 확인-->
      <div class="wrapper" v-if="openModal_2">
        <div class="secondModal">
          <div>
            <div class="changeText">
              <h5>
                <b>변경되었습니다!</b>
              </h5>
            </div>
            <div class="secondBtnArea">
              <b-button
                class="ticketBtn"
                @click="[onChangeModal(3), onChangeUrl()]"
                >확인</b-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
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
      //모달들의 상태값
      openModal_1: false,
      openModal_2: false,
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
    minDateTrue() {
      //예매할 수 있는 날짜는 현재 날짜 이전은 예매 불가능하도록 하기
      let date = new Date();
      let startDate = new Date(this.content.DP_START);
      // let yy= startDate[0];
      // let mm='';
      // let dd='';
      // for(let i= 0; i <startDate.length; i++){
      //   console.log(startDate[i])
      // }
      // let startDate = this.content.DP_START;

      // 현재 날짜가 전시 시작날짜 보다 작다면(시작날짜가 과거다..) 현재날짜 이전을 디세이블
      if (startDate <= date) {
        return (this.MinDate = true);
      } else if (startDate >= date) {
        return (this.MinDate = false);
      }
    },
    //모달의 상태값을 바꾸는 메서드
    onChangeModal(num) {
      switch (num) {
        //예매하기 버튼을 클릭시 첫번째 모달이 나타남
        case 1:
          this.openModal_1 = true;
          console.log("openModal_1", this.openModal_1);
          break;

        //첫번째 모달에서 예매하기 버튼을 클릭시
        case 2:
          this.openModal_1 = false;
          this.openModal_2 = true;
          console.log(this.openModal_1, this.openModal_2);

          break;

        //두번째모달에서 확인을 눌렀을 때
        case 3:
          this.openModal_2 = false;
          console.log(this.openModal_2);
          break;

        //첫번째 모달에서 취소를 눌렀을 때
        case 4:
          this.openModal_1 = false;
          console.log(this.openModal_1);
          break;
      }
    },
  },
  computed: {},
  created() {
    this.minDateTrue();
  },
};
</script>

<style scoped>
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
.btn {
  background-color: #25c4c2;
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
  width: 100%;
  font-weight: bold;
  font-size: 1.1em;
}
.ticketBtnArea {
  padding-top: 0.5em;
  margin: auto;
}
.ticketBtn {
  padding: 0.5em 3em;
  color: white;
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
.secondModal > div {
  text-align: center;
}
.changeText {
  padding-top: 2em;
}
.secondBtnArea {
  padding-bottom: 0.5em;
}
.firstModal {
  box-sizing: border-box;

  position: relative;

  width: 40%;
  min-width: 300px;
  max-height: 80%;

  top: 50%;
  transform: translateY(-50%);

  margin: 0 auto;

  padding: 2em 3em;
  border: 1px solid gray;
  border-radius: 4px;
  background-color: white;
  text-align: center;
}
.firstModal h5 {
  padding: 1.5em 0;
  width: 80%;
  margin: auto;
}
.firstModal .firstModalText div {
  padding: 0.5em 0;
  font-weight: bold;
}
.firstModalText div span {
  color: red;
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
  display: inline-block;
  margin: 1em;
}
.btn {
  background-color: #25c4c2;
}
</style>
