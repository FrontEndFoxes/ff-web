<template>
	<!--events area-->
	<section class="bg-gray-100 py-8">
		<div class="container mx-auto flex flex-wrap pt-4">
			<h2 class="w-full my-2 text-3xl md:text-5xl font-bold leading-tight text-center text-gray-800">
				Events
			</h2>
			<div class="w-full mb-4">
				<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
			</div>
			
			<div
				v-for="event in events"
				:key="event.id"
				class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink bg-gray-100"
			>
				<card-event />
			</div>
		</div>
	</section>
</template>

<script>
import events from '@/assets/data/events.json';
import { CardEvent } from '@/components/cards';

export default {
	name: 'SectionEvents',
	components: {
		CardEvent,
	},
	data() {
		return {
			events: events,
		};
	},
};
</script>
