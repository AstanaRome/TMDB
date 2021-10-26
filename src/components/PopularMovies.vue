<template>
  <div class="mx-3">
    <h2 class="mt-2 grey--text">Популярные фильмы</h2>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="3" v-for="movie in movies" :key="movie.id">
          <MovieCard :movie="movie" :genres="genres" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard";
import http from "@/plugins/http";
export default {
  components: {
    MovieCard,
  },
  data: function () {
    return {
      movies: [],
      genres: [],
    };
  },
  async mounted() {
    this.fetchGenres();
    try {
      const response = await http.get("/movie/popular", {
          params: {           
            api_key: "af492b73c1126de8c879a4e329dbb3f3",            
            language: "ru",
          },
        });
      this.movies = response.data.results;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async fetchGenres() {
      try {
        const response = await http.get("/genre/movie/list", {
          params: {           
            api_key: "af492b73c1126de8c879a4e329dbb3f3",            
            language: "ru",
          },
        });
        this.genres = response.data.genres;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>