<template>
  <!--events area-->
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto flex flex-wrap pt-4">
      <h2
        class="w-full my-2 text-3xl md:text-5xl font-bold leading-tight text-center text-gray-800"
      >
        {{ $t("home.eventsTitle") }}
      </h2>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
    </div>

    <div class="area-events lg:min-w-full xl:min-w-0 container mx-auto px-10 flex flex-wrap pt-4">
      <div
        v-for="event in filteredEvents"
        :key="event.id"
        class="w-full lg:w-1/3 md:w-1/2 sm:w-1/2 xs:1/1 py-6 flex flex-col flex-grow flex-shrink bg-gray-100"
        :class="filteredEvents.length > 4 ? 'xl:w-1/3' : 'xl:w-1/4'"
      >
        <card-event :event="event" />
      </div>
    </div>
  </section>
</template>

<script>
import events from "@/assets/data/events-home.json";
import { CardEvent } from "@/components/cards";

export default {
  name: "SectionEvents",
  components: {
    CardEvent,
  },
  data() {
    return {
      events: events,
    };
  },
  computed: {
    filteredEvents() {
      return events.filter(event => event.live);
    }
  }
};
</script>
