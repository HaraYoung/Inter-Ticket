<!-- 파일 이름: TicketBox.vue -->
<!-- 파일 설명: 마이 페이지의 예매 내역 컴포넌트 -->
<!-- 작성자: 박세영, 황유진, 이메일: sypark@feelanet.com, yjhwang@feelanet.com -->

<template>
  <div>
    <b-row border-variant="primary" class="ticket-border ticket-flex py-3">
      <b-col>{{ item.choseDate }}</b-col>
      <b-col>{{ item.reservationNum }}</b-col>
      <b-col cols="3">{{ item.ticketName }}</b-col>
      <b-col cols="1">{{ item.ticketCount }}</b-col>
      <!-- DB 연결 후에 반영할 부분 -->
      <!-- default는 예매일, 취소 후 취소일 값이 생기면 취소일 출력 -->
      <b-col>{{ item.date }}</b-col>
      <b-col>
        <span v-if="item.status.isCanceled">예매 취소</span>
        <div v-else class="btn-flex">
          <b-button size="sm" @click="onChangeModal(1)">변경</b-button>
          <b-button size="sm" @click="closeModal(1)">취소</b-button>
          <b-button size="sm" @click="reviewModel(1)">관람평</b-button>
        </div>
      </b-col>
    </b-row>
    <div class="modalArea">
      <!-- 변경 버튼 클릭시 열리는 모달 -->
      <Modal
        :openModal_1="this.openModal_1"
        :openModal_2="this.openModal_2"
        :openModal_0="this.openModal_0"
      >
        <template #modal_0>
          <v-app class="calenderModal">
            <h5>{{ item.ticketName }}</h5>
            <div class="calender">
              <v-date-picker
                v-model="picker"
                color="black lighten-1"
                :min="item.DP_START"
                :max="item.DP_END"
                prev-icon="mdi-skip-previous"
                next-icon="mdi-skip-next"
              ></v-date-picker>
            </div>
            <div class="counter">
              <p>
                <b>예매 매수</b>
              </p>
              <div>
                <b-button @click="onClickMinus()">-</b-button>
                <b-button style="background-color: black">
                  {{ counter }}
                </b-button>
                <b-button @click="onclickPlus()">+</b-button>
              </div>
            </div>
            <div class="firstBtnArea">
              <b-button class="ticketBtn" @click="onChangeModal(2)"
                >변경</b-button
              >
              <b-button class="ticketBtn" @click="onChangeModal(5)"
                >취소</b-button
              >
            </div>
          </v-app>
        </template>
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
              <b-button
                class="ticketBtn"
                @click="
                  [onChangeModal(3), ticketEditHandler(item.reservationNum)]
                "
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
                  <b>변경되었습니다!</b>
                </h5>
              </div>
              <div class="secondBtnArea">
                <b-button
                  class="ticketBtn"
                  @click="[onChangeModal(4), onRefresh()]"
                  >확인</b-button
                >
              </div>
            </div>
          </div>
        </template>
      </Modal>
      <!-- 변경 버튼 클릭시 열리는 모달 -->

      <!-- 취소 버튼 클릭시 열리는 모달 -->
      <!-- 첫번째 모달- 취소 여부 묻기 -->
      <Modal
        :openModal_1="this.cancelModal_1"
        :openModal_2="this.cancelModal_2"
      >
        <template #modal_1>
          <div class="secondModal">
            <h5>
              <b>예매를 취소하시겠습니까?</b>
            </h5>
            <div class="secondBtnArea">
              <b-button
                class="ticketBtn"
                @click="
                  [closeModal(2), ticketCancelHandler(item.reservationNum)]
                "
                >확인</b-button
              >
              <b-button class="ticketBtn" @click="closeModal(4)">취소</b-button>
            </div>
          </div>
        </template>
        <template #modal_2>
          <div class="lastModal">
            <div>
              <h5>
                <b>취소되었습니다!</b>
              </h5>
            </div>
            <b-button class="ticketBtn" @click="[closeModal(3), onRefresh()]"
              >확인</b-button
            >
          </div>
        </template>
      </Modal>

      <Modal
        :openModal_1="this.reviewModel_1"
        :openModal_2="this.reviewModel_2"
      >
        <template #modal_1>
          <div class="secondModal">
            <h3>
              <b>관람평 작성</b>
            </h3>
            <div class="review-desc">
              <!--Vue-star-rating 라이브러리-->
              <star-rating :star-size="40" :show-rating="false"></star-rating>
            </div>
            <div>
              <textarea
                type="text"
                placeholder="관람평은 최대 150자까지 작성 가능합니다."
                maxlength="150"
              />
            </div>
            <div class="secondBtnArea">
              <b-button class="ticketBtn" @click="[reviewModel(2)]"
                >등록</b-button
              >
              <b-button class="ticketBtn" @click="reviewModel(4)"
                >취소</b-button
              >
            </div>
          </div>
        </template>
        <template #modal_2>
          <div class="lastModal">
            <div>
              <h5>
                <b>등록되었습니다!</b>
              </h5>
            </div>
            <b-button class="ticketBtn" @click="[reviewModel(3)]"
              >확인</b-button
            >
          </div>
        </template>
      </Modal>
    </div>
  </div>
