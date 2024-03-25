<script setup>
import { BASE_URL } from "~/types"
</script>

<template>
  <div class="text-center bg-red-50 border border-red-400 p-4 rounded">
    <p class="text-6xl font-semibold">404</p>
    <p class="text-2xl my-2">Sorry, there is no such post!</p>
    <NuxtLink class="text-blue-600 no-underline gap-1 mx-auto hover:underline" to="/posts">
      Back to posts
    </NuxtLink>
  </div>
</template>
