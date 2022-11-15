<template>
  <div>
    <h1>random</h1>
    <button @click="randomMovie">button</button>
    <div v-show="ranMovie" class="col">
      <div class="card h-100">
        <img :src="img_url" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ ranMovie?.title }}</h5>
          <p class="card-text">{{ ranMovie?.overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "RandomView",
  data() {
    return {
      ranMovie: null,
    };
  },
  methods: {
    randomMovie() {
      const getRandomMovie = this.$store.state.movies;
      this.ranMovie = _.sample(getRandomMovie);
      console.log(this.ranMovie);
    },
  },
  computed: {
    img_url() {
      return "https://image.tmdb.org/t/p/w185/" + this.ranMovie?.poster_path;
    },
  },
};
</script>

<style>
</style>