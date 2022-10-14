import Vue from 'vue'
import App from './App.vue'
import router from './router'

import SweetModal from 'sweet-modal-vue/src/plugin.js'
import { setupCalendar} from 'v-calendar'

Vue.use(SweetModal)
Vue.config.productionTip = false

// main.js
setupCalendar({
  componentPrefix: 'vc',
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


