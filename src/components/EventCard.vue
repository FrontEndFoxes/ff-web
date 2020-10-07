<template>
  <div class="ffevent__card">
      <div class="ffevent__wrap rounded flex items-center justify-center" 
          :style="bgEventImage"></div>
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
export default {
	props: ["eventToShow"],
	name: "EventCard",
	computed: {
		bgEventImage() {
			let stylesImg = "";
			if (this.eventToShow !== null && this.eventToShow !== undefined) {
				let { image } = this.eventToShow;

				if (image !== null && image !== undefined) {
					stylesImg = {
						"background-image": "url(" + image + ")",
						"background-position": "center",
						"background-repeat": "no-repeat",
						"background-size": "cover",
						height: "13rem",
					};
				} else {
					image = "";
				}
			}
			return stylesImg;
		},
	},
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
	.ffevent__card{
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
</style>
