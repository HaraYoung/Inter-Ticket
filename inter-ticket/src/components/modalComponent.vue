<template>
  <div class="modalArea">
    <h4>{{ item.ticketName }}</h4>
    <v-date-picker
      v-model="picker"
      color="black lighten-1"
      @input="clickDate()"
      :min="this.MinDate ? this.item.DP_START : this.toDay"
      :max="this.item.DP_END"
      prev-icon="mdi-skip-previous"
      next-icon="mdi-skip-next"
    ></v-date-picker>
    <div class="counter">
      <p>예매 매수</p>
      <div>
        <b-button @click="onClickMinus()">-</b-button>
        <b-button variant="outline-dark">{{ counter }}</b-button>
        <b-button @click="onclickPlus()">+</b-button>
      </div>
    </div>
    <div class="ticketBtnArea">
      <b-button class="ticketBtn">예매하기</b-button>
    </div>
  </div>
</template>
<style scoped>
.modalArea {
  width: 50%;
  min-height: 50vh;
  background-color: burlywood;
}
</style>
<script>
export default {
  data() {
    return {
      //예매 매수를 카운팅할 값
      counter: 1,
      //캘린더에서 선택한 날짜 값
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      //전시명
      ticketName: ""
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
    }
  },
  props: {
    item: Object
  }
};
</script>