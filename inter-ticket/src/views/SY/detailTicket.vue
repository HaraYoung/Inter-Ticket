<template>
  <v-app class="ticketArea">
    <h4>관람일</h4>
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
    <span>
      <b-modal
        id="modal-multi-1"
        size="lg"
        title="First Modal"
        ok-only
        no-stacking
      >
        <div>전시 명</div>
        <div>예매 날짜 : {{ this.picker }}</div>
        <div>예매 매수 : {{ this.counter }}</div>
        <div>예매하시겠습니까?</div>
        <template #modal-footer="{ ok, cancel }">
          <b-button
            size="sm"
            variant="success"
            @click="ok()"
            v-b-modal.modal-multi-2
          >
            확인
          </b-button>
          <b-button size="sm" variant="danger" @click="cancel()">
            취소
          </b-button>
        </template>
      </b-modal>
      <b-modal id="modal-multi-2" title="Second Modal" ok-only>
        <div>예매되었습니다!</div>
        <template #modal-footer="{ cancel }">
          <b-button size="sm" variant="danger" @click="cancel(), onChangeUrl()">
            확인
          </b-button>
        </template>
      </b-modal>
    </span>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      counter: 1,
      value: "",
      context: null,
      modalShow: false,
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
    };
  },
  methods: {
    onChangeUrl() {
      window.location.replace("http://localhost:8080/mypage");
    },
    onClickMinus() {
      if (this.counter < 2) {
        alert("1매 이상 예매해주십시오");
        return;
      }
      this.counter = this.counter - 1;
      console.log(this.counter);
    },
    onclickPlus() {
      this.counter = this.counter + 1;
      console.log(this.counter);
    },

    //선택한 날짜 값
    clickDate() {
      console.log(this.picker);
      console.log(this.counter);
    },
  },
};
</script>

<style scoped>
.ticketArea {
  background-color: white;
  padding: 1em 2em;
  max-height: 90vh;
  max-width: 345px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ticketArea h4 {
  text-align: center;
  color: #53513d;
  background-color: #f0e7db;
  padding: 0.5em;
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
