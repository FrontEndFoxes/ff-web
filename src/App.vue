<template>
  <div id="app" class="flex flex-col h-screen min-h-screen">
    <Header />
    <main class="relative flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  created() {
    this.title = this.$route.meta.title;
  },
  data() {
    return {
      title: "",
    };
  },
  watch: {
    $route(to) {
      this.title = to.meta.title;
    },

    title() {
      document.title = this.title + " | Front-End Foxes";
    },
  },
};
</script>

<style src="./assets/styles/tailwind.css"></style>
<style src="./assets/styles/main.css"></style>
