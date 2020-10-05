<template>
	<div class="pt-24 bg-blue-100 bg-gradient-to-b from-white pb-10">
		<h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Sponsors</h1>
		<div class="w-full mb-4">
			<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
		</div>

		<div class="max-w-screen-xl mx-auto px-4" v-for="category in sponsors" :key="category.id">
			<h2
				class="w-full mt-10 pt-5 my-2 text-3xl font-bold leading-tight text-center text-gray-800"
				v-if="category.list && category.list.length"
			>
				{{ category.name }}
			</h2>

			<div class="-mx-4 flex flex-wrap justify-center">
				<div class="p-4 sm:w-1/2 md:w-1/3 lg:w-1/3" v-for="sponsor in category.list" :key="sponsor.id">
					
						<div class="flex flex-col items-center max-w-sm h-full bg-white shadow-lg rounded-lg overflow-hidden my-4">
							<div>
								<img :src=sponsor.logo v-bind:alt="sponsor.title" class="flex-1 pt-6 px-4 py-2 m-2" />
							</div>
							<a :href="sponsor.link" class="flex flex-wrap no-underline hover:no-underline">
								<div class="w-full text-center font-bold text-xl text-gray-800 px-6">
									{{ sponsor.title }}
								</div>
								<p class="text-gray-800 text-center text-base p-8 mb-5">{{ sponsor.description }}</p>
							</a>
						</div>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ffsponsors from '@/assets/data/sponsors.json';
export default {
	computed: {
		sponsors() {
			return this.levels.map((level) => ({
				id: level,
				name: `${level} Sponsors`,
				list: this.selectSponsorsByLevel(level),
			}));
		},
	},
	data() {
		return {
			ffsponsors: ffsponsors,
			levels: ['Platinum', 'Gold', 'Silver', 'Software', 'Community'],
		};
	},
	methods: {
		selectSponsorsByLevel(level) {
			level = level.toLowerCase();
			return this.ffsponsors.filter((ffsponsor) => ffsponsor.level === level);
		},
	},
};
</script>
