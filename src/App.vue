<template>
	<div id="app">
		<Header />
		<transition name="fade"><router-view /></transition>
		<Footer />
	</div>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
	name: 'App',
	components: {
		Header,
		Footer,
	},
};
</script>

<style src="./assets/tailwind.css"></style>
