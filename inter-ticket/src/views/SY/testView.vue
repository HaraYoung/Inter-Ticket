<template>
  <div>
    <div v-for="(v, i) in item" :key="i">
      <div v-if="v.dp_art_part === '회화'">
        <div>{{ v.dp_name }}</div>
        <img :src="v.dp_main_img" width="100px"/>
        <div>{{ v.dp_artist }}</div>
        <div>{{ v.dp_viewtime }}</div>
        <div>{{ v.dp_start }} ~ {{ v.dp_end }}</div>
        <div>{{ v.dp_viewpoint }}</div>
        <div>{{ v.dp_sponsor }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import dataJson from "@/assets/realData.json";
export default {
  data() {
    return {
      item: dataJson.DATA,
    };
  },
};
// import Vue from 'vue'

// export default Vue.extend({
//     data(){
//         itemData: dataJson.DATA
//     }
// })
//test

</script>
