<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <my-header></my-header> -->
    <!-- 3. 보여주기 -->
    <MyComponent/>
    <!-- A. 요소 속성 이용하여 자식에게 pass props 방식으로 데이터 전달 -->
    <HelloWorld msg="Welcome to Your Vue.js App!!!"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// 1. 불러오기
// import MyComponent  from './components/MyComponent.vue'
import MyComponent from '@/components/MyComponent'

// 전역으로 설정할 수도 있다
// Vue.component('컴포넌트 명', (컴포넌트 내용))
// Vue.component('my-header', {
//   template: '<h2>My header</h2>'
// })

// new Vue ({
//   el: '#app'
// })

export default {
  name: 'App',
  components: {
    HelloWorld,
    // 2. 등록하기
    MyComponent,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
