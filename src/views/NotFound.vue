<template>
    <div class="pt-24 bg-blue-100 bg-gradient-to-b from-white pb-10">
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            {{$t("notfound.notFoundTitle")}}
        </h1>
        <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="max-w-screen-xl mx-auto px-4">
            <div class="-mx-4 flex flex-wrap justify-center">
                <div class="p-4 sm:w-1/2 md:w-1/3 lg:w-1/3">
                    <img alt="fox" src="@/assets/images/fox.jpg" />
                    <p class="text-gray-800 text-center text-base p-8 mb-5">
                        <span>
                            <a class="mr-1"
                                href="https://unsplash.com/@sunyu?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">{{$t("notfound.photoBySunyu")}}</a>
                            <a
                                href="https://unsplash.com/s/photos/fox?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                                {{$t("notfound.photoOnUnsplash")}}</a>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFound",
});
</script>