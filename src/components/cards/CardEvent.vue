<template>
  <!--Card Event-->
  <div class="p-4 flex flex-col justify-center items-center max-w-sm mx-auto w-full">
    <div class="bg-white w-full rounded-md shadow-lg bg-cover bg-cent overflow-hidden">
      <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
      <div class="px-3 pt-3">
        <div class="flex items-center mb-3">
          <div class="font-extrabold text-center leading-5 py-1 border-r pr-2 mr-2">
            <p class="text-black text-lg m-0">OCT</p>
            <p class="text-black text-xl m-0">16</p>
          </div>
          <div>
            <h3 class="font-bold text-2xl self-center text-black">Japan Meetup</h3>
            <p class="font-normal text-xs self-center text-black">🕐 04:00 PM - 05:30PM</p>
          </div>
        </div>
        <p class="text-gray-500 font-normal mb-10 text-xs">
          Lorem ipsum dolor sit amet, consecte adipisc elit, sed do eiusmod tempor. 
        </p>
      </div>
    </div>

    <a href="#" class="w-10/12 btn bg-secondary-200 hover:bg-secondary-500 text-secondary-500 hover:text-white -mt-6 rounded-lg overflow-hidden py-3">
      <div class="text-center text-lg">register</div>
    </a>
  </div>
</template>

<script>
export default {
	name: "CardEvent"
};
</script>
