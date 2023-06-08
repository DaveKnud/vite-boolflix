<script>
import { store } from './store.js';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import FilmList from './components/FilmList.vue';
import AppSearch from './components/AppSearch.vue';
export default {
  components: {
    AppHeader,
    FilmList,
    AppSearch
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
      //Cambio stringa limgua in bandiera
      let languageFilm = store.apiLanguageFilm;
      if (languageFilm === "en") {
        languageFilm = `ok`
      }
    }
  },
  created() {
    this.getFilms()
  }
}
</script>

<template>
  <AppHeader message="Boolflix" />
  <main>
    <AppSearch @mysearch="getFilms" />
    <FilmList />
  </main>
</template>

<style lang ="scss">
@use './styles/general.scss' as *;
</style>
