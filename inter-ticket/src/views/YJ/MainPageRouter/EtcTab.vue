<template>
  <div class="grid">
    <CategoryBox v-for="item in list" :key="item.seq._text" :item="item" />
  </div>
</template>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
</style>
<script>
// import { fetchRealmList } from "../../../API/index";
// let convert = require("xml-js");

import CategoryBox from "../CategotyBox.vue";
export default {
  components: {
    CategoryBox,
  },
  data() {
    return {
      list: [],
    };
  },
  // created() {
  //   fetchRealmList("L000").then((res) => {
  //     let xml = res.data;
  //     let json = convert.xml2json(xml, { compact: true });
  //     this.list = JSON.parse(json).response.msgBody.perforList;
  //   });
  // },
};
</script>
