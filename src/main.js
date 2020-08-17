import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './styles/app.css'
import { VueHammer } from 'vue2-hammer'
import VueThreeSixty from './components/I360Viewer.vue'

Vue.use(VueHammer)
Vue.component('vue-three-sixty', VueThreeSixty)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
