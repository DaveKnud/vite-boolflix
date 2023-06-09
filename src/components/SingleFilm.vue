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
        <div class="cover-conatiner">
            <img :src="'http://image.tmdb.org/t/p/w342/' + details.poster_path" alt="">
        </div>
        <!-- <img :src="details.card_images[0].image_url_small" alt="info.image"> -->
        <h4> {{ details.title }}</h4>
        <br>
        <div>Original Title: <h4>{{ details.original_title }}</h4>
        </div>
        <br>
        <h5>{{ details.vote_average }}</h5>
        <!-- English language flag -->
        <div class="flag-container" v-if="details.original_language === `en`"><img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg" alt="">
        </div>
        <!-- Italian language flag -->
        <div class="flag-container" v-else-if="details.original_language === `it`"><img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/800px-Flag_of_Italy.svg.png"
                alt="">
        </div>
        <!-- German language flag -->
        <div class="flag-container" v-else-if="details.original_language === `de`"><img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAGFBMVEUAAAD7wgbgCB1rBA7nCB7fAB7zmg/8xQVN/1ogAAAAQklEQVRoge3MsRGAIAAEsBcU9t+YCSy/0EsGSAIAAL8zi3IXZRTJ5XK5XC6Xy7+dP0VZRdlFuYrkcrlcLpfL5fI3B4yeJ4n0mroXAAAAAElFTkSuQmCC"
                alt="">
        </div>
        <div v-else>{{ details.original_language }}</div>
    </div>
</template >

<style scoped lang ="scss">
.SingleFilm {
    width: 300px;
    min-height: 500px;
    border: 5px solid white;
    text-align: center;
}

h4 {
    color: rgb(0, 0, 0);
}

.cover-conatiner {
    display: flex;
    max-width: 100%;
    max-height: 400px;
    padding: 20px;
}

.flag-container {
    display: flex;
    width: 100%;
    height: 10px;
    justify-content: center;
}

img {
    max-width: 100%;
    max-height: 100%;
}
</style>
