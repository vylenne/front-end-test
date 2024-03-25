<script setup lang="ts">
const route = useRoute();
const { data, error, pending } = useFetch(`/api/posts/${route.params.slug}`, {
  transform: (post) => {
    let content = post?.content;
    if (content) {
      content = content.substring(content.indexOf('<img'))
      content = content.substring(content.indexOf('>') + 1)
    } else {
      content = '';
    }
    return { ...post, content }
  },
})

watch(error, () => {
  console.log(error)
})
</script>

<template>
  <div class="container mx-auto py-10">
    <CommonsApiRequestViewManager :is-client-side-loading="!!pending"
      :is-error="!!error && error?.statusCode !== 404">
      <PostView v-if="!error" :data="data" />
      <PostView404 v-else />
    </CommonsApiRequestViewManager>
  </div>
</template>
