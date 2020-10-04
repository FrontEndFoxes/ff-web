<template>
	<div class="pt-24 bg-blue-100 bg-gradient-to-b from-white pb-10">
		<h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">About Front-End Foxes</h1>
		<div class="w-full mb-4">
			<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
		</div>
		<cld-image cloudName="front-end-foxes" publicId="sample" width="300" />
		<div class="text-black mx-20 text-xl">
			<p>
				Front-End Foxes Inc., a 501(c)(3) public charity (EIN 83-3866803), is an initiative founded by Jen
				Looper in 2018 that creates and hosts workshops to teach front-end technologies to women in a cool and
				fun way. Our activities include free self-driven code labs completed in a workshop format in groups with
				mentoring by volunteers, either online or in-person. The goal of the program is to familiarize women
				with front-end technologies in a supportive and inclusive environment. We also manage a scholarship fund
				to help women attend technical conferences. We have hosted successful longer events such as Vue Vixens
				Days in Argentina, Colombia, and the US. With chapters worldwide, you can probably find a group near
				you!
			</p>
			<h2 class="my-4 text-2xl font-bold leading-tight">About Our Activities</h2>
			<p>
				What can you expect from a Front-End Foxes event? Well, as a student, perhaps new to the field of
				front-end development, you are given the opportunity to learn about various frameworks for building both
				web and mobile apps. Over the course of a breakfast, a lunch 'n' learn, or a full day workshop, which we
				call ‘skulks’, you'll work with a mentor in small groups in a hands-on, self-driven learning
				environment. You'll complete the task of building a web app and a mobile app that will teach you about
				the framework and programming in JavaScript. You'll also get a chance to meet and work with like-minded
				students and interface with leaders in the industry and make valuable professional connections.
			</p>
			<h2 class="my-4 text-2xl font-bold leading-tight">A Note to Mentors</h2>

			<p>
				If you're joining one of our skulks as a mentor, firstly, thank you! Because of you, we can offer free
				workshops to new developers in a supportive environment. Your job is to stay with your mentees
				throughout the day, helping them over any difficulties and giving them a view of the life of a seasoned
				professional developer. You're the best! Just to be clear, anyone can be a mentor for Front-End Foxes!
				We are grateful for your participation.
			</p>
			<h2 class="my-4 text-2xl font-bold leading-tight">A Note to Students</h2>

			<p>
				Unsure if you will fit into one of our skulks? If you are a new front-end developer who identifies as a
				woman, you are welcome. This group’s focus is on the education and promotion of women developers, and
				those who identify as such. The founder of this organization, Jen Looper, is a Wellesley College Alumna
				(class of '92) and takes the college's admission criteria as a blueprint. To paraphrase their statement
				of admissibility:
			</p>
			<p class="py-5">
				"We will admit any person who lives as a woman and consistently identifies as a woman. We also welcome
				those who were assigned female at birth and who feel they belong in our community of women. We seek to
				provide students with a uniquely empowering learning environment—one designed specifically to prepare
				women to thrive in a complex world."
			</p>
			<p>Thank you for your support! 🦊</p>
			<h2 class="my-4 text-2xl font-bold leading-tight">Sponsoring Front-End Foxes</h2>
			<p>
				Would you or your company like to sponsor Front-End Foxes as an organization? We are very grateful that
				you are thinking along these lines. We are happy to accept sponsors at these levels, and recognize our
				Sponsors as such on our Sponsors page. We split our finances into two pots: money for our incidentals
				and chapters, and money for scholarships. If you sponsor us, you may tell us what percentage of the
				grant will benefit which pot.
			</p>
			<p class="my-4">Platinum: $5000 or more per year.</p>
			<p class="my-4">Gold: $2000 - $5000 per year.</p>
			<p class="my-4">Silver: $1000 - $2000 per year.</p>
			<p class="my-4">Software sponsor: Gift us with a software subscription.</p>
			<p class="my-4">
				Patreon sponsors: Community members are welcome to donate via our
				<a href="https://www.patreon.com/vuevixens" target="_blank" rel="noopener">Patreon</a> or GitHub Sponsors (preferred!).
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
