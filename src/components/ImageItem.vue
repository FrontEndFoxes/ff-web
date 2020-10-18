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
    directives: {
        lazyload: {
                mounted: el => {
                    function loadImage() {
                        const imageElement = Array.from(el.children).find(
                            el => el.nodeName === "IMG"
                        );

                        if (imageElement) {
                            imageElement.addEventListener("load", () => {
                                setTimeout(() => el.classList.add("loaded"), 100);
                            });
                            imageElement.addEventListener("error", () => {
                                imageElement.src = imageElement.dataset.defaultImageUrl;
                            });
                            imageElement.src = imageElement.dataset.url;
                        }
                    }

                    function handleIntersect(entries, observer) {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                loadImage();
                                observer.unobserve(el);
                            }
                        });
                    }

                    function createObserver() {
                        const options = {
                            root: null,
                            threshold: "0"
                        };
                        const observer = new IntersectionObserver(handleIntersect, options);
                        observer.observe(el);
                    }


                    if (window["IntersectionObserver"]) {
                        createObserver();
                    } else {
                        loadImage();
                    }
                }
        }
    }
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
