<template>
  <!--Card Event-->
  <div 
    class="p-4 flex flex-col justify-center items-center max-w-sm mx-auto w-full"
    :class="{
        'opacity-50': !event.active,
      }"
  >
    <div class="bg-white w-full rounded-md shadow-lg bg-cover bg-cent overflow-hidden">
      <div 
        class="img-event w-full h-40 bg-gray-30 bg-no-repeat bg-center bg-cover"
        :style="`background-image: url('${event.image ? event.image:require('@/assets/images/image-not-found.png')}')`"
      />
      <div class="px-3 pt-3">
        <div class="flex items-center mb-3">
          <div class="font-extrabold text-center leading-5 py-1 border-r pr-2 mr-2">
            <p class="text-black text-lg m-0">{{ dayjs(event.date).format('MMM') }}</p>
            <p class="text-black text-xl m-0">{{ dayjs(event.date).format('DD') }}</p>
          </div>
          <div>
            <h3 class="font-bold text-2xl self-center text-black">{{ event.title }}</h3>
            <p class="font-normal text-xs self-center text-black">🕐 {{ event.startEvent }} - {{ event.finishEvent }}</p>
          </div>
        </div>
        <p class="text-gray-500 font-normal mb-6 text-xs">
          {{ truncate(event.description, 73) }} 
        </p>active
      </div>
    </div>

    <a
      class="w-10/12 btn text-white -mt-6 rounded-lg overflow-hidden py-3"
      target="_blank"
      :href="event.link"
      :class="{
        'bg-secondary-500 hover:bg-secondary-400': event.active,
        'bg-gray-500 pointer-events-none cursor-not-allowed': !event.active,
      }"
    >
      <div class="text-center text-lg">{{ event.active ? 'register':'closed'}}</div>
    </a>
  </div>
</template>

<script>
import truncate from '@/mixins/truncate.js'

export default {
  name: "CardEvent",
  mixins: [truncate],
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dayjs: require('dayjs')
    }
  }
};
</script>
