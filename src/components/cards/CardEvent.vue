<template>
  <!--Card Event-->
  <div class="p-4 flex flex-col justify-center items-center max-w-sm mx-auto w-full">
    <div class="bg-white w-full rounded-md shadow-lg bg-cover bg-cent overflow-hidden">
      <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
      <div class="px-6 pt-4">
        <div class="font-bold text-xl mb-2 text-gray-700 ">Japan Meetup</div>
        <p class="text-gray-700 text-base mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
      </div>
    </div>

    <a href="#" class="w-10/12 bg-blue-500 hover:bg-blue-700 -mt-6 rounded-md overflow-hidden py-3">
      <div class="text-center">register</div>
    </a>
  </div>
</template>

<script>
export default {
	name: "CardEvent"
};
</script>
