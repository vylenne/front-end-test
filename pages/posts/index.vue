<script setup lang="ts">
import type { PostDataType, PostSortingDirection } from '~/types.ts'

const router = useRouter();
const route = useRoute();
const DEFAULT_SORTING: PostSortingDirection = 'newestFirst';
const sortingDir = ref<PostSortingDirection>(
  route?.query?.sort && (route?.query?.sort === 'newestFirst' || route?.query?.sort === 'oldestFirst') ?
    route.query.sort
    : DEFAULT_SORTING
)

// add default query param without page reloading
onMounted(() => {
  if (!route?.query?.sort && !process.server) {
    history.replaceState({}, '', `${route?.path}?sort=${DEFAULT_SORTING}`)
  }
})

const pageNumber = ref(1);
const POSTS_CHUNK_COUNT = 20;

// first server-side request
const { data, error, pending, refresh } = await useAsyncData<PostDataType[]>(
  `posts-${pageNumber.value}`,
  async () => {
    return await $fetch('/api/posts', {
      query: {
        limit: POSTS_CHUNK_COUNT,
        offset: pageNumber.value * POSTS_CHUNK_COUNT,
        include: 'user',
        order: sortingDir.value,
        select: "id,title,excerpt,image,publishedAt,user.firstName, user.lastName, user.avatar, user.email",
      },
    })
  })

const posts = ref<PostDataType[]>(data.value || []);
watch(data, () => {
  posts.value = data.value || [];
})

// next page loading request
const loadMore = async () => {
  pageNumber.value++;
  await $fetch('/api/posts', {
    query: {
      limit: POSTS_CHUNK_COUNT,
      offset: pageNumber.value * POSTS_CHUNK_COUNT,
      include: 'user',
      order: sortingDir.value,
      select: "id,title,content,excerpt,publishedAt,image,content,user.firstName, user.lastName, user.avatar, user.email",
    },
    onResponse(context) {
      posts.value = [...posts.value, ...context.response._data]
    },
  })
}

const onSortChange = (direction: PostSortingDirection) => {
  sortingDir.value = direction;
  pageNumber.value = 1;
  router.push(`${route?.path}?sort=${sortingDir.value}`);
  window.scrollTo({ top: 0, left: 0 })
  refresh();
}

</script>

<template>
  <div class="container mx-auto py-10">
    <div class="sticky top-0 bg-white pb-2">
      <h1 class="text-3xl text-center font-semibold">Posts</h1>
      <p class="w-2/3 mx-auto text-center text-gray-500">There are many variations of passages of
        Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
        humour, or randomised words which don't look even slightly believable.
      </p>
      <PostSortingPanel :current-direction="sortingDir" @sort-change="onSortChange" />
    </div>
    <CommonsApiRequestViewManager :is-error="!!error" :is-client-side-loading="pending">
      <ClientOnly>
        <InfiniteScroller :posts="posts" :on-last-item-arrive="loadMore" />
      </ClientOnly>
    </CommonsApiRequestViewManager>
  </div>
</template>
