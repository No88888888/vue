import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// 이렇게도 쓸 수 있다
// new Vue({
//   el : '#app',
//   render: h => h(App),
// })