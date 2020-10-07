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

			<!-- <div
				v-for="event in events"
				:key="event.id"
				class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink bg-gray-100"
			>
				<div class="flex-1 bg-white pt-8 rounded-t rounded-b-none overflow-hidden shadow">
					<a href="#" class="flex flex-wrap no-underline hover:no-underline">
						<p class="w-full text-gray-700 text-xs md:text-sm px-6">{{ event.date }}</p>
						<div class="w-full font-bold text-xl text-gray-800 px-6">{{ event.title }}</div>
						<p class="text-gray-800 text-base px-6 mb-5">{{ event.description }}</p>
					</a>
				</div>
				<div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
					<div class="flex items-center justify-start">
						<button
							class="mx-auto w-full md:w-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full py-4 px-8 shadow-lg"
						>
							Register
						</button>
					</div>
				</div>
			</div> -->

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
