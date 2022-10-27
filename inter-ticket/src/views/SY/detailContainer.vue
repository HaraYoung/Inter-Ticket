<template>
  <div class="detailArea" v-if="content">
    <div class="detailContainer">
      <div class="InfoArea">
        <!--상단의 간단 전시 정보 영역-->
        <div class="infoContent">
          <div class="infoTitle">
            <h2>{{ content.DP_NAME }}</h2>
          </div>
          <div class="infoImg">
            <img :src="content.DP_MAIN_IMG" alt="poster" />
          </div>
          <div class="infos">
            <div class="infoText">
              <div>
                <span class="borderText">
                  <b>기간</b>
                </span>
                <span>
                  {{ content.DP_START }} ~
                  {{ content.DP_END }}
                </span>
              </div>
              <div v-if="content.DP_VIEWTIME">
                <span class="borderText">
                  <b>시간</b>
                </span>
                <span>{{ content.DP_VIEWTIME }}</span>
              </div>
              <div>
                <span class="borderText">
                  <b>장소</b>
                </span>
                <span>{{ content.DP_PLACE }}</span>
              </div>
              <div v-if="content.DP_SUBNAME">
                <span class="borderText">
                  <b>부재</b>
                </span>
                <span>{{ content.DP_SUBNAME }}</span>
              </div>
              <div v-if="content.DP_ARTIST">
                <span class="borderText">
                  <b>작가</b>
                </span>
                <span>{{ content.DP_ARTIST }}</span>
              </div>
              <div v-if="content.DP_SPONSOR">
                <span class="borderText">
                  <b>주최</b>
                </span>
                <span>{{ content.DP_SPONSOR }}</span>
              </div>
              <div v-if="content.DP_ART_PART">
                <span class="borderText">
                  <b>부문</b>
                </span>
                <span>{{ content.DP_ART_PART }}</span>
              </div>
              <div>
                <span class="borderText">
                  <b>가격</b>
                </span>
                <span>무료</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--텝매뉴-->
      <div class="tap">
        <TabMenu :tabMenu="tabMenu" />
      </div>
      <!--클릭한 탭 메뉴에 따라 달라지는 내용 영역-->
      <div class="tapContent">
        <router-view :content="content" />
      </div>
    </div>
    <!--우측 티켓 박스 영역-->
    <div class="ticket" v-if="isDate()">
      <DetailTicket :content="content" />
    </div>
  </div>
</template>
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
.infos div {
  font-size: 1em;
}
.infos div b {
  margin-right: 0.5em;
  color: black;
  background-color: gray;
  padding: 0.5em;
}
.infoImg {
  width: 90%;
}
.infoText {
  padding-top: 0.2em;
}
.infoText div {
  width: 50%;
  float: left;
}
.infoImg img {
  width: 100%;
}
.infoText > div {
  padding: 1em 0;
}
.infoText > div > span {
  font-size: 14px;
}
.tap {
  padding: 2em 2em;
  background-color: #dce4ed;
}
.tapContent {
  padding-bottom: 3em;
  background-color: #dce4ed;
}
</style>

<script>
import DetailTicket from "./detailTicket.vue";
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
      content: {},
      today: new Date(),
    };
  },
  methods: {
    isDate() {
      if (
        this.today > new Date(this.content.DP_START) &&
        this.today < new Date(this.content.DP_END)
      ) {
        return true;
      } else return false;
    },
  },
  created() {
    //params 값 받아서 상세 데이터 조회
    fetchDetailList(this.$route.params.id).then((res) => {
      this.content = res.data.ListExhibitionOfSeoulMOAInfo.row[0];
    });
  },
};
</script>
