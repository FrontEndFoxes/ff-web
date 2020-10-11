<template>
    <div class="flex flex-col items-center max-w-sm h-full bg-white shadow-lg rounded-lg overflow-hidden my-4">
        <div>
            <img :src="sponsor.logo" v-bind:alt="sponsor.title" class="flex-1 pt-6 px-4 py-2 m-2" />
        </div>
        <div v-if="sponsor.link" class="flex items-center mt-4 text-green-400">
            <i class="fa fa-link fa-1x"></i>
            <h2 class="px-2 text-lg">
                <a :href="sponsor.link" target="_blank">{{ sponsor.link }}</a>
            </h2>
        </div>
        <p class="text-gray-800 text-center text-base p-8 mb-5">
            {{ sponsor.description }}
        </p>
    </div>
</template>
<script>
export default {
    props: ["sponsor"],
    name: "CardSponsor"
}
</script>