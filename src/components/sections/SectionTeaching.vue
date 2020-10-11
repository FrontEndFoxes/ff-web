<template>
  <section class="bg-gray-100 py-8">
    <div class="container mx-auto flex flex-wrap pt-4">
      <h2 class="w-full text-3xl md:text-5xl font-bold leading-tight text-center text-gray-800">
        Women Teaching Women
      </h2>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-3 py-0 rounded-t"></div>
      </div>

      <div class="lg:flex">
        <div class="lg:w-1/3 p-2">
          <div class="p-2">
            <img class="mentoring" src="@/assets/images/mentoring.jpg" alt="Colombia Skulk members" />
          </div>
        </div>
        <div class="lg:w-1/3 p-2">
          <div class="p-2">
            <img class="mentoring" src="@/assets/images/mentoring2.jpg" alt="Concatenate Conference Skulk in Nigeria" />
          </div>
        </div>
        <div class="lg:w-1/3 p-2">
          <div class="p-2">
            <img class="mentoring" src="@/assets/images/mentoring3.jpg" alt="Vue Vixens Japan launch" />
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
    name: 'SectionTeaching',
};
</script>

<style scoped>
  .mentoring {
    filter: grayscale(100%);
  }
</style>
