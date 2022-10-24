<template>
  <div class="headerArea">
    <div class="headerItem">
      <div class="logArea" @click="goTo('drama-tab')">
        <LogoComponent :fontSize="40" />
      </div>
      <div class="btnArea">
        <div class="searchArea">
          <input type="text" />
          <span @click="goTo('search-page')">검색</span>
        </div>
        <!-- <div>
          <b-input-group append="검색" @click="goTo('search-page')">
            <b-form-input></b-form-input>
          </b-input-group>
        </div> -->
        <v-btn color="primary" elevation="8" large plain>LogOut</v-btn>
        <v-btn
          color="primary"
          elevation="8"
          large
          plainn
          @click="goTo('my-page')"
          >My Page</v-btn
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.headerArea {
  background-color: white;
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;

  position: fixed;
  z-index: 999;
}

.headerItem {
  max-width: 1130px;
  width: 100%;

  display: flex;
  max-width: 1130px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.logArea {
  width: 50%;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  padding-left: 5em;
}
.btnArea {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 3em;
}
.btn {
  padding: 0.25em 0.5em;
  color: #fffbe9;
  margin: 0 1em;

  font-size: 12px;
}
/* .input-group .input-group-append .input-group-text {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  cursor: pointer;
} */
.searchArea {
  width: 50%;
  position: relative;
  margin-right: 1em;
}

.searchArea input {
  border: none;
  border-bottom: 1px solid black;
  width: 100%;
  padding: 1em;
}
.searchArea span {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 1em;
  background-color: #1fb5a9;
  color: #fffbe9;
  cursor: pointer;
  border-radius: 5px;
}
</style>

<script>
import LogoComponent from "@/components/LogoComponent.vue";

export default {
  components: {
    LogoComponent,
  },
  methods: {
    goTo(routeName) {
      this.$router
        .push({
          name: routeName,
        })
        .catch(() => {});
    },
  },
};
</script>
