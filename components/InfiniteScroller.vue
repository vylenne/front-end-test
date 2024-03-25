<script setup lang="ts">
import type { PostDataType } from "~/types";

interface InfiniteScrollerProps {
  posts: PostDataType[];
  onLastItemArrive: () => void;
}

const { posts, onLastItemArrive } = defineProps<InfiniteScrollerProps>()
const loader = ref(null);
const observer = ref<IntersectionObserver | null>(null);

const setupObserver = (observerRef: any) => {
  if (observerRef && !observerRef?.value) {
    observerRef.value = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onLastItemArrive();
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (loader.value) {
      observerRef.value.observe(loader.value);
    }
  }
}

onMounted(() => setupObserver(observer));
onUnmounted(() => {
  if (observer?.value && loader?.value) {
    observer.value.unobserve(loader.value);
  }
})

</script>

<template>
  <!--Posts preview container-->
  <div v-if="!!posts?.length">
    <!-- post preview cars component -->
    <div class="grid grid-cols-2 gap-6 mt-10">
      <PostPreviewCard v-for="post in posts" :key="post.id" :post="post" />
      <div ref="loader">
        <IconsLoader class="mx-auto" />
      </div>
    </div>
  </div>
  <!-- empty state view -->
  <PostPreviewListEmptyView v-else />
</template>
