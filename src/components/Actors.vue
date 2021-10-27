<template>
  <div class="mx-3">
    <h2 class="mt-2 grey--text">Популярные актеры</h2>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="3" :key="actor.id" v-for="actor in this.actors">
          <ActorCard :actor="actor" />
        </v-col>
        <v-col cols="12" class="d-flex justify-center mt-5">
          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="error"
            v-on:click.prevent="previous()"
          >
            <v-icon dark> fas fa-step-backward </v-icon>
          </v-btn>
          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="error"
            v-on:click.prevent="next()"
          >
            <v-icon dark> fas fa-step-forward </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
let currentPage = 1;
import http from "@/plugins/http";
import ActorCard from "../components/ActorCard.vue";
export default {
  data() {
    return {
      actors: [],
    };
  },
  components: {
    ActorCard,
  },
  mounted() {
    this.fetchActors(currentPage);     
  },
  methods: {
    async fetchActors(page) {
      try {
        const response = await http.get("person/popular?page=" + page, {
          params: {
            api_key: "af492b73c1126de8c879a4e329dbb3f3",
            language: "ru",
          },
        });
        this.actors = response.data.results;
        // this.actors.push(...response.data.results);
      } catch (error) {
        console.log(error);
      }
    },
    
    next() {
      currentPage += 1;
      this.fetchActors(currentPage);
    },
    previous() {
      currentPage -= 1;
      this.fetchActors(currentPage);
    },
  },
};
</script>

<style></style>