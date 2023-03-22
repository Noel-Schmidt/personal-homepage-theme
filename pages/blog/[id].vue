<template>
	<div class="max-w-6xl mx-auto py-12 px-12" v-if="postData">
		<div class="flex justify-center mb-5">
			<NuxtLink to="/">
				<img alt="Noel Schmidt" class="w-24 h-24 rounded-3xl shadow-xl hover:scale-125 transition-all" src="https://strapi.noel-schmidt.de/uploads/76415683_1_b53fc2a44e.png?updated_at=2023-03-21T09:10:05.149Z">
			</NuxtLink>
		</div>

		<div class="mb-6 text-center">
			<div class="text-white font-['Hurme-Bold'] text-4xl">
				{{ postData.attributes.title }}
			</div>

			<div class="inline-flex items-center mt-2 text-gray-300 font-['Hurme-Semi']">
				<div class="inline-flex w-6 h-6 fill-white bg-gray-700 items-center justify-center mr-2 rounded-xl shadow-2xl">
					<svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
				</div>
				{{ postData.attributes.author }}
			</div>
			<div class="inline-block mt-2 text-gray-400 font-['Hurme-Semi'] ml-2">—</div>

			<div class="inline-flex items-center mt-2 text-gray-300 font-['Hurme-Semi'] ml-2">
				<div class="inline-flex w-6 h-6 fill-white bg-gray-700 items-center justify-center mr-2 rounded-xl shadow-2xl">
					<svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>
				</div>
				{{ new Date(postData.attributes.publishedAt).toLocaleString() }}
			</div>
		</div>


		<img alt="Cover" class="object-cover w-full h-[37vh] object-top	shadow-2xl rounded-xl" :src="'https://strapi.noel-schmidt.de'+postData.attributes.cover.data.attributes.formats.large.url">

		<div class="mt-5 text-gray-300 font-['Hurme-Regular']" v-html="postData.attributes.content"></div>

		<div class="mt-6">
			<div class="inline-block bg-blue-400 py-0.5 text-white font-['Hurme-Semi'] px-3 shadow-2xl rounded-xl mr-1" v-for="keyword in postData.attributes.keywords.split(',')">
				{{ keyword }}
			</div>
		</div>

		<social-media/>
	</div>
</template>

<script lang="ts" setup>
const { find } = useStrapi4();
const route = useRoute()
const router = useRouter();

let postData: PostData;

try {
	const { data: data } = await find<any>(`blogs/${route.params.id}?populate=*`);
	postData = data;

	useHead({
		htmlAttrs: {
			class: "bg-gray-800"
		},

		meta: [
			{ name: "description", content: postData.attributes.short_text },
			{ name: "keywords", content: postData.attributes.keywords.split(",") },
		]
	});
} catch (err) {
	router.push("/")
}

</script>

<style lang="scss">
a {
	color: rgb(96 165 250 / var(--tw-bg-opacity));
	font-family: "Hurme-Semi";

	&:hover {
		color: rgba(96, 165, 250, 0.84);
	}
}
</style>
