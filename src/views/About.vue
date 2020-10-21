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
                <h2 class="mb-4 text-2xl font-bold leading-tight">
                    Who We Are
                </h2>
                <p class="leading-relaxed">{{ $t("about.aboutPurpose") }}</p>
              </div>
              <div class="lg:w-1/4">
                <img class="lg:float-right mx-auto my-8" src="@/assets/images/about1.jpg" />
              </div>
          </div>

        <h2 class="my-4 text-2xl font-bold leading-tight">
            {{ $t("about.activitiesSubtitle") }}
        </h2>
        <p>
            {{ $t("about.activitiesDescription") }}
        </p>
        <h2 class="my-4 text-2xl font-bold leading-tight">
            {{ $t("about.mentorsNoteSubtitle") }}
        </h2>

        <p>
            {{ $t("about.mentorsNote") }}
        </p>
        <h2 class="my-4 text-2xl font-bold leading-tight">
            {{ $t("about.studentsNoteSubtitle") }}
        </h2>

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
