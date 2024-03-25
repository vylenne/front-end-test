<script setup lang="ts">
import { BASE_URL, type PostDataType } from "~/types"

interface PostPreviewCardProps {
  post: PostDataType
}

const { post } = defineProps<PostPreviewCardProps>()

const dateOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
}
</script>

<template>
  <div class="border border-gray-200 p-4 rounded-xl hover:bg-blue-50">
    <div class="flex items-center justify-between mb-2 text-sm">
      <span class="py-0.5 px-2 bg-blue-600 text-white rounded-full">Article</span>
      <span class="text-gray-600">Published
        <span>{{ new Date(post.publishedAt).toLocaleDateString('en', dateOptions) }}</span>
      </span>
    </div>

    <div class="h-56 overflow-hidden rounded">
      <NuxtImg :src="post.image" class="h-auto w-auto" loading="lazy" :alt="post.image" />
    </div>
    <h4 class="text-2xl font-semibold mt-6">{{ post.title }}</h4>
    <p class="my-2">{{ post.excerpt }}</p>

    <div class="flex items-center justify-between mt-4">
      <div class="flex items-center gap-2">
        <div class="overflow-hidden rounded-full h-10 w-10">
          <NuxtImg :src="post.user.avatar" class="h-auto w-auto" loading="lazy" format="webp" />
        </div>
        <span>{{ post.user.firstName }} {{ post.user.lastName }}</span>
      </div>
      <a class="text-blue-600 no-underline flex items-center gap-1 hover:underline"
        :href="`${BASE_URL}/posts/${post.id}`">
        Read more
        <IconsArrowRightIcon />
      </a>
    </div>
  </div>
</template>
