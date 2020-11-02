<template>
  <div class="pt-24 bg-blue-100 bg-gradient-to-b from-white pb-10">
    <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">{{ $t("about.aboutTitle") }}</h1>
      <div
        class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t mb-16"
      ></div>
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

        <p>
            {{ $t("about.studentSentences.first") }}
        </p>
        <p class="py-5">"{{ $t("about.studentSentences.second") }}"</p>
        <p>{{ $t("about.studentSentences.third") }} 🦊</p>

        <h2 class="my-4 text-2xl font-bold leading-tight">
            {{ $t("about.ffSponsoringSubtitle") }}
        </h2>
        <p>
            {{ $t("about.ffSponsoringDescription") }}
        </p>
        <p class="my-4">{{ $t("about.ffSponsoringPots.platinum") }}</p>
        <p class="my-4">{{ $t("about.ffSponsoringPots.gold") }}</p>
        <p class="my-4">{{ $t("about.ffSponsoringPots.silver") }}</p>
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
  }
</style>
