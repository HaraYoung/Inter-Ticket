<template>
  <div class="modalArea">
    <!--첫번째 모달- 날짜와 매수 선택-->
    <v-app class="calenderModal" v-if="openModal_1">
      <h5>{{ item.ticketName }}</h5>
      <div class="calender">
        <v-date-picker
          v-model="picker"
          color="black lighten-1"
          @input="clickDate()"
          :min="this.MinDate ? this.item.DP_START : this.toDay"
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
        <b-button class="ticketBtn" @click="onChangeModal(1)">변경</b-button>
        <b-button class="ticketBtn" @click="closeModal(1)">취소</b-button>
      </div>
    </v-app>
    <!--두번째 모달- 날짜와 매수 확인-->
    <div class="secondModal" v-if="openModal_2">
      <div>
        <b>예매 날짜 : </b><span>{{ picker }}</span>
      </div>
      <div>
        <b>예매 매수 :</b> <span>{{ counter }}</span>
      </div>
      <div><b>예매 내용을 변경하시겠습니까?</b></div>
      <div class="secondBtnArea">
        <b-button class="ticketBtn" @click="onChangeModal(2)">확인</b-button>
        <b-button class="ticketBtn" @click="closeModal(2)">취소</b-button>
      </div>
    </div>
    <!--세번째 모달- 변경 확인-->
    <div class="lastModal" v-if="openModal_3">
      <div>
        <h5><b>변경되었습니다!</b></h5>
      </div>
      <b-button class="ticketBtn" @click="closeModal(3)">확인</b-button>
    </div>
  </div>
</template>
<style scoped>
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
  background-color: #dce4ed;
  width: 80%;
  border: 1px solid gray;
  border-radius: 4px;
}
.lastModal {
  background-color: #dce4ed;
  width: 80%;
  border: 1px solid gray;
  border-radius: 4px;
}
.lastModal div {
  padding-top: 3em;
}
.calenderModal {
  width: 80%;
  background-color: #dce4ed;
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
  props: {
    item: Object,
  },
  data() {
    return {
      //예매 매수를 카운팅할 값
      counter: 1,
      //캘린더에서 선택한 날짜 값
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      //전시명
      ticketName: "",
      //모달들의 상태값
      openModal_1: false,
      openModal_2: false,
      openModal_3: false,
    };
  },
  methods: {
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
      }
    },

    minDateChang() {},
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
      }
    },
  },
};
</script>
