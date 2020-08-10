<template>
  <div id="app">
    <Header />
    <Home />
    <EventsGrid />
    <Footer />
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import EventsGrid from "./components/EventsGrid.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Home,
    EventsGrid,
    Header,
    Footer,
  },
};
</script>

<style src="./assets/tailwind.css"></style>
