<!-- 파일 이름: detailTicket.vue -->
<!-- 파일 설명: 상세 페이지의 예매 영역 -->
<!-- 작성자: 박세영, 황유진, 이메일: sypark@feelanet.com, yjhwang@feelanet.com -->

<template>
  <!--상세 페이지의 티켓 예매 영역-->
  <v-app class="ticketArea">
    <h4>관람일</h4>
    <!--캘린더 영역 -->
    <div class="calender">
      <v-row justify="center">
        <v-date-picker
          v-model="picker"
          color="black lighten-1"
          :min="this.MinDate ? '' : this.content.dp_start"
          :max="this.content.dp_end"
          prev-icon="mdi-skip-previous"
          next-icon="mdi-skip-next"
        ></v-date-picker>
      </v-row>
    </div>
    <!--예매 매수 영역-->
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
    <!--예매하기 버튼-->
    <div class="ticketBtnArea">
      <b-button
        class="ticketBtn"
        v-b-modal.modal-multi-1
        @click="onChangeModal(2)"
        >예매하기</b-button
      >
    </div>

    <!--예매 하기 버튼 클릭시 나타나는 모달-->
    <Modal
      :openModal_1="this.openModal_1"
      :openModal_2="this.openModal_2"
      :content="this.content"
    >
      <template #modal_1>
        <div class="firstModal">
          <h5>전시명</h5>
          <div class="firstModalText">
            <div>
              <b>예매 날짜 :</b>
              <span>{{ picker }}</span>
            </div>
            <div>
              <b>예매 매수 :</b>
              <span>{{ counter }}</span>
            </div>
            <div>
              <b>예매하시겠습니까?</b>
            </div>
          </div>
          <div class="firstBtnArea">
            <b-button class="ticketBtn" @click="onChangeModal(3)"
              >확인</b-button
            >
            <b-button class="ticketBtn" @click="onChangeModal(6)"
              >취소</b-button
            >
          </div>
        </div>
      </template>
      <template #modal_2>
        <div class="secondModal">
          <div>
            <div class="changeText">
              <h5>
                <b>예매되었습니다!</b>
              </h5>
            </div>
            <div class="secondBtnArea">
              <b-button
                class="ticketBtn"
                @click="[onChangeModal(4), onChangeUrl()]"
                >확인</b-button
              >
            </div>
          </div>
        </div>
      </template>
    </Modal>
  </v-app>
</template>

<script>
import { fetchBookTicket } from "@/API";
import Modal from "../../components/ModalComponent.vue";
export default {
  components: {
    Modal,
  },
  props: ["content"],
  data() {
    return {
      toDay: new Date(),
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
      openModal_0: null,
      openModal_1: false,
      openModal_2: false,
    };
  },
  methods: {
    //예매가 완료된 후 확인 버튼 클릭시 마이페이지로 이동하고
    //로컬스토리지에 예매정보를 추가하는 메서드
    onChangeUrl() {
      window.location.replace("http://localhost:8080/mypage");

      //yjhwang(userSeq = 1)로 로그인했다 가정
      fetchBookTicket(this.counter, this.picker, this.content.dp_seq, 1).then(
        (res) => console.log(res.data)
      );
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

    //예매할 수 있는 날짜는 현재 날짜 이전은 예매 불가능하도록 하기
    /**
     * 최종적으로는 전시 시작 날짜 > 오늘 : 기본 picker값으로 전시 시작 날짜이고
     * 전시 시작 날짜 < 오늘 : 기본 picker값으로 오늘+1 (당일 예매 X)를 하려고 했다.
     * 그러기 위해 날짜값을 비교하기위해 문자열로 저장된 데이터를 new Date('데이터')로 만들었다
     * 값이 잘 변환되었는지 확인하기 위해 console을 찍었을 때 Invalid Date라는 값만 출력되었다
     * (mounted, created, 어떤 아이템을 클릭했을 때 전부 확인해 보았을 때 똑같았다)
     * 구글링을 해본 결과 생성자로 객체를 생성할 경우 값을 정화가히 지정해 넣어줘야 한다고 나와있어
     * split으로 데이터의 값을 잘라서 넣기 위해 시도했지만 split을 사용할 수 없다는 에러가 떴다.
     * 라이프 사이클 함수에 대한 이해가 좀 더 필요하다 느꼈고 이 부분만 단위 테스트로 다시 해보겠다.
     */
    minDateTrue() {
      let date = new Date();
      let startDate = new Date(this.content.DP_START);

      // 현재 날짜가 전시 시작날짜 보다 작다면(시작날짜가 과거) 현재날짜 이전을 디세이블
      if (startDate <= date) {
        return (this.MinDate = true);
      } else if (startDate >= date) {
        return (this.MinDate = false);
      }
    },
    //모달의 상태값을 바꾸는 메서드
    onChangeModal(num) {
      switch (num) {
        //마이페이지 변경 버튼 클릭시 캘린더 모달 open
        case 1:
          this.openModal_0 = true;
          break;

        //캘린더 모달에서 확인 버튼 클릭시 캘린더 모달 close 두번째 모달 open
        //캘린더 모달이 없을 경우 두번째 모달 open
        case 2:
          //만약 캘린더 모달의 상태값이 있다면
          if (this.openModal_0 !== undefined) {
            this.openModal_0 = false;
          }
          this.openModal_1 = true;
          break;
        //두번째 모달에서 확인 버튼 클릭시 두번째 모달 close 세번째 모달 open
        case 3:
          this.openModal_1 = false;
          this.openModal_2 = true;
          break;
        //세번째 모달 확인 버튼 클릭시 close
        case 4:
          this.openModal_2 = false;
          break;

        //캘린더 모달에서 취소 버튼 클릭시
        case 5:
          this.openModal_0 = false;
          break;
        //두번째 모달에서 취소 버튼 클릭시
        case 6:
          this.openModal_1 = false;
          break;
      }
    },
  },
  created() {
    //캘린더에 활성화될 최소 날짜 값을 변경해줄 함수 실행
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
b {
  font-size: 18px;
}
</style>
