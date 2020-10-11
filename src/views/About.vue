<template>
	<div class="pt-24 bg-blue-100 bg-gradient-to-b from-white pb-10">
		<h1 class="about__title">{{$t("about.aboutTitle")}}</h1>
		<div class="w-full mb-4">
			<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
		</div>
		<cld-image cloudName="front-end-foxes" publicId="sample" width="300" />
		<div class="text-black mx-20 text-xl">
			<p>
				{{$t("about.aboutPurpose")}}
			</p>
			<h2 class="my-4 text-2xl font-bold leading-tight">
				{{$t("about.activitiesSubtitle")}}
			</h2>
			<p>
				{{$t("about.activitiesDescription")}}
			</p>
			<h2 class="my-4 text-2xl font-bold leading-tight">
				{{$t("about.mentorsNoteSubtitle")}}
			</h2>

			<p>
				{{$t("about.mentorsNote")}}
			</p>
			<h2 class="my-4 text-2xl font-bold leading-tight">
				{{$t("about.studentsNoteSubtitle")}}
			</h2>

			<p>
				{{$t("about.studentSentences.first")}}
			</p>
			<p class="py-5">
				"{{$t("about.studentSentences.second")}}"
			</p>
			<p>{{$t("about.studentSentences.third")}} 🦊</p>

			<h2 class="my-4 text-2xl font-bold leading-tight">
				{{$t("about.ffSponsoringSubtitle")}}
			</h2>
			<p>
				{{$t("about.ffSponsoringDescription")}}
			</p>
			<p class="my-4">{{$t("about.ffSponsoringPots.platinium")}}</p>
			<p class="my-4">{{$t("about.ffSponsoringPots.gold")}}</p>
			<p class="my-4">{{$t("about.ffSponsoringPots.silver")}}</p>
			<p class="my-4">{{$t("about.ffSponsoringPots.softwareSponsor")}}</p>
			<p class="my-4">
				{{$t("about.ffSponsoringPots.patreonSponsors")}}
				<a href="https://www.patreon.com/vuevixens" target="_blank" rel="noopener">Patreon</a>
				{{$t("about.ffSponsoringPots.githubSponsors")}}
			</p>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'About',
});
</script>
<style scoped>
.about__title {
	@apply w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800;
}
</style>
