<script setup lang="ts">

import type { PostSortingDirection } from "~/types"

interface PostSortingPanelProps {
  currentDirection: PostSortingDirection,
}

interface PostSortingPanelEmit {
  (e: 'sortChange', direction: PostSortingDirection): void
}

const { currentDirection } = defineProps<PostSortingPanelProps>()
defineEmits<PostSortingPanelEmit>()

</script>

<template>
  <div class="flex gap-2">
    <button class="text-blue-900 p-2 rounded"
            :class="currentDirection === 'newestFirst' ? 'bg-blue-300' : 'bg-blue-100'"
            @click="$emit('sortChange', 'newestFirst')">Newest</button>
    <button class="text-blue-900 p-2 rounded"
            :class="currentDirection === 'oldestFirst' ? 'bg-blue-300' : 'bg-blue-100'"
            @click="$emit('sortChange', 'oldestFirst')">Oldest</button>
  </div>
</template>
