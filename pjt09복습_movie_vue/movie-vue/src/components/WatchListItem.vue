<template>
  <div>
    <div
      class="wishMovie"
      :class="{'watched':wish.isWatched}"
      @click="watched"
    >
      <p>{{wish.wishes}}</p>
    </div>
      <button 
        type="submit"
        @click="deleteWatched"
      >DELETE</button>
      
  </div>
</template>

<script>
export default {
  name : 'WatchListItem',
  props : {
    wish : Object,
  },
  methods: {
    watched() {
      this.$store.dispatch('toggleWatched', this.wish)
    },
    deleteWatched() {
      this.$store.dispatch('deleteWatched', this.wish)
    }
  }
}
</script>

<style>
  .wishMovie{
    padding: 20px;
  }
  .watched {
    text-decoration: line-through;
    background-color: #a8e6cf;
  }
</style>