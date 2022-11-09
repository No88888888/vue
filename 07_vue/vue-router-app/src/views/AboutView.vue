<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- 선언적 -->
    <router-link :to="{name:'home'}">홈으로</router-link>
    <!-- 프로그래밍적 -->
    <button @click="toHome">홈으로!</button>
    <input 
      type="text" 
      v-model="userName" 
      @keyup.enter="sendToHello"
      >
  </div>
</template>

<script>
  export default {
    name: 'AboutView',
    data() {
      return {
        userName : null,
      }
    },
    methods: {
      toHome() {
        this.$router.push({ name: 'home' })
      },
      sendToHello() {
        this.$router.push({ name: 'hello', params: {userName: this.userName} })
      }
    }
  }
</script>
