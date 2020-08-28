<template>
	<nav id="header" class="nav fixed w-full z-30 top-0 text-white">
		<div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
			<div class="pl-4 flex items-center">
				<a class="toggleColour text-white no-underline hover:no-underline text-2xl lg:text-2xl" href="/">
					<img class="pull-left pt-1" src="@/assets/logo-sm.png" />
					<span class="pt-5 pl-3">Front-End Foxes</span>
				</a>
			</div>

			<div class="block lg:hidden pr-4">
				<button id="nav-toggle" class="flex items-center p-1 text-white hover:text-gray-900">
					<svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>

			<div
				class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
				id="nav-content"
			>
				<ul class="list-reset lg:flex justify-end flex-1 items-center">
					<li class="mr-3">
						<router-link class="uppercase inline-block py-2 px-4 text-white no-underline" to="/about"
							>About</router-link
						>
					</li>
					<li class="mr-3">
						<router-link class="uppercase inline-block py-2 px-4 text-white no-underline" to="/sponsors"
							>Sponsors</router-link
						>
					</li>
					<li class="mr-3">
						<router-link class="uppercase inline-block py-2 px-4 text-white no-underline" to="/team"
							>Team</router-link
						>
					</li>
					<li class="mr-3">
						<router-link class="uppercase inline-block py-2 px-4 text-white no-underline" to="/gallery"
							>Gallery</router-link
						>
					</li>

					<li class="mr-3">
						<a
							class="uppercase inline-block py-2 px-4 text-white no-underline"
							href="https://dev.to/frontendfoxes"
							target="_blank"
							>Blog</a
						>
					</li>
					<li class="mr-3">
						<a
							class="uppercase inline-block py-2 px-4 text-white no-underline"
							href="https://etsy.com/shop/vuevixens"
							target="_blank"
							>Shop</a
						>
					</li>
					<li class="mr-3">
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
