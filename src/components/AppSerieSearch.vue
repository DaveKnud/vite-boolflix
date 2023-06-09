<script>
import { store } from './../store.js';
export default {
    name: "AppSerieSearch",
    data() {
        return {
            store
        }
    }
}

</script>


<template>
    <div class="nav-series">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search Tv Series" aria-label="Search"
                        v-model="store.searchText">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit"
                        @click.prevent="$emit('seriesearch')">Search Tv Series</button>
                </form>
            </div>
        </nav>
    </div>
</template>


<style scoped lang="scss">
nav {
    text-align: center;
    margin: 10px
}
</style>

