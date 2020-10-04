<template>
	<div>
		<!--events area-->
		<section class="bg-gray-100 py-8">
			<div class="container mx-auto flex flex-wrap pt-4">
				<h2 class="w-full my-2 text-3xl md:text-5xl font-bold leading-tight text-center text-gray-800">Events</h2>
				<div class="w-full mb-4">
					<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
				</div>

				<div
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
				</div>
			</div>
		</section>

		<section class="bg-gray-100">
			<h2 class="w-full text-3xl md:text-5xl font-bold leading-tight text-center text-gray-800">Women Teaching Women</h2>
			<div class="w-full mb-4">
				<div class="h-1 mx-auto gradient w-64 opacity-25 my-3 py-0 rounded-t"></div>
			</div>

			<div class="flex flex-wrap">
				<div class="w-1/3 p-2">
					<div class="p-2">
						<img src="@/assets/mentoring.jpg" alt="teaching women students" />
					</div>
				</div>
				<div class="w-1/3 p-2">
					<div class="p-2">
						<img src="@/assets/mentoring.jpg" alt="teaching women students" />
					</div>
				</div>
				<div class="w-1/3 p-2">
					<div class="p-2">
						<img src="@/assets/mentoring.jpg" alt="teaching women students" />
					</div>
				</div>
			</div>
		</section>

		<svg
			class="wave-top"
			viewBox="0 0 1439 147"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
		>
			<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
					<g class="wave" fill="white">
						<path
							d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
						/>
					</g>
					<g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
						<g
							transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) "
						>
							<path
								d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
								opacity="0.100000001"
							/>
							<path
								d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
								opacity="0.100000001"
							/>
							<path
								d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
								opacity="0.200000003"
							/>
						</g>
					</g>
				</g>
			</g>
		</svg>

		<section class="container mx-auto text-center py-6 mb-12">
			<h2 class="w-full my-2 text-3xl md:text-5xl font-bold leading-tight text-center text-white">Come Skulk with Us</h2>
			<div class="w-full mb-4">
				<div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
			</div>

			<h3 class="my-4 text-xl md:text-3xl leading-tight">Our workshops are always free</h3>
		</section>
	</div>
</template>

<script>
import events from '@/assets/data/events.json';
export default {
	data() {
		return {
			events: events,
		};
	},
};
</script>
