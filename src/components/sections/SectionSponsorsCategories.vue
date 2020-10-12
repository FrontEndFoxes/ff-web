<template>
<!-- Sponsors: Categories -->
<div class="max-w-screen-xl mx-auto px-4" v-for="category in sponsors" :key="category.id">
    <h2 class="w-full mt-10 pt-5 my-2 text-3xl font-bold leading-tight text-center text-gray-800"
        v-if="category.list && category.list.length">
        {{ category.name }}
    </h2>
    <!-- Sponsors by category -->
    <div class="-mx-4 flex flex-wrap justify-center">
        <div class="p-4 sm:w-1/2 md:w-1/3 lg:w-1/3" v-for="sponsor in category.list" :key="sponsor.id">
            <CardSponsor :sponsor="sponsor" />
        </div>
    </div>
</div>
</template>
<script>
// components
import CardSponsor from "@/components/cards/CardSponsor";
export default {
    props: ["sponsors"],
    name: "SectionSponsorsCategories",
    components: { CardSponsor },
}
</script>