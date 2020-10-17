<template>
  <div v-lazyload class="image__wrapper">
    <Spinner class="image__spinner" />
    <img class="image__item" :data-url="source" :data-default-image-url="defaultImageSource" :alt="alt" />
  </div>
</template>

<script>
import Spinner from "./Spinner";

export default {
    name: "ImageItem",
    components: {
        Spinner
    },
    props: {
        source: {
            type: String,
            required: true
        },
        alt: {
            type: String
        },
        defaultImageSource: {
            type: String,
            default: require("@/assets/images/image-not-found.png")
        },
    },
};
</script>

<style scoped>
.image__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    min-height: 100px;
}
.image__wrapper.loaded .image__item {
    visibility: visible;
    opacity: 1;
    border: 0;
}
.image__wrapper.loaded .image__spinner {
    display: none;
    width: 100%;
}
.image__item {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    opacity: 0;
    visibility: hidden;
    object-fit: cover;
}
</style>
