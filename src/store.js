import { reactive } from 'vue';

export const store = reactive({
    apiURL: "https://api.themoviedb.org/3/search/movie?api_key=df8d362d5d66a8a994ab6f765a7fad68&query=",
    FilmList: [],
    searchText: ""
})