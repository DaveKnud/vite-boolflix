<script>
export default {
    name: 'SingleSerie',
    props: {
        details: Object
    }
}

</script>

<template>
    <div class="SingleSerie">
        <!-- <img :src="details.card_images[0].image_url_small" alt="info.image"> -->
        <h4> {{ details.name }}</h4>

    </div>
</template >

<style scoped lang ="scss">
.SingleSerie {
    width: 300px;
    height: 300px;
    border: 5px solid white;
    text-align: center;
}

h4 {
    color: rgb(91, 152, 0);
}

.img-container {
    display: flex;
    justify-self: center;
    width: 20px;
    height: 10px;
}

img {
    max-width: 100%;
    max-height: 100%;
}
</style>
