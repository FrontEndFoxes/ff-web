<template>
  <div class="years">
      <div v-for="(year, index) in years" 
          :key="index" :class="paintYearSelected(year)"
          @click="show(year)">
          <span class="cursor-pointer">{{ year }}</span>
      </div>
  </div>
</template>
<script>
export default {
	props: ["years", "currentYear"],
	name: "YearsGroup",
	emits: ["show"],
	data() {
		return {
			yearSelected: 0,
		};
	},
	created() {
		this.yearSelected = this.currentYear;
	},
	methods: {
		show(year) {
			// Change values
			this.yearSelected = year;
			// Emit any event
			this.$emit("show", this.yearSelected);
		},
		paintYearSelected(year) {
			const cssNormal = "years__title";
			const cssSelected = "years__title--selected";
			const activeClass = this.yearSelected === year ? cssSelected : cssNormal;

			return [activeClass, cssNormal];
		}
	},
};
</script>
<style scoped>
.years {
	@apply w-11/12 mb-5 mx-auto flex flex-row flex-wrap justify-evenly rounded p-1;
}

.years__title {
	@apply w-16 text-center m-1 p-1 text-gray-600;
}

.years__title--selected {
	@apply border-b-2 border-gray-600;
}

/* Medium */

@media (min-width: 768px) {
	.years {
		@apply w-6/12 flex flex-row flex-wrap items-center;
	}
	.years__title {
		@apply w-12;
	}
}

/* Large (lg) */

@media (min-width: 1024px) {
	.years {
		@apply w-6/12 flex flex-row flex-wrap items-center;
	}
	.years__title {
		@apply w-12;
	}
}
</style>