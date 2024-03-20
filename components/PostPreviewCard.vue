<script setup lang="ts">
import type { PostDataType } from "~/types"

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

    <NuxtImg :src="post.image" class="rounded" />
    <h4 class="text-2xl font-semibold mt-6">{{ post.title }}</h4>
    <p class="my-2">{{ post.excerpt }}</p>

    <div class="flex items-center justify-between mt-4">
      <NuxtLink class="text-blue-600 no-underline flex items-center gap-1 hover:underline"
        to="/posts/{{post.id}}">
        Read more
        <IconsArrowRightIcon />
      </NuxtLink>
    </div>
  </div>
</template>
