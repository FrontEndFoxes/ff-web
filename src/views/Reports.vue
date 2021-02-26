<template>
  <div class="bg-white">
    <div class="pt-24 bg-blue-100 bg-gradient-to-b from-white pb-10">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Annual Reports
      </h1>
      <div
        class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t mb-8 lg:mb-16"
      ></div>
      <div class="ffreportsgroup">
        <div class="ffreport__card">
          <ImageItem
            class="ffreport__image"
            source="https://res.cloudinary.com/front-end-foxes/image/upload/v1614296641/reports/2018_feqpy9.png"
          />
          <div class="ffgallery__body text-center">
            <a
              class="font-bold text-1xl text-gray-600 underline"
              href="/reports/annual-report-2018-min.pdf"
              target="_blank"
              >2018</a
            >
          </div>
        </div>
        <div class="ffreport__card">
          <ImageItem
            class="ffreport__image"
            source="https://res.cloudinary.com/front-end-foxes/image/upload/v1614296639/reports/2019_ibv6av.png"
          />
          <div class="ffgallery__body text-center">
            <a
              class="font-bold text-1xl text-gray-600 underline"
              href="/reports/annual-report-2019-min.pdf"
              target="_blank"
              >2019</a
            >
          </div>
        </div>
        <div class="ffreport__card">
          <ImageItem
            class="ffreport__image"
            source="https://res.cloudinary.com/front-end-foxes/image/upload/v1614296639/reports/2020_efbzbp.png"
          />
          <div class="ffgallery__body text-center">
            <a
              class="font-bold text-1xl text-gray-600 underline"
              href="/reports/annual-report-2020-min.pdf"
              target="_blank"
              >2020</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ImageItem from "@/components/ImageItem.vue";

export default defineComponent({
  name: "Reports",
  components: { ImageItem },
});
</script>

<style scoped>
.ffgallery__body {
  @apply my-2;
}

.ffreport__card {
  @apply bg-white shadow-lg rounded-lg my-1;
}

.ffreportsgroup {
  @apply p-2 flex flex-col flex-wrap justify-around p-10;
}

/* Medium (md) */
@media (min-width: 768px) {
  .ffreportsgroup {
    @apply w-full mx-auto flex flex-row flex-wrap justify-center;
  }
}

.ffreport__wrap {
  @apply rounded;
}

/* Small (sm) */
@media (min-width: 640px) {
  .ffreport__card {
    height: 17rem;
  }
  .ffreport__wrap {
    @apply h-64;
  }
}

/* Medium (md) */
@media (min-width: 768px) {
  .ffreport__card {
    width: 30%;
    @apply mx-2;
  }
}

.ffreport__image {
  height: 13rem;
}
</style>


