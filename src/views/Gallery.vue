<template>
  <div class="pt-24 bg-blue-100 bg-gradient-to-b from-white pb-10">
    <h1 class="gallery__title">
      {{ $t("gallery.galleryTitle") }}
    </h1>
    <div class="w-full mb-4">
      <div
        class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
      ></div>
    </div>
    <div v-if="years.length > 0">
      <!-- Years -->
      <YearsGroup :years="years" :currentYear="yearToFilter" @show="onShow" />
      <div v-if="yearToFilter > 0 && eventsByYear.length > 0">
        <div
          class="text-gray-800 mx-20 mt-5 mb-5 text-xl font-bold text-center"
        >
          <p class="text-2xl">
            {{ $t("gallery.galleryDescription") }}
          </p>
        </div>
        <!-- Events -->
        <EventsGroup :events="eventsByYear" />
      </div>
      <div
        v-else-if="yearToFilter == 0 && eventsByYear.length == 0"
        class="text-gray-800 mx-20 mt-5 mb-5 text-xl font-bold text-center"
      >
        <p class="text-2xl">
          {{ $t("gallery.galleryErrorMessages.yearNotSelected") }}
        </p>
      </div>
      <div
        v-else
        class="text-gray-800 mx-20 mt-5 mb-5 text-xl font-bold text-center"
      >
        <p class="text-2xl">
          {{ $t("gallery.galleryErrorMessages.noResultsByYear") }}
        </p>
      </div>
    </div>
    <div
      v-else
      class="text-gray-800 mx-20 mt-5 mb-5 text-xl font-bold text-center"
    >
      <p class="text-2xl">
        {{ $t("gallery.galleryErrorMessages.noEvents") }}
      </p>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import ffEventsGalleries from "@/assets/data/events-gallery.json";
import YearsGroup from "@/components/YearsGroup";
import EventsGroup from "@/components/EventsGroup";
export default defineComponent({
  name: "Gallery",
  components: { YearsGroup, EventsGroup },
  data() {
    return {
      ffEventsGalleries: ffEventsGalleries,
      years: [],
      yearToFilter: 0,
    };
  },

  mounted() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.extractYearFromEvents();

      if (Array.isArray(this.years) && this.years.length > 0) {
        this.yearToFilter = this.years[0];
      }
    },
    extractYearFromEvents() {
      let result = [];

      if (
        this.ffEventsGalleries !== undefined &&
        this.ffEventsGalleries !== null
      ) {
        this.ffEventsGalleries.forEach(({ year }) => {
          if (!result.includes(year)) {
            result.push(year);
          }
        });
      }
      this.years = result.sort().reverse();
    },
    onShow(year) {
      this.yearToFilter = year;
    },
  },
  computed: {
    eventsByYear() {
      const result = this.ffEventsGalleries.filter(
        (ffElement) => ffElement.year === this.yearToFilter
      );
      return result;
    },
  },
});
</script>
<style scoped>
.gallery__title {
  @apply w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800;
}
</style>
