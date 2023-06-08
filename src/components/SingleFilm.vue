<script>
export default {
    name: 'SingleFilm',
    props: {
        details: Object
    }
}
</script>

<template>
    <div class="SingleFilm">
        <!-- <img :src="details.card_images[0].image_url_small" alt="info.image"> -->
        <h4> {{ details.title }}</h4>
        <br>
        <div>Original Title: <h4>{{ details.original_title }}</h4>
        </div>
        <br>
        <h4>{{ details.original_language }}</h4>
        <br>
        <h5>{{ details.vote_average }}</h5>

        <h3></h3>


    </div>
</template>

<style scoped lang="scss">
.SingleFilm {
    width: 300px;
    height: 300px;
    border: 5px solid white;
    text-align: center;
}

h4 {
    color: rgb(0, 0, 0);
}
</style>