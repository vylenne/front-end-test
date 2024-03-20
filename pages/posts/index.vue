<script setup lang="ts">
import type { PostDataType } from '~/types.ts'
import { useFetch } from '#app'
import ApiRequestViewManager from '~/components/commons/ApiRequestViewManager.vue'

const { data: posts, error, pending } = await useFetch<PostDataType[]>('/api/posts', {
  query: {
    limit: 20,
    offset: 40,
    include: 'user',
    order: 'oldestFirst',
    select: "id,title,content,excerpt,publishedAt,image,content,user.firstName, user.lastName, user.avatar, user.email",
  }
})

</script>

<template>
  <div class="container mx-auto pt-4 pb-10">
    <ApiRequestViewManager :is-error="!!error" :is-client-side-loading="pending">
      <!--Posts preview container-->
      <div v-if="!!posts?.length">
        <h1 class="text-3xl text-center font-semibold">Posts</h1>
        <p class="w-2/3 mx-auto text-center text-gray-500">There are many variations of passages of
          Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.</p>
        <!-- post preview cars component -->
        <div class="grid grid-cols-2 gap-6 mt-10">
          <PostPreviewCard v-for="post in posts" :key="post.id" :post="post" />
        </div>
      </div>
      <!-- empty state view -->
      <PostPreviewListEmptyView v-else />
    </ApiRequestViewManager>
  </div>
</template>
