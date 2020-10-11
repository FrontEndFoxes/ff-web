<template>
<div class="card text-center max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
    <img style="max-height: 350px" class="w-full h-full object-cover object-center" :src="staffer.image"
        :alt="staffer.name" />

    <div class="px-6 py-3 bg-gray-900">
        <h2 class="text-center text-white font-semibold text-lg">
            {{ staffer.title }}
        </h2>
    </div>
    <div class="py-4 px-6">
        <h2 class="text-center text-2xl font-semibold text-gray-800">
            {{ staffer.name }}
        </h2>
        <p v-if="staffer.description" class="text-left py-2 text-lg text-gray-700">
            {{ staffer.description }}
        </p>
        <div v-if="staffer.twitter" class="flex items-center mt-4 text-green-400">
            <i class="fa fa-twitter fa-1x"></i>
            <h2 class="px-2 text-lg">
                <a :href="`https://twitter.com/${staffer.twitter}`">
                    {{ staffer.twitter }}
                </a>
            </h2>
        </div>

        <div v-if="staffer.website" class="flex items-center mt-4 text-green-400">
            <i class="fa fa-link fa-1x"></i>
            <h2 class="px-2 text-lg">
                <a :href="staffer.website" target="_blank">
                    {{ staffer.website }}
                </a>
            </h2>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props: ["staffer"],
    name: "CardStaffer"
}
</script>
<style scoped>
.card {
  height: 100%;
}
</style>