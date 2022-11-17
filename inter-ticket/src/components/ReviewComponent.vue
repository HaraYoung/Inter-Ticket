<!-- 파일 이름: ReviewBox.vue -->
<!-- 파일 설명: 상세 페이지의 리뷰 컴포넌트 -->
<!-- 작성자: 박세영, 황유진, 이메일: sypark@feelanet.com, yjhwang@feelanet.com -->
<template>
  <div>
    <div v-for="v in this.reviewList" :key="v.id">
      <div class="review-box" v-if="v.delete_state">
        <div class="review-desc mb-4">
          <!-- 별점 내역 -->
          <!--Vue-star-rating 라이브러리-->
          <star-rating
            :show-rating="false"
            :read-only="true"
            :rating="v.rating"
            :star-size="20"
            v-if="v.edit_state == EditState"
          ></star-rating>
          <star-rating
            :star-size="30"
            :show-rating="false"
            :rating="v.rating"
            v-else
          ></star-rating>
          <!-- 변경된 별점-->

          <!-- 별점 내역 -->
          <!-- 리뷰 작성 날짜 -->
          <div>
            <span style="padding-right: 1.5em">
              <b>[신진미술인 전시지원 프로그램] 박웅규 개인전《귀불(鬼佛)》</b>
            </span>
            <span>{{ v.reviewDate }}</span>
          </div>
          <!-- 리뷰 작성 날짜 -->
          <!-- 리뷰 내용 -->
        </div>
        <div class="review-comment">
          <div class="comment" :class="v.edit_state ? '' : 'inputWidth'">
            <span v-if="v.edit_state == EditState">{{ v.comment }}</span>
            <span v-else>
              <input
                type="text"
                class="editInput"
                maxlength="150"
                id="rv_text"
                v-model="v.comment"
                value="EditText"
              />
            </span>
          </div>
          <div class="commentBtn">
            <span v-if="v.edit_state == EditState">
              <b-button class="ticketBtn m-2" @click="clickEdit(v.id)"
                >수정</b-button
              >
              <b-button class="ticketBtn" @click="clickDelete(v.id)"
                >삭제</b-button
              >
            </span>
            <span v-else class="btnRight">
              <b-button class="ticketBtn m-2" @click="clickEdit_2(v.id)"
                >수정</b-button
              >
            </span>
          </div>
        </div>
        <!-- 리뷰 내용 -->
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating,
  },
  data() {
    return {
      reviewList: [
        {
          id: 0,
          reviewDate: "2022-10-19",
          comment:
            "볼 만합니다.볼 만합니다.볼 만합니다.볼 만합니다.볼 만합니다.볼 만합니다.볼 만합니다.볼 만합니다.볼 만합니다.볼 만합니다.볼 만합니다.볼 만합니다.볼 만합니다.볼 만합니다.",
          rating: 3,
          edit_state: true,
          delete_state: true,
        },
        {
          id: 1,
          reviewDate: "2022-09-04",
          comment: "여자친구랑 좋은 시간 보냈습니다!",
          rating: 5,
          edit_state: true,
          delete_state: true,
        },
        {
          id: 2,
          reviewDate: "2022-06-27",
          comment: "볼 만합니다1.",
          rating: 3,
          edit_state: true,
          delete_state: true,
        },
        {
          id: 3,
          reviewDate: "2022-05-19",
          comment: "볼 만합니다.2",
          rating: 1,
          edit_state: true,
          delete_state: true,
        },
        {
          id: 4,
          reviewDate: "2022-05-19",
          comment: "볼 만합니다.3",
          rating: 5,
          edit_state: true,
          delete_state: true,
        },
      ],
      EditText: "",
      EditState: true,
      DeleteItem: true,
    };
  },
  methods: {
    clickEdit(id) {
      this.reviewList[id].edit_state = false;
    },
    clickEdit_2(id) {
      this.reviewList[id].edit_state = true;
      this.reviewList[id].comment += this.EditText;
      console.log(this.reviewList[id].comment);
    },
    clickDelete(id) {
      this.reviewList[id].delete_state = false;
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
  padding: 3em 0;
}
.btn {
  background-color: #25c4c2;
}
.editInput {
  width: 100%;
  height: 150px;
  border: 2px solid gray;
  resize: none;
}
.inputWidth {
  width: 90%;
}
</style>
