<template>
	<div class="grid grid-cols-1 lg:grid-cols-2">
		<div class="col-span-1 bg-gray-800 h-auto lg:h-[100vh] px-12 py-14">
			<div class="max-w-4xl mx-auto">
				<div class="grid grid-cols-1 lg:grid-cols-6 gap-2">
					<div class="col-span-1">
						<img alt="Noel Schmidt" class="w-24 h-24 rounded-3xl shadow-xl col-span-1 hover:scale-125 transition-all" src="https://strapi.noel-schmidt.de/uploads/76415683_1_b53fc2a44e.png?updated_at=2023-03-21T09:10:05.149Z">
					</div>

					<div class="col-span-5 mt-2">
						<div class="text-4xl font-['Hurme-Bold']">
							<span class="text-white">Hi, i am</span> <span class="text-blue-300">Noel Schmidt</span>
						</div>

						<div class="text-4xl font-['Hurme-Bold']">
							<span class="text-blue-300">Webdesigner</span> <span class="text-white">&</span> <span class="text-blue-300">Developer</span>
						</div>

						<div class="mt-12 text-gray-400 font-['Hurme-Normal']">
							In 2016 I became interested in programming and it all started back when I taught myself Java to program mods for a game.
							In 2018 I started with web design and quickly found my fulfillment there. I also try to increase my knowledge in this area as time goes on.
							<br/><br/>

							I am interested in backend development aswell, so in 2019 I started coding REST API's & various other applications based on javascript.
						</div>


						<div class="mt-6">
							<div class="inline-block bg-blue-400 py-0.5 text-white font-['Hurme-Semi'] px-3 shadow-2xl rounded-xl mr-3 mt-3 md:mt-0">Javascript</div>
							<div class="inline-block bg-blue-400 py-0.5 text-white font-['Hurme-Semi'] px-3 shadow-2xl rounded-xl mr-3 mt-3 md:mt-0">TS</div>
							<div class="inline-block bg-blue-400 py-0.5 text-white font-['Hurme-Semi'] px-3 shadow-2xl rounded-xl mr-3 mt-3 md:mt-0">Vue</div>
							<div class="inline-block bg-blue-400 py-0.5 text-white font-['Hurme-Semi'] px-3 shadow-2xl rounded-xl mr-3 mt-3 md:mt-0">Angular</div>
							<div class="inline-block bg-blue-400 py-0.5 text-white font-['Hurme-Semi'] px-3 shadow-2xl rounded-xl mr-3 mt-3 md:mt-0">Nest.js</div>
						</div>
					</div>
				</div>

				<div class="text-4xl font-['Hurme-Bold'] mt-12">
					<span class="text-white">My</span> <span class="text-blue-300">GitHub</span> <span class="text-white">projects</span>
				</div>

				<div class="grid grid-cols-1 lg:grid-cols-2 mt-4 gap-2">
					<GithubProject v-for="(item, index) in repoData" :project="item" v-if="repoData"></GithubProject>
				</div>

				<social-media/>
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

				<BlogCard v-if="blogData" v-for="(item, index) in blogData" :item="item" />

				<div class="text-gray-400" v-if="blogData.length === 0">
					No data
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>

useHead({
	meta: [
		{ name: "description", content: "" },
		{ name: "keywords", content: "noel-schmidt, kleve, nrw, webdesigner, webdesign, portfolio" },
	]
})

const { find } = useStrapi4();

const { data: repoData } = await useFetch<GitProject[]>(`https://api.github.com/users/Noel-Schmidt/repos?per_page=4&sort=created`);
const { data: userData } = await useFetch<GitUser>(`https://api.github.com/users/Noel-Schmidt`);
const { data: blogData } = await find<any>(`blogs?populate=*`);

blogData.reverse();
</script>
