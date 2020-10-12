<template>
<div class="pt-24 bg-blue-100 bg-gradient-to-b from-white pb-10">
    <h1 class="sponsors__title">{{$t("sponsors.sponsorsTitle")}}</h1>
    <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
    </div>
    <!-- Sponsors: Categories -->
    <SectionSponsorsCategories :sponsors="sponsors" />
</div>
</template>

<script>
// data
import ffsponsors from "@/assets/data/sponsors";
// components
import SectionSponsorsCategories from "@/components/sections/SectionSponsorsCategories";

export default {
    name: "Sponsors",
    components: { SectionSponsorsCategories },
    computed: {
        sponsors() {
            const levels = this.translateLevelsByCurrentLocal(this.levelsToFilter);
            return this.levelsToFilter.map((level, index) => ({
                id: level,
                name: `${levels[index]}`,
                list: this.selectSponsorsByLevel(level),
            }));
        },
    },
    data() {
        return {
            ffsponsors: ffsponsors,
            levelsToFilter: ["Platinium", "Gold", "Silver", "Software", "Community"],
        };
    },
    methods: {
        translateLevelsByCurrentLocal(levels) {
            let levelsByLocal = [];

            for (let index = 0; index < levels.length; index++) {
                const level = levels[index].toLowerCase();
                levelsByLocal.push(this.$t(`sponsors.sponsorLevels.${level}Sponsor`));
            }

            return levelsByLocal;
        },
        selectSponsorsByLevel(level) {
            level = level.toLowerCase();
            const currentLocal = this.$i18n.locale;
            return this.ffsponsors[currentLocal].filter(
                (ffsponsor) => ffsponsor.level === level
            );
        },
    },
};
</script>
<style scoped>
.sponsors__title {
  @apply w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800;
}
</style>
