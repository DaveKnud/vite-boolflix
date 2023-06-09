<script>
import { store } from './store.js';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import FilmList from './components/FilmList.vue';
import SerieList from './components/SerieList.vue';
import AppSearch from './components/AppSearch.vue';
export default {
  components: {
    AppHeader,
    FilmList,
    AppSearch,
    SerieList
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getFilms() {
      let movies = store.apiURL;
      if (store.searchText !== "") {
        movies += `${store.searchText}`
      }
      axios.get(movies)
        .then(res => {
          store.FilmList = res.data.results;
          console.log(movies);
        })
        .catch(err => {
          console.log(err);
        })
    },

    getSerie() {
      let serie = store.apiSerieUrl;
      if (store.searchText !== "") {
        serie += `${store.searchText}`
      }

      axios.get(serie)
        .then(res => {
          store.SerieList = res.data.results;
          console.log(serie);
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  created() {
    this.getFilms()
  },
  created() {
    this.getSerie()
  }
}



</script>

<template>
  <AppHeader message="Boolflix" />
  <main>
    <AppSearch @mysearch="getFilms" />
    <AppSearch @mysearch="getSerie" />
    <FilmList />
    <SerieList />
  </main>
</template>

<style lang ="scss">
@use './styles/general.scss' as *;
</style>
