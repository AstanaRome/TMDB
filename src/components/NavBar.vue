<template>
  <nav>
    <v-app-bar app color="dark" dark>
      <v-icon class="mr-2">fas fa-video</v-icon>
      <v-toolbar-title>The Movie DataBase</v-toolbar-title>
      <v-btn text class="ml-2" to="/">Фильмы</v-btn>
      <v-btn text class="ml-2" to="/actors">Актеры</v-btn>
      <v-btn text class="ml-2">Профиль</v-btn>
      <v-btn text class="ml-2">Поддержка</v-btn>
      <v-spacer></v-spacer>
      <v-autocomplete
        clearable
        hide-no-data
        hide-selected
        color="white"
        label="search"
        prepend-inner-icon="search"
        flat
        :items="movies"
        item-text="title"
        item-value="id"
        id="search"
      >
        <template v-slot:item="{ item }">
          <v-btn text :to="`/movie/${item.id}`">{{ item.title }}</v-btn>
        </template></v-autocomplete
      >
      <v-btn icon>
        <v-badge color="green" content="2" overlap>
          <v-icon>far fa-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-badge bordered bottom color="green" dot offset-x="10" offset-y="10">
        <v-avatar size="40">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-avatar>
      </v-badge>
    </v-app-bar>
  </nav>
</template>

<script>
import http from "@/plugins/http";
export default {
  data: () => ({
    drawer: null,
    model: '',
    search:"ff",
    movies: [],
  }),
  mounted() {
    this.loadMovies();
  },
  methods: {
    loadMovies: async function () {
      try {
        const response = await http.get(`search/movie`, {
          params: {
            query: this.search,
            api_key: "af492b73c1126de8c879a4e329dbb3f3",
            include_adult: false,
            language: "ru",
          },
        })
        this.movies = response.data.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>