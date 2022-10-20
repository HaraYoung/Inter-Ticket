<template>
  <div class="ticketArea">
    <h4>관람일</h4>
    <div class="calender">
      <b-calendar
        selected-variant="dark"
        today-variant="info"
        nav-button-variant="secondary"
        width="300px"
      ></b-calendar>
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
      <b-button class="ticketBtn" @click="modalShow = !modalShow">예매하기</b-button>
    </div>
    <span>
      <b-modal v-model="modalShow" :hide-header="true">예매되었습니다!</b-modal>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 1,
      value: "",
      context: null,
      modalShow: false
    };
  },
  methods: {
    onContext(ctx) {
      this.context = ctx;
    },
    onClickMinus() {
      if(this.counter < 2){
        alert('1매 이상 예매해주십시오')
        return
      }
      this.counter= this.counter - 1;
      console.log(this.counter);
    },
    onclickPlus() {
      this.counter= this.counter + 1;
      console.log(this.counter);
    }
  }
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