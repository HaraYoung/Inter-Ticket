<!-- 파일 이름: ReviewBox.vue -->
<!-- 파일 설명: 상세 페이지의 리뷰 컴포넌트 -->
<!-- 작성자: 박세영, 황유진, 이메일: sypark@feelanet.com, yjhwang@feelanet.com -->
<template>
  <div>
    <div class="review-box">
      <div class="review-desc mb-4">
        <!-- 별점 내역 -->
        <!--Vue-star-rating 라이브러리-->
        <star-rating
          :show-rating="false"
          :read-only="true"
          :rating="review.rv_rating"
          :star-size="20"
          v-if="EditState == false"
        ></star-rating>
        <star-rating
          :star-size="30"
          :show-rating="false"
          :rating="review.rv_rating"
          v-else
          @rating-selected="setRating"
        ></star-rating>
        <!-- 변경된 별점-->

        <!-- 별점 내역 -->
        <!-- 리뷰 작성 날짜 -->
        <div>
          <span style="padding-right: 1.5em">
            <b>{{ review.dp_name }}</b>
          </span>
          <span>{{ filteredDate }}</span>
        </div>
        <!-- 리뷰 작성 날짜 -->
        <!-- 리뷰 내용 -->
      </div>
      <div class="review-comment">
        <div class="comment">
          <span v-if="EditState == false">{{ review.rv_comment }}</span>
          <input
            id="EditInput"
            v-else
            :v-model="EditText"
            class="editInputArea"
          />
        </div>
        <div class="commentBtn">
          <span v-if="EditState == false">
            <b-button class="ticketBtn" @click="clickEdit()">수정</b-button>
            <b-button
              class="ticketBtn"
              @click="clickDelete(review.rv_seq, review.bk_seq)"
              >삭제</b-button
            >
          </span>
          <span v-else class="LastEditBtn">
            <b-button class="ticketBtn" @click="clickEdit_2(review.rv_seq)"
              >수정</b-button
            >
            <b-button class="ticketBtn" @click="clickCencle()">취소</b-button>
          </span>
        </div>
      </div>
      <!-- 리뷰 내용 -->
    </div>
  </div>
</template>

<script>
import { fetchDeleteReview } from "@/API";
import StarRating from "vue-star-rating";

export default {
  props: ["review"],
  components: {
    StarRating,
  },
  data() {
    return {
      EditText: "",
      EditState: false,
      rating: 0,
    };
  },
  methods: {
    setRating: function (rating) {
      this.rating = rating;
    },
    clickEdit() {
      this.EditState = true;
    },
    clickEdit_2() {
      this.EditState = false;
      console.log(this.rating);
      console.log(this.EditText);
      // fetchUpdateReview(this.review.rv_seq).then((res) => res.data);
      // this.review.rv_comment += this.EditText;
    },
    clickCencle() {
      this.EditState = false;
    },
    clickDelete(id, ticketID) {
      fetchDeleteReview(id, ticketID).then((res) => {
        alert(res.data);
        this.$router.go();
      });
    },
  },
  computed: {
    filteredDate() {
      return this.review.rv_date.slice(0, 10);
    },
  },
};
</script>

<style scoped>
.review-box {
  background-color: white;

  padding: 1em 2em;

  margin: 1em 0;
}

.review-desc {
  display: flex;
  justify-content: space-between;
}
.review-comment {
  display: flex;
  justify-content: space-between;
}
.comment {
  width: 80%;
  padding: 0.5em 1em;
}
.commentBtn {
  padding: 2em 1em;
}
.btn {
  background-color: #25c4c2;
  margin-right: 0.6em;
}
.editInputArea {
  width: 100%;
  height: 5em;
  border: 2px solid gray;
  resize: none;
}
</style>
