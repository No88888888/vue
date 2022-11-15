<template>
  <div>
    <h1>movie</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <MovieCard v-for="movie in movies" :key="movie.Id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MovieCard from "@/components/MovieCard";

export default {
  name: "MovieView",
  components: {
    MovieCard,
  },
  data() {
    return {
      movies: null,
    };
  },
  methods: {
    getMovie() {
      axios({
        method: "get",
        url: "https://api.themoviedb.org/3/movie/top_rated",
        params: {
          api_key: "983a534de25475e797c8b4ef5617774b",
          language: "ko-kr",
        },
      })
        .then((response) => {
          this.movies = response.data.results;
          console.log(this.movies);
          return this.movies
        })
        .then((movie_data) =>{
          this.$store.commit('SAVE_MOVIES', movie_data)
          
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getMovie();
  },
};
</script>

<style>
</style>