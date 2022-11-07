<!-- 파일 이름: detailContainer.vue -->
<!-- 파일 설명: 상세 페이지 -->
<!-- 작성자: 박세영, 이메일: sypark@feelanet.com -->

<template>
  <div class="detailArea" v-if="content">
    <div class="detailContainer">
      <div class="InfoArea">
        <!--상단의 간단 전시 정보 영역-->
        <div class="infoContent">
          <div class="infoTitle">
            <h2>{{ content.DP_NAME }}</h2>
          </div>
          <!--포스터 이미지-->
          <div class="infoImg">
            <img :src="content.DP_MAIN_IMG" alt="poster" />
          </div>
          <!--전시 간단 정보-->
          <div class="infos">
            <div class="infoText">
              <div>
                <span class="borderText">
                  <b>기간</b>
                </span>
                <div>
                  <span>
                    {{ content.DP_START }} ~
                    {{ content.DP_END }}
                  </span>
                </div>
              </div>
              <div v-if="content.DP_VIEWTIME">
                <span class="borderText">
                  <b>시간</b>
                </span>
                <div>
                  <div>
                    <span>{{ content.DP_VIEWTIME }}</span>
                  </div>
                </div>
              </div>
              <div>
                <span class="borderText">
                  <b>장소</b>
                </span>
                <div>
                  <span>{{ content.DP_PLACE }}</span>
                </div>
              </div>
              <div v-if="content.DP_SUBNAME">
                <span class="borderText">
                  <b>부제</b>
                </span>
                <div>
                  <span>{{ content.DP_SUBNAME }}</span>
                </div>
              </div>
              <div v-if="content.DP_ARTIST">
                <span class="borderText">
                  <b>작가</b>
                </span>
                <div>
                  <span>{{ filteredArtist }} 등</span>
                </div>
              </div>
              <div v-if="content.DP_SPONSOR">
                <span class="borderText">
                  <b>주최</b>
                </span>
                <div>
                  <span v-html="content.DP_SPONSOR"></span>
                </div>
              </div>
              <div v-if="content.DP_ART_PART">
                <span class="borderText">
                  <b>부문</b>
                </span>
                <div>
                  <span>{{ content.DP_ART_PART }}</span>
                </div>
              </div>
              <div>
                <span class="borderText">
                  <b>가격</b>
                </span>
                <div>
                  <span>무료</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--텝 메뉴-->
      <div class="tap">
        <TabMenu :tabMenu="tabMenu" />
      </div>
      <!--클릭한 탭 메뉴에 따라 달라지는 내용 영역-->
      <div class="tapContent">
        <router-view :content="content" />
      </div>
    </div>
    <!--우측 티켓 박스 영역-->
    <!--현재 전시가 끝났다면 보여주지 않을 영역-->
    <div class="ticket" v-if="isDate()">
      <DetailTicket :content="content" />
    </div>
  </div>
</template>

<script>
//우측 티켓 박스 영역
import DetailTicket from "./detailTicket.vue";
//텝 메뉴
import TabMenu from "../../components/TabMenu.vue";

import { fetchDetailList } from "@/API";

export default {
  name: "detailPage",
  components: {
    DetailTicket,
    TabMenu,
  },
  data: function () {
    return {
      //텝메뉴 router
      tabMenu: [
        {
          id: 0,
          name: "전시 소개",
          routeName: "info",
        },
        {
          id: 1,
          name: "전시 장소",
          routeName: "place",
        },
        {
          id: 2,
          name: "관람평",
          routeName: "review",
        },
        {
          id: 3,
          name: "예매 안내",
          routeName: "help",
        },
      ],
      //전시 상세 데이터를 받아와서 저장하는 객체
      content: {},
      //오늘 날짜 객체
      today: new Date(),
    };
  },
  methods: {
    //우측 티켓 영역을 랜더링할지 결정하는 함수
    isDate() {
      //현재 날짜와 전시가 끝나는 날짜를 비교- 전시 끝나는 날의 string을 date타입 객체로 변환해 비교
      if (
        //만약 현재 날짜가 전시 끝나는 날보다 크다면 true
        /*
         * 하지만 동작은 < 가 아닌 > 가 전시끝 날짜가 지난 것들만 true를 반환한다 */
        this.today < new Date(this.content.DP_END)
      )
        return true;
      else return false;
    },
  },
  computed: {
    filteredArtist() {
      let temp = this.content.DP_ARTIST.split(",").slice(0, 2).join(",");
      return temp;
    },
  },
  created() {
    //params 값 받아서 상세 데이터 조회
    fetchDetailList(this.$route.params.id).then((res) => {
      this.content = res.data.ListExhibitionOfSeoulMOAInfo.row[0];
    });
  },
  mounted() {
    //새로 마운트가 될때 스크롤이 최상단으로 올라감
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.detailArea {
  width: 80%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 3em;
  padding-bottom: 5em;
}
.detailArea .detailContainer {
  min-width: 700px;

  width: 50%;
  /* margin:0 5em; */
  margin-right: 3em;
}
.InfoArea {
  background-color: #dce4ed;
  min-width: 700px;
  width: 100%;
}
.ticket {
  width: 15%;
  min-width: 350px;
  /* margin-top: 2em; */
}
.infoContent {
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.infos {
  width: 90%;
  padding-top: 1em;
}
.infoContent .infoTitle {
  margin: 1.5em 0;
}
.infoContent h2 {
  font-weight: bolder;
  font-size: 1.4em;
}
.infos div b {
  margin-right: 0.5em;
  color: white;
  background-color: #565e64;
  padding: 0.5em;
  float: left;
}
.infoImg {
  width: 90%;
}
.infoText {
  padding-top: 0.2em;
}
.infoText > div {
  width: 50%;
  float: left;
  padding: 1em 0;
}
.infoImg img {
  width: 100%;
}
.infoText > div > span {
  font-size: 14px;
}
.infoText > div > div {
  width: 100%;
  height: 80%;
  padding: 0 1em;
  text-align: left;
}
.infoText > div > div > span {
  white-space: normal;
  word-wrap: break-word;
}
.tap {
  background-color: #dce4ed;
  padding: 0 2em;
  padding-top: 2em;
}
.tapContent {
  padding-bottom: 3em;
  padding-top: 1em;
  background-color: #dce4ed;
}
</style>
