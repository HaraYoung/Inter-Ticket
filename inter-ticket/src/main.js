import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import SweetModal from 'sweet-modal-vue/src/plugin.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { setupCalendar} from 'v-calendar'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Modal Library
Vue.use(SweetModal)

//AXIOS
Vue.config.productionTip = false
Vue.prototype.$http = axios

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

setupCalendar({
  componentPrefix: 'vc',
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


