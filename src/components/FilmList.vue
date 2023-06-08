<script>
import { store } from '../store.js';

import SingleFilm from './SingleFilm.vue';
export default {
    name: 'FilmList',
    components: {
        SingleFilm
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section class="container">
        <SingleFilm v-for="film in store.FilmList" :details="film" />
    </section>
</template>

<style scoped lang="scss">
section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #38bdd4;
    justify-content: center;
}
</style>