</template>

<script>
import Modal from "../components/ModalComponent.vue";
import StarRating from "vue-star-rating";

export default {
  components: {
    Modal,
    StarRating,
  },
  data: function () {
    return {
      //기본값은 기예매날짜
      picker: this.item.choseDate,
      //기본값은 기예매매수
      counter: this.item.ticketCount,
      //모달들의 상태값
      openModal_0: false,
      openModal_1: false,
      openModal_2: false,
      cancelModal_1: false,
      cancelModal_2: false,
      reviewModel_1: false,
      reviewModel_2: false,
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
    //예매 취소하는 함수
    ticketCancelHandler(reservationNum) {
      //로컬 스토리지에 저장된 예매 리스트 가져와서 새 배열에 저장
      let tempArray = JSON.parse(localStorage.getItem("reservation"));

      //예약 번호로 로컬 스토리지에 저장된 내역 가져오고 tempArray에서 해당 내역 임시 삭제
      const targetTicket = tempArray.filter((item) =>
        item.reservationNum.includes(reservationNum)
      );
      tempArray = tempArray.filter(
        (item) => item.reservationNum != reservationNum
      );

      //티켓의 취소 여부 변경
      targetTicket[0].status.isCanceled = 1;

      //변경된 티켓 내역 tempArray에 반영
      tempArray.push(...targetTicket);

      //로컬 스토리지에 저장되어 있던 원 데이터 삭제하고 변경된 tempArray 다시 로컬 스토리지에 저장
      localStorage.removeItem("reservation");
      localStorage.setItem("reservation", JSON.stringify(tempArray));

      //DB 연결 후 취소일자 추가
    },
    //예매 변경하는 함수
    ticketEditHandler(reservationNum) {
      //로컬 스토리지에 저장된 예매 리스트 가져와서 새 배열에 저장
      let tempArray = JSON.parse(localStorage.getItem("reservation"));

      //예약 번호로 로컬 스토리지에 저장된 내역 가져옴
      const targetTicket = tempArray.filter((item) =>
        item.reservationNum.includes(reservationNum)
      );

      //변경 사항 반영
      targetTicket[0].choseDate = this.picker;
      targetTicket[0].ticketCount = this.counter;

      //tempArray에 변경 사항 반영
      let temptemp = tempArray.map((item) =>
        item.reservationNum === reservationNum ? { ...targetTicket[0] } : item
      );

      //로컬 스토리지에 저장되어 있던 원 데이터 삭제하고 변경된 tempArray 다시 로컬 스토리지에 저장
      localStorage.removeItem("reservation");
      localStorage.setItem("reservation", JSON.stringify(temptemp));
    },
    //페이지 새로고침
    onRefresh() {
      this.$router.go();
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
    //모달의 상태값을 바꾸는 메서드- 취소 버튼을 클릭했을 경우
    closeModal(num) {
      switch (num) {
        //취소 버튼 클릭시 두번째 모달 open
        case 1:
          this.cancelModal_1 = true;
          break;
        //두번째 모달에서 확인 클릭시 세번째 모달 open
        case 2:
          this.cancelModal_1 = false;
          this.cancelModal_2 = true;
          break;
        //세번째 모달에서 확인 클릭시 세번째 모달 close
        case 3:
          this.cancelModal_2 = false;
          break;
        //두번째 모달에서 취소버튼 클릭시
        case 4:
          this.cancelModal_1 = false;
          break;
      }
    },
    reviewModel(num) {
      switch (num) {
        //취소 버튼 클릭시 두번째 모달 open
        case 1:
          this.reviewModel_1 = true;
          break;
        //두번째 모달에서 확인 클릭시 세번째 모달 open
        case 2:
          this.reviewModel_1 = false;
          this.reviewModel_2 = true;
          break;
        //세번째 모달에서 확인 클릭시 세번째 모달 close
        case 3:
          this.reviewModel_2 = false;
          break;
        //두번째 모달에서 취소버튼 클릭시
        case 4:
          this.reviewModel_1 = false;
          break;
      }
    },
  },
};
</script>

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
.lastModal {
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
.lastModal div {
  padding-top: 3em;
}
.calenderModal {
  box-sizing: border-box;

  position: relative;

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
.secondModal h5 {
  padding-top: 5em;
}
.secondModal div span {
  font-size: 18px;
}

b {
  font-size: 18px;
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
.firstBtnArea {
  padding-bottom: 1em;
}
.secondModal textarea {
  width: 80%;
  height: 150px;
  border: 2px solid gray;
  resize: none;
}
.secondModal h3 {
  margin-top: 1em;
  margin-bottom: 0;
}
.review-desc {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
</style>
