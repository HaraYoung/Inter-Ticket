<!-- 파일 이름: TicketInformation.vue -->
<!-- 파일 설명: 상세 페이지의 예매 안내 -->
<!-- 작성자: 박세영, 이메일: sypark@feelanet.com -->

<template>
  <!--예매 안내-->
  <div class="information">
    <h4>예매 및 변경 안내</h4>
    <p>
      본 공연은 8세 이상부터 관람이 가능하며, 8세 미만 아동은 보호자를
      동반하여도 공연장에 입장할 수 없습니다. (단, 어린이 대상 공연은 제외)
    </p>
    <p>
      온라인(PC,모바일) 예매의 경우 1회 10매까지 구매 가능합니다. 반복하여
      예매하기 불편하거나 단체 티켓예매를 원하시면 서비스플라자 (02-580-1300)를
      이용해 주시기 바랍니다.
    </p>
    <p>
      티켓은 유가증권이므로 분실하였을 경우 재발행 되지 않으며 변경이 불가하오니
      보관에 유의해주시기 바랍니다.
    </p>
    <p>
      지정예매처를 통하지 않고 개인적으로 양도 양수한 티켓에 대해 인터티켓은
      책임을 지지 않습니다.
    </p>
  </div>
</template>

<style scoped>
.information {
  max-width: 620px;
  margin: auto;
}
.information h4 {
  font-weight: bold;
  margin-bottom: 2em;
}
.information p {
  margin: 1em 0;
  padding: 1em 0;
}
</style>