<template>
  <div>
    <form @submit.prevent="wishList">
      <input 
        type="text"
        v-model="wishes"
        placeholder="영화 제목을 입력해 주세요"
      >
      <input 
        type="submit"
        value="Add"
      >
    </form>
  </div>
</template>

<script>
export default {
  name : 'WatchForm',
  data() {
    return {
      wishes : null,
    }
  },
  methods: {
    wishList() {
      if(this.wishes.trim()) {
        this.$store.dispatch('saveWishList', this.wishes)
        this.wishes = null
      }
      this.wishes = null
    }
    
  }
}
</script>

<style>

</style>