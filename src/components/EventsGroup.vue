<template>
  <div class="ffeventsgroup">
      <EventCard v-for="eventToShow in events" 
                :key="eventToShow.id" 
                :eventToShow="eventToShow" />
  </div>
</template>
<script>
// Other components
import EventCard from "@/components/EventCard";

export default {
  props: ["events"],
  components: { EventCard },
  name: "EventsGroup",
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