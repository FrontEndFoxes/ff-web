<template>
  <div class="ffeventsgroup">
      <CardEventGallery 
        v-for="eventToShow in events" 
        :key="eventToShow.id" 
        :eventToShow="eventToShow" 
      />
  </div>
</template>
<script>
import { CardEventGallery } from "@/components/cards";

export default {
  props: ["events"],
  name: "EventsGroup",
  components: { CardEventGallery },
};
</script>

<style scoped>
.ffeventsgroup {
  @apply p-2 flex flex-col flex-wrap justify-around p-10;
}

/* Medium (md) */
@media (min-width: 768px) {
  .ffeventsgroup {
    @apply w-full mx-auto flex flex-row flex-wrap justify-center;
  }
}
</style>