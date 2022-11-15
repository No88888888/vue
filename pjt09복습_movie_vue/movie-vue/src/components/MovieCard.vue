<template>
  <div class="col">
    <div class="card h-100">
      <img :src="img_url" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <p class="card-text">{{ movie.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie: Object,
  },
  computed: {
    img_url() {
      return "https://image.tmdb.org/t/p/w185/" + this.movie.poster_path;
    },
  },
};
</script>

<style>
</style>