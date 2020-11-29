<template>
  <div class="bg-white">
    <div class="pt-24 bg-blue-100 bg-gradient-to-b from-white pb-10">
      <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">{{ $t("about.aboutTitle") }}</h1>
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t mb-16"></div>
        <div class="max-w-6xl mx-auto">
          <cld-image cloudName="front-end-foxes" publicId="sample" width="300" />
          <div class="text-black mx-20 text-base">
            <div class="lg:flex mb-4">
                <div class="lg:w-3/4 lg:pr-20">
                  <h2 class="mb-4 text-3xl font-semibold">
                      Who We Are
                  </h2>
                  <p class="leading-relaxed">{{ $t("about.aboutPurpose") }}</p>
                </div>
                <div class="lg:w-1/4">
                  <img class="lg:float-right mx-auto my-8 hidden lg:flex" src="@/assets/images/about1.jpg" />
                </div>
            </div>

            <div class="lg:flex mb-4">
              <div class="lg:w-1/3 mt-16">
                <img class="lg:float-left mx-auto" src="@/assets/images/about2.jpg" />
              </div>
              <div class="lg:w-2/3 lg:pl-16">
                <h2 class="my-4 text-3xl font-semibold">
                  {{ $t("about.activitiesSubtitle") }}
                </h2>
                <p class="leading-relaxed">{{ $t("about.activitiesDescription") }}</p>
              </div>
            </div>

          <div class="max-w-sm w-full lg:max-w-full lg:flex lg:px-20 pt-10 pb-5">
            <div class="p-6 mentorsNote rounded-lg text-white leading-relaxed">
              <h3 class="pb-2 font-bold">
                   &#9432; {{ $t("about.mentorsNoteSubtitle") }}
              </h3>

              <p class="text-sm">
                  {{ $t("about.mentorsNote") }}
              </p>
            </div>
          </div>

          <div class="max-w-sm w-full lg:max-w-full lg:flex lg:px-20 pt-5 pb-10">
            <div class="p-6 studentsNote rounded-lg leading-relaxed">
              <h3 class="pb-2 font-bold">
                   &#9432; {{ $t("about.studentsNoteSubtitle") }}
              </h3>

              <p class="text-sm">
                  {{ $t("about.studentSentences.first") }}
              </p>
            </div>
          </div>
      </div>
    </div>
    </div>

    <div class="mx-32 my-16">
      <div class="flex items-stretch md:mx-20 md:px-20">
        <div class="blockquoteBar text-white px-1 md:px-2"><span>&ldquo;</span></div>
        <div class="p-6">
          <blockquote class="text-base font-light lg:text-2xl">
            {{ $t("about.studentSentences.second") }}"
          </blockquote>
        </div>
      </div>
    </div>

    <div class="sponsors text-center">
        <div class="mx-40 my-10 pt-10">
          <h2 class="my-4 text-3xl font-semibold">
              {{ $t("about.ffSponsoringSubtitle") }}
          </h2>
          <p class="px-2 lg:px-40 pt-4 leading-relaxed text-lg">
              {{ $t("about.ffSponsoringDescription") }}
          </p>
            <div class="lg:flex px-40 pt-4">
              <div class="lg:w-1/3">
                  <img class="inline" src="@/assets/images/silver.png" :alt="$t('about.ffSponsoringPots.silverTitle')" />
                  <h3 class="text-xl text-bold -mt-8">{{ $t("about.ffSponsoringPots.silverTitle") }}</h3>
                  <p class="mt-3">{{ $t("about.ffSponsoringPots.silver") }}</p>
              </div>
              <div class="lg:w-1/3">
                  <img class="inline" src="@/assets/images/gold.png" :alt="$t('about.ffSponsoringPots.goldTitle')" />
                  <h3 class="text-xl text-bold -mt-8">{{ $t("about.ffSponsoringPots.goldTitle") }}</h3>
                  <p class="mt-3">{{ $t("about.ffSponsoringPots.gold") }}</p>
              </div>
              <div class="lg:w-1/3">
                  <img class="inline" src="@/assets/images/platinum.png" :alt="$t('about.ffSponsoringPots.platinum')" />
                  <h3 class="text-xl text-bold -mt-8">{{ $t("about.ffSponsoringPots.platinumTitle") }}</h3>
                  <p class="mt-3">{{ $t("about.ffSponsoringPots.platinum") }}</p>
              </div>
            </div>

          <p class="my-4">{{ $t("about.ffSponsoringPots.softwareSponsor") }}</p>
          <p class="my-4">
              {{ $t("about.ffSponsoringPots.patreonSponsors") }}
              <a
              href="https://www.patreon.com/vuevixens"
              target="_blank"
              rel="noopener"
              >Patreon</a
              >
              {{ $t("about.ffSponsoringPots.githubSponsors") }}
          </p>
        </div>


    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
});
</script>


<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

  h2 {
    font-family: 'Lato', sans-serif;
  }

  .mentorsNote {
    background-color: #D43F16;
  }

  .studentsNote {
    background-color: #F8EBDA;
    color: #C23A14;
  }

  .blockquoteBar {
    background-color: #072D48;
    font-size: 100px;
  }

  blockquote {
    color: #072D48;
  }

  .sponsors {
    background-color: #072D48;
  }
</style>
