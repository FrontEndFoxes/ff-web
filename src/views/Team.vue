<template>
	<div class="pt-24 bg-blue-100 bg-gradient-to-b from-white pb-10">
		<h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Team</h1>
		<div class="w-full mb-4">
			<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
		</div>

		<div class="max-w-screen-xl mx-auto px-4" v-for="member in staff" :key="member.id">
			<h2
				class="w-full pt-5 my-2 text-3xl font-bold leading-tight text-center text-gray-800"
				v-if="member.list && member.list.length"
			>
				{{ member.group }}
			</h2>

			<div class="-mx-4 flex flex-wrap justify-center">
				<div class="p-4 sm:w-1/2 md:w-1/3 lg:w-1/3" v-for="staffer in member.list" :key="staffer.id">
					<div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
						<img
							style="max-height:350px"
							class="w-full h-full object-cover object-center"
							:src="staffer.image"
							:alt="staffer.name"
						/>

						<div class="flex items-center px-6 py-3 bg-gray-900">
							<h2 class="mx-3 text-white font-semibold text-lg">{{ staffer.title }}</h2>
						</div>
						<div class="py-4 px-6">
							<h2 class="text-2xl font-semibold text-gray-800">{{ staffer.name }}</h2>
							<p v-if="staffer.description" class="py-2 text-lg text-gray-700">
								{{ staffer.description }}
							</p>
							<div v-if="staffer.twitter" class="flex items-center mt-4 text-green-400">
								<i class="fa fa-twitter fa-1x"></i>
								<h2 class="px-2 text-lg">
									<a :href="`https://twitter.com/${staffer.twitter}`">{{ staffer.twitter }}</a>
								</h2>
							</div>

							<div v-if="staffer.website" class="flex items-center mt-4 text-green-400">
								<i class="fa fa-link fa-1x"></i>
								<h2 class="px-2 text-lg">
									<a :href="staffer.website" target="_blank">{{ staffer.website }}</a>
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ffstaff from '@/assets/data/staff.json';
export default {
	computed: {
		staff() {
			return this.groups.map((group) => ({
				id: group,
				group: group,
				name: name,
				list: this.selectStaffByGroup(group),
			}));
		},

		/*staffImage() {
			if (!this.selectedStaffer) {
				return;
			}
			const fileName = this.selectedStaffer;
			console.log(fileName);
			return require(`../assets/${fileName}`); // the module request
		},*/
	},
	data() {
		return {
			ffstaff: ffstaff,
			groups: ['Leadership', 'Dach', 'México', 'Spain', 'Canada', 'US', 'Nigeria', 'Colombia', 'Perú', 'Benelux', 'Japan', 'Ireland'],
			selectedStaffer: '',
		};
	},
	methods: {
		selectStaffByGroup(group) {
			group = group.toLowerCase();
			return this.ffstaff.filter((ffstaff) => ffstaff.group === group);
		},
	},
};
</script>
