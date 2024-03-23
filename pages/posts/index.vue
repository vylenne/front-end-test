<script setup lang="ts">
import type { PostDataType, PostSortingDirection } from '~/types.ts'

const router = useRouter()
const route = useRoute()
const DEFAULT_SORTING: PostSortingDirection = 'newestFirst'

// add default query param without page reloading
onMounted(() => {
  if (!route?.query?.sort && !process.server) {
    history.replaceState({}, '', `${route?.path}?sort=${DEFAULT_SORTING}`)
  }
})

const pageNumber = ref(1)
const POSTS_CHUNK_COUNT = 20

const { data: posts, error, pending, refresh } = await useAsyncData<PostDataType[]>(`posts-${pageNumber.value}`, async () => {
  return await $fetch('/api/posts', {
    query: {
      limit: POSTS_CHUNK_COUNT,
      offset: pageNumber.value * POSTS_CHUNK_COUNT,
      include: 'user',
      order: route?.query?.sort || DEFAULT_SORTING,
      select: "id,title,content,excerpt,publishedAt,image,content,user.firstName, user.lastName, user.avatar, user.email",
    }
  })
})

const onNextPage = () => {
  pageNumber.value = pageNumber.value + 1;
  refresh()
}

const onSortChange = (direction: PostSortingDirection) => {
  router.push(`${route?.path}?sort=${direction}`)
  refresh()
}

</script>

<template>
  <div class="container mx-auto pt-4 pb-10">
    <h1 class="text-3xl text-center font-semibold">Posts</h1>
    <p class="w-2/3 mx-auto text-center text-gray-500">There are many variations of passages of
      Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
      humour, or randomised words which don't look even slightly believable.</p>
    <PostSortingPanel :current-direction="route?.query?.sort || DEFAULT_SORTING"
      @sort-change="onSortChange" />
    <CommonsApiRequestViewManager :is-error="!!error" :is-client-side-loading="pending">
      <!--Posts preview container-->
      <div v-if="!!posts?.length">
        <!-- post preview cars component -->
        <div class="grid grid-cols-2 gap-6 mt-10">
          <PostPreviewCard v-for="post in posts" :key="post.id" :post="post" />
        </div>
      </div>
      <!-- empty state view -->
      <PostPreviewListEmptyView v-else />
    </CommonsApiRequestViewManager>
  </div>
</template>
