<template>
	<nav id="header" class="nav fixed w-full z-30 top-0 text-white">
		<div class="w-full mx-auto flex flex-wrap items-center justify-between">
			<div class="block lg:hidden p-4">
				<button
					aria-label="Open Menu"
					@click="drawer"
					id="nav-toggle"
					class="flex items-center p-1 text-white hover:text-orange-600"
				>
					<svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
				<!--overlay for open side menu-->
				<transition
					enter-class="opacity-0"
					enter-active-class="ease-out transition-medium"
					enter-to-class="opacity-100"
					leave-class="opacity-100"
					leave-active-class="ease-out transition-medium"
					leave-to-class="opacity-0"
				>
					<div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
						<div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
					</div>
				</transition>
				<aside
					id="drawer"
					class="transform top-0 left-0 w-64 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
					:class="isOpen ? 'translate-x-0' : '-translate-x-full'"
				>
					<ul>
						<li @click="isOpen = false">
							<router-link
								class="flex text-lg items-center p-4 hover:bg-blue-800 hover:text-white "
								to="/about"
								>About</router-link
							>
						</li>
						<li @click="isOpen = false">
							<router-link
								class="flex text-lg items-center p-4 hover:bg-blue-800 hover:text-white "
								to="/sponsors"
								>Sponsors</router-link
							>
						</li>
						<li @click="isOpen = false">
							<router-link
								class="flex text-lg items-center p-4 hover:bg-blue-800 hover:text-white "
								to="/team"
								>Team</router-link
							>
						</li>
						<li @click="isOpen = false">
							<router-link
								class="flex text-lg items-center p-4 hover:bg-blue-800 hover:text-white "
								to="/gallery"
								>Gallery</router-link
							>
						</li>
						<li @click="isOpen = false">
							<a
								href="https://dev.to/FrontEndFoxes"
								target="_blank"
								class="flex text-lg items-center p-4 hover:bg-blue-800 hover:text-white "
								>Blog</a
							>
						</li>
						<li @click="isOpen = false">
							<a
								href="https://etsy.com/shop/vuevixens"
								target="_blank"
								class="flex text-lg items-center p-4 hover:bg-blue-800 hover:text-white"
								>Shop</a
							>
						</li>
					</ul>
				</aside>
			</div>

			<div class="flex items-center pl-4">
				<a class="p-2 text-white no-underline hover:no-underline text-2xl lg:text-2xl" href="/">
					<img class="pull-left pt-1" src="@/assets/logo-sm.png" />
					<span class="pt-5 pl-3">Front-End Foxes</span>
				</a>
			</div>

			<div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden p-4 lg:p-0 z-20" id="nav-content">
				<ul class="list-reset lg:flex justify-end flex-1 items-center">
					<li class="hover:bg-blue-900">
						<router-link
							active-class="bg-blue-800"
							class="uppercase inline-block p-5 text-white no-underline"
							to="/about"
							>About</router-link
						>
					</li>
					<li class="hover:bg-blue-900">
						<router-link
							active-class="bg-blue-800"
							class="uppercase inline-block p-5 text-white no-underline"
							to="/sponsors"
							>Sponsors</router-link
						>
					</li>
					<li class="hover:bg-blue-900">
						<router-link
							active-class="bg-blue-800"
							class="uppercase inline-block p-5 text-white no-underline"
							to="/team"
							>Team</router-link
						>
					</li>
					<li class="hover:bg-blue-900">
						<router-link
							active-class="bg-blue-800"
							class="uppercase inline-block p-5 text-white no-underline"
							to="/gallery"
							>Gallery</router-link
						>
					</li>

					<li class="hover:bg-blue-900">
						<a
							class="uppercase inline-block p-5 text-white no-underline"
							href="https://dev.to/frontendfoxes"
							target="_blank"
							>Blog</a
						>
					</li>
					<li class="hover:bg-blue-900">
						<a
							class="uppercase inline-block p-5 text-white no-underline"
							href="https://etsy.com/shop/vuevixens"
							target="_blank"
							>Shop</a
						>
					</li>
					<li>
						<a
							class="uppercase inline-block py-2 px-4 text-white no-underline"
							href="https://github.com/frontendfoxes"
							target="_blank"
						>
							<i class="fa fa-github fa-2x"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
<script>
export default {
	data() {
		return {
			isOpen: false,
		};
	},
	methods: {
		drawer() {
			this.isOpen = !this.isOpen;
		},
	},
	watch: {
		isOpen: {
			immediate: true,
			handler(isOpen) {
				if (process.client) {
					if (isOpen) document.body.style.setProperty('overflow', 'hidden');
					else document.body.style.removeProperty('overflow');
				}
			},
		},
	},
	mounted() {
		document.addEventListener('keydown', (e) => {
			if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
		});
	},
};
</script>
