<script>
import { store } from '../store.js';

import SingleSerie from './SingleSerie.vue';
export default {
    name: 'SerieList',
    components: {
        SingleSerie
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
        <SingleSerie v-for="serie in store.SerieList" :details="serie" />
    </section>
</template>

<style scoped lang="scss">
section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #4dd438;
    justify-content: center;
}
</style>


