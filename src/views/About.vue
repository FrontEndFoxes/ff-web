<template>
  <div class="bg-white">
    <div class="pt-24 bg-blue-100 bg-gradient-to-b from-white pb-10">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        {{ $t("about.aboutTitle") }}
      </h1>
      <div
        class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t mb-8 lg:mb-16"
      ></div>
      <div class="max-w-6xl mx-auto">
        <div class="text-black mx-8 lg:mx-20 text-base">
          <div class="lg:flex mb-4">
            <div class="lg:w-2/3 lg:pr-20">
              <h2 class="mb-4 text-3xl font-semibold">Who We Are</h2>
              <p class="leading-relaxed text-xl text-primary-700">
                {{ $t("about.aboutPurpose") }}
              </p>
            </div>
            <div class="lg:w-1/3">
              <img
                class="lg:float-right mx-auto my-4 hidden lg:flex"
                src="https://res.cloudinary.com/front-end-foxes/image/upload/v1602815746/skulks-2020/tech-ladies-singapore-2020_jt9jyk.png"
                alt="Zoom Events"
              />
            </div>
          </div>

          <div class="lg:flex mb-4">
            <div class="lg:w-1/3 mt-16">
              <img
                class="lg:float-left mx-auto"
                src="https://res.cloudinary.com/front-end-foxes/image/upload/v1608430795/Sponsors/about-our-activities_hgazht.jpg"
                alt="Tampa Bay Skulk"
              />
            </div>
            <div class="lg:w-2/3 lg:pl-16">
              <h2 class="my-4 text-3xl font-semibold">
                {{ $t("about.activitiesSubtitle") }}
              </h2>
              <p class="leading-relaxed text-primary-700 text-xl">
                {{ $t("about.activitiesDescription") }}
              </p>
            </div>
          </div>

          <div class="lg:max-w-full lg:px-20 pt-10 pb-5">
            <div
              class="p-6 bg-orange-700 rounded-lg text-white leading-relaxed"
            >
              <h3 class="pb-2 font-bold">
                &#9432; {{ $t("about.mentorsNoteSubtitle") }}
              </h3>

              <p>
                {{ $t("about.mentorsNote") }}
              </p>
            </div>
          </div>

          <div class="lg:max-w-full lg:px-20 pt-5 pb-10">
            <div
              class="p-6 bg-orange-200 text-orange-800 rounded-lg leading-relaxed"
            >
              <h3 class="pb-2 font-bold">
                &#9432; {{ $t("about.studentsNoteSubtitle") }}
              </h3>

              <p>
                {{ $t("about.studentSentences.first") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-8 lg:mx-32 my-16">
      <div class="flex items-stretch lg:mx-20 lg:px-20">
        <div
          class="blockquoteBar bg-primary-700 text-6xl text-white px-1 md:px-2"
        >
          <span>&ldquo;</span>
        </div>
        <div class="p-6">
          <blockquote class="text-primary-700 font-light lg:text-2xl">
            {{ $t("about.studentSentences.second") }}"
          </blockquote>
        </div>
      </div>
    </div>

    <div class="bg-primary-600">
      <div class="mx-4 lg:mx-40 py-10 pt-10">
        <h2 class="my-4 text-3xl font-semibold text-center">
          {{ $t("about.ffSponsoringSubtitle") }}
        </h2>
        <p class="text-xl px-2 lg:px-32 pt-4 leading-relaxed text-center">
          {{ $t("about.ffSponsoringDescription") }}
        </p>

        <div class="lg:flex px-8 lg:px-40 pt-4 text-center">
          <div class="lg:w-1/3">
            <img
              class="inline"
              src="@/assets/images/silver.png"
              :alt="$t('about.ffSponsoringPots.silverTitle')"
            />
            <h3 class="text-xl text-bold -mt-8">
              {{ $t("about.ffSponsoringPots.silverTitle") }}
            </h3>
            <p class="mt-3">
              <i>{{ $t("about.ffSponsoringPots.silver") }}</i>
            </p>
          </div>
          <div class="lg:w-1/3">
            <img
              class="inline"
              src="@/assets/images/gold.png"
              :alt="$t('about.ffSponsoringPots.goldTitle')"
            />
            <h3 class="text-xl text-bold -mt-8">
              {{ $t("about.ffSponsoringPots.goldTitle") }}
            </h3>
            <p class="mt-3">
              <i>{{ $t("about.ffSponsoringPots.gold") }}</i>
            </p>
          </div>
          <div class="lg:w-1/3">
            <img
              class="inline"
              src="@/assets/images/platinum.png"
              :alt="$t('about.ffSponsoringPots.platinum')"
            />
            <h3 class="text-xl text-bold -mt-8">
              {{ $t("about.ffSponsoringPots.platinumTitle") }}
            </h3>
            <p class="mt-3">
              <i>{{ $t("about.ffSponsoringPots.platinum") }}</i>
            </p>
          </div>
        </div>

        <p class="lg:mt-20 my-4 text-xl">
          <img
            class="inline mr-4 icon"
            src="@/assets/images/wrench.png"
            alt=""
          />
          <span class="sponsor-link">{{
            $t("about.ffSponsoringPots.softwareTitle")
          }}</span>
          {{ $t("about.ffSponsoringPots.softwareSponsor") }}
        </p>
        <p class="my-4 text-xl">
          <img
            class="inline mr-4 icon"
            src="@/assets/images/patreon.png"
            alt="Patreon"
          />
          <a href="https://www.patreon.com/vuevixens" target="_blank">
            {{ $t("about.ffSponsoringPots.patreonSponsors") }}</a
          >
        </p>
        <p class="my-4 text-xl">
          <img
            class="inline mr-4 icon"
            src="@/assets/images/github.png"
            alt="GitHub"
          />
          <a href="https://github.com/sponsors/FrontEndFoxes" target="_blank">
            {{ $t("about.ffSponsoringPots.githubSponsors") }}</a
          >
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


