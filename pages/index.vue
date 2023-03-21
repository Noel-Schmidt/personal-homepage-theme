<template>
	<div class="grid grid-cols-1 lg:grid-cols-2">
		<div class="col-span-1 bg-gray-800 h-auto lg:h-[100vh] px-12 py-14">
			<div class="max-w-4xl mx-auto">
				<div class="grid grid-cols-1 lg:grid-cols-6 gap-2">
					<div class="col-span-1">
						<img class="w-24 h-24 rounded-3xl shadow-xl col-span-1 hover:scale-125 transition-all" src="https://avatars.githubusercontent.com/u/76415683?v=4">
					</div>

					<div class="col-span-5 mt-2">
						<div class="text-4xl font-['Hurme-Bold']">
							<span class="text-white">Hi, i am</span> <span class="text-blue-300">Noel Schmidt</span>
						</div>

						<div class="text-4xl font-['Hurme-Bold']">
							<span class="text-blue-300">Webdesigner</span> <span class="text-white">&</span> <span class="text-blue-300">Developer</span>
						</div>

						<div class="mt-12 text-gray-400 font-['Hurme-Normal']">
							Lorem ipsum dolor sit amet, consetetur sadipscing elitrt justo duo dolores et ea rebum. Stet cliy eirmod tempor
							invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
							et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br/><br/>

							Lorem ipsum dolor sit amet, consetetur sadipscing elitrt justo duo do eos et accusam et justo duo dolores et ea rebum.  takimata sanctus est Lorem ipsum dolor sit amet.
						</div>


						<div class="mt-6">
							<div class="inline-block bg-blue-400 py-0.5 text-white font-['Hurme-Semi'] px-3 shadow-2xl rounded-xl mr-3">Javascript</div>
							<div class="inline-block bg-blue-400 py-0.5 text-white font-['Hurme-Semi'] px-3 shadow-2xl rounded-xl mr-3">TS</div>
							<div class="inline-block bg-blue-400 py-0.5 text-white font-['Hurme-Semi'] px-3 shadow-2xl rounded-xl mr-3">Vue</div>
							<div class="inline-block bg-blue-400 py-0.5 text-white font-['Hurme-Semi'] px-3 shadow-2xl rounded-xl mr-3">Angular</div>
							<div class="inline-block bg-blue-400 py-0.5 text-white font-['Hurme-Semi'] px-3 shadow-2xl rounded-xl mr-3">Nest.js</div>
						</div>
					</div>
				</div>

				<div class="text-4xl font-['Hurme-Bold'] mt-12">
					<span class="text-white">My</span> <span class="text-blue-300">GitHub</span> <span class="text-white">projects</span>
				</div>

				<div class="grid grid-cols-1 lg:grid-cols-2 mt-4 gap-2">
					<a target="_blank" :href="project.html_url" class="col-span-1 bg-gray-900 hover:bg-gray-900/70 rounded-xl shadow-2xl py-4 px-6 transition-all" v-for="project in repoData" v-if="repoData">
						<div class="flex items-center">
							<div class="flex w-9 h-9 fill-white bg-gray-700 items-center justify-center mr-3 rounded-xl shadow-2xl">
								<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
							</div>

							<div class="text-white font-['Hurme-Bold']">
								{{ project.full_name }}
							</div>
						</div>

						<div class="text-gray-400 mt-3">
							<span class="bg-blue-700 text-white px-2 py-0.5 rounded-3xl">{{ project.language }}</span>
							{{ project.description }}
						</div>
					</a>
				</div>

				<div class="mt-12 flex justify-start">

					<a href="#" class="flex mr-2 w-16 h-16 bg-gray-700 items-center justify-center rounded-xl fill-gray-400 hover:fill-gray-300 transition-all">
						<svg class="w-10 h-10 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
					</a>

					<a href="#" class="flex mr-2 w-16 h-16 bg-gray-700 items-center justify-center rounded-xl fill-gray-400 hover:fill-gray-300 transition-all">
						<svg class="w-10 h-10 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
					</a>

					<a href="#" class="flex w-16 h-16 bg-gray-700 items-center justify-center rounded-xl fill-gray-400 hover:fill-gray-300 transition-all">
						<svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
					</a>
				</div>
			</div>
		</div>

		<div class="col-span-1 bg-gray-900 h-full md:h-[100vh] px-12 py-14">
			<div class="max-w-4xl mx-auto">
				<div class="grid grids-cols-1 md:grid-cols-3 mb-14 gap-4" v-if="userData">
					<a href="#" class="block bg-gray-800 hover:bg-gray-800/70 rounded-xl shadow-2xl py-4 px-6 transition-all text-center">
						<div class="text-white font-['Hurme-Bold'] text-4xl">{{ userData.public_repos }}</div>
						<div class="text-white mt-2">Public Repository</div>
					</a>

					<a href="#" class="block bg-gray-800 hover:bg-gray-800/70 rounded-xl shadow-2xl py-4 px-6 transition-all text-center">
						<div class="text-white font-['Hurme-Bold'] text-4xl">{{ userData.followers }}</div>
						<div class="text-white mt-2">Followers</div>
					</a>

					<a href="#" class="block bg-gray-800 hover:bg-gray-800/70 rounded-xl shadow-2xl py-4 px-6 transition-all text-center">
						<div class="text-white font-['Hurme-Bold'] text-4xl">{{ userData.following }}</div>
						<div class="text-white mt-2">Following</div>
					</a>
				</div>


				<div class="text-4xl font-['Hurme-Bold']">
					<span class="text-white">This is my</span> <span class="text-blue-300">blog</span>
				</div>

				<div class="mt-5"></div>

				<NuxtLink :to="'/blog/'+item.id" class="mb-4 block bg-gray-800 hover:bg-gray-800/70 rounded-xl shadow-2xl py-4 px-6 transition-all hover:scale-105" v-if="blogData" v-for="(item, index) in blogData">
					<div class="grid grid-cols-1 lg:grid-cols-5 gap-2">
						<img class="col-span-2 rounded-xl w-80 h-40 object-cover" :src="'https://strapi.noel-schmidt.de'+item.attributes.cover.data.attributes.formats.small.url">

						<div class="col-span-3">
							<div class="text-2xl text-white font-['Hurme-Bold']">
								{{ item.attributes.title  }}
							</div>


							<div class="mt-2 text-gray-400 font-['Hurme-Normal']">
								{{ item.attributes.short_text }}
							</div>

							<div class="mt-2 flex items-center">
								<div class="flex mr-2 w-8 h-8 bg-gray-700 items-center justify-center rounded-xl fill-gray-400 hover:fill-gray-300 transition-all">
									<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>
								</div>

								<div class="text-gray-400 font-['Hurme-Semi']">
									{{  new Date(item.attributes.publishedAt).toLocaleString() }}
								</div>
							</div>

						</div>
					</div>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>

useHead({
	htmlAttrs: {
		class: ""
	}
})

const { find } = useStrapi4();

const { data: repoData } = await useFetch<GitProject[]>(`https://api.github.com/users/Noel-Schmidt/repos?per_page=4&sort=created`);
const { data: userData } = await useFetch<GitUser>(`https://api.github.com/users/Noel-Schmidt`);
const { data: blogData } = await find<any>(`blogs?populate=*`);
blogData.reverse();
</script>
