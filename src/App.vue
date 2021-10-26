<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main app>
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>


<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: {
    NavBar,
    Footer
  },

data: () => ({

}),


};
</script>


<style lang="scss" scoped>
</style>
