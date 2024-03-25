<script setup lang="ts">
import type { PostDataType } from "~/types";

interface PostViewProps {
  data: PostDataType
}

const { data } = defineProps<PostViewProps>()

useHead({
  title: data.title,
  meta: [
    {
      name: 'description',
      content: data.excerpt
    },
  ],
});

const dateOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
}

</script>

<template>
  <div>
    <NuxtLink class="text-blue-600 no-underline p-2 hover:underline hover:bg-blue-100 rounded"
      to="/posts">
      Back to posts
    </NuxtLink>
    <div class="flex items-center justify-between">
      <div>
        <h1 class="mt-4 text-4xl">{{ data.title }}</h1>
        <span class="text-sm text-gray-600">{{ new Date(data.publishedAt).toLocaleDateString('en',
          dateOptions) }}</span>
      </div>
      <div class="flex items-center gap-2 my-2">
        <div class="overflow-hidden rounded-full h-10 w-10">
          <NuxtImg :src="data.user.avatar" :alt="data.user.avatar" class="h-auto w-auto"
            loading="lazy" format="webp" />
        </div>
        <div>
          <p>{{ data.user.firstName }} {{ data.user.lastName }}</p>
          <p class="text-sm text-gray-600">{{ data.user.email }}</p>
        </div>
      </div>
    </div>

    <p class="text-gray-500 mt-2">{{ data?.excerpt }}</p>
    <div class="h-80 overflow-hidden rounded my-4 flex items-center">
      <NuxtImg v-if="!!data.image" :src="data.image" :alt="data.image" loading="lazy" format="webp"
        class="w-full" />
    </div>
    <div v-html="data.content" class="content" />
  </div>
</template>

<style scoped>
.content:deep(p) {
  @apply text-gray-900;
}

.content:deep(pre) {
  @apply bg-gray-600 text-gray-100 rounded p-2 my-2 text-sm;
}

.content:deep(h2) {
  @apply text-3xl mt-4 mb-2;
}

.content:deep(ul) {
  @apply space-y-1 text-gray-700 list-disc list-inside mb-2;
}

.content:deep(ol) {
  @apply space-y-1 text-blue-700 list-decimal list-inside mb-2;
}
</style>
