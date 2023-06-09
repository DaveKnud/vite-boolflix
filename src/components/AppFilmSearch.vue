<script>
import { store } from './../store.js';
export default {
    props: {
    },
    name: "AppFilmSearch",
    data() {
        return {
            store
        }
    }
}

</script>


<template>
    <div class="nav-movies">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search Movie" aria-label="Search"
                        v-model="store.searchText">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit"
                        @click.prevent="$emit('mysearch')">Search Movie</button>
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

