<template>
  <div>
    <h1>watchList</h1>
    <WatchForm/>
    <WatchListItem v-for="(wish, index) in wishes" :key="index" :wish="wish"/>
  </div>
</template>

<script>
import WatchListItem from '@/components/WatchListItem'
import WatchForm from '@/components/WatchForm'

export default {
  name : 'WatchListView',
  components : {
    WatchListItem,
    WatchForm,
  },
  computed: {
    wishes() {
      return this.$store.state.wishList
    }
  }
}
</script>

<style>

</style>