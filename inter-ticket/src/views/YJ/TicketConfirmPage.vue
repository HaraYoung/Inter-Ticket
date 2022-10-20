<template>
  <div id="confirm">
    <b-container id="wrapper">
      <h2 class="mb-5">예매 내역 확인</h2>
      <b-container id="content-box" class="p-5">
        <h3>오픈스튜디오 아트페스타 그림의 탄생전</h3>
        <div class="grid-box">
          <div class="left">
            <img
              src="https://www.sac.or.kr/upfile/uploadfile/asa/goods/goods/2022/09/6cf446a2c87f7c632ba2ff4250f9351b.jpg"
              alt=""
            />
            <b-button>상세보기</b-button>
          </div>
          <div class="right">
            <span>예매자</span>
            <span>송강</span>
            <span>예매번호</span>
            <span>T1234567890</span>
            <span>이용일</span>
            <span>2022.12.31</span>
            <span>장소</span>
            <span>예술의 전당</span>
            <span>티켓수령방법</span>
            <div>
              <p class="bold">예약 번호 입장</p>
              <p>
                - 공연 당일 현장 교부처에서 예약번호 및 본인 확인 후 티켓을
                수령하실 수 있습니다.
              </p>
              <p>
                - 상단 예매확인/취소 메뉴에서 예매내역을 프린트하여 가시면
                편리합니다.
              </p>
              <p class="bold">티켓 배송</p>
              <p>
                - 예매완료(결제익일) 기준 4~5일 이내에 배송됩니다. (주말,
                공휴일을 제외한 영업일 기준)
              </p>
              <p>
                - 배송 중 전달 불가사항이 발생할 시에는 반송되며, 본인 수령 불가
                시 경우에 따라 대리 수령도 가능합니다.
              </p>
              <p>
                - 공연 3일 전까지 티켓을 배송받지 못하신 경우
                고객센터(1544-1555)로 연락 주시기 바랍니다.
              </p>
              <p>
                - 반송이 확인되지 않은 티켓은 현장에서도 수령하실 수 없으며,
                공연 관람 및 환불이 불가합니다.
              </p>
              <p>
                - 티켓 배송 (배송상태 : 배송 준비중 이후) 후에는 주소 변경이
                불가합니다.
              </p>
              <p>
                - 부득이하게 주소 변경이 필요하신 경우 각 배송사에 수취 거절
                요청 후, 고객센터(1544-1555)로 재배송 신청할 수 있습니다.
                (배송비 3,000원 추가 부과)
              </p>
            </div>
          </div>
        </div>
      </b-container>
    </b-container>
  </div>
</template>

<style scoped>
#confirm {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
}

#wrapper {
  margin: 80px 0;
  max-width: 1130px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

#content-box {
  background-color: white;
  width: 95%;
}

.grid-box {
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
  grid-gap: 30px;

  margin-top: 30px;
}

.left {
  display: flex;
  flex-direction: column;
}

.right {
  display: grid;
  grid-template-columns: 0.2fr 0.8fr;
  /* grid-template-rows: repeat(4, 0.15fr) 1fr; */
}

h2,
h3 {
  font-weight: bold;
}

p {
  margin: 0;
}

span {
  margin-bottom: 10px;
}

img {
  margin-bottom: 10px;
}

.bold {
  font-weight: bold;
}
</style>

<script>
export default {};
</script>
