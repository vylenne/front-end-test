<script setup lang="ts">
interface ApiRequestViewManagerProps {
  isError: boolean
  isClientSideLoading: boolean
}
const { isError, isClientSideLoading } = defineProps<ApiRequestViewManagerProps>()
</script>

<template>
  <!-- clientSide loading view -->
  <IconsLoader v-if="isClientSideLoading" class="mx-auto my-2" />
  <!--  request error view -->
  <div v-if="isError" class="bg-red-50 border border-red-200 p-2 rounded text-center text-xl my-2">
    <span class="text-red-500">Sorry. There is an error on our server!</span>
  </div>
  <!--  success view slot -->
  <slot></slot>
</template>
