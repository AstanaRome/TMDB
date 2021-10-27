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
      ></v-autocomplete>
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
export default {
  data: () => ({
    drawer: null,
  }),
};
</script>

<style>
</style>