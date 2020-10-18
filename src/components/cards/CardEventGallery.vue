<template>
  <div class="ffevent__card">
        <ImageItem
            class="ffevent__image"
            :source="eventToShow.image"
        />
		<div class="ffgallery__body">
			<div class="text-1xl text-center text-gray-600">
				{{ eventToShow.city }}, {{ eventToShow.country }}
			</div>
			<p class="font-bold text-1xl text-center text-gray-600">
				{{ eventToShow.month }} {{ eventToShow.day }}
			</p>
		</div>
  </div>
</template>
<script>
import ImageItem from "@/components/ImageItem.vue";
export default {
	name: "CardEventGallery",
    props: ["eventToShow"],
    components: { ImageItem },
};
</script>
<style scoped>
.ffgallery__body {
  @apply my-2;
}

.ffevent__card {
  @apply bg-white shadow-lg rounded-lg my-1;
}

.ffevent__wrap {
  @apply rounded;
}

/* Small (sm) */
@media (min-width: 640px) {
  .ffevent__card {
    height: 17rem;
  }
  .ffevent__wrap {
    @apply h-64;
  }
}

/* Medium (md) */
@media (min-width: 768px) {
  .ffevent__card {
    width: 30%;
    @apply mx-2;
  }
}

.ffevent__image {
    height: 13rem;
}
</style>
