<template>
  <div class="ticketArea">
    <h4>관람일</h4>
    <div class="calender">
      <b-calendar
        selected-variant="dark"
        today-variant="info"
        nav-button-variant="secondary"
      ></b-calendar>
    </div>
    <div class="counter">
      <p>예매 매수</p>
      <div>
        <b-button>-</b-button>
        <b-button variant="outline-dark">{{ counter }}</b-button>
        <b-button>+</b-button>
      </div>
    </div>
    <div>
      <b-button class="ticketBtn">예매하기</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 1,
      value: "",
      context: null,
    };
  },
  methods: {
    onContext(ctx) {
      this.context = ctx;
    },
  },
};
</script>

<style scoped>
.ticketArea {
  text-align: center;
  margin: 2em;
}
.ticketBtn {
  padding: 0.5em 7em;
  border: 1px solid #fffbe9;
  color: #fffbe9;
  margin: 0 1em;
}
.counter {
  display: flex;
  justify-content: space-around;
  padding-top: 3em;
}
.counter p {
  font-size: 18px;
  padding-top: 0.5em;
}
.calender {
  margin-top: 1em;
}
</style>