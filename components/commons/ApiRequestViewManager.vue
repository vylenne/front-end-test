<script setup lang="ts">
interface ApiRequestViewManagerProps {
  isError: boolean
  isClientSideLoading: boolean
}
const { isError, isClientSideLoading } = defineProps<ApiRequestViewManagerProps>()
</script>

<template>
  <!-- clientSide loading view -->
  <div v-if="isClientSideLoading" class="text-center">
    Loading...
  </div>
  <!--  request error view -->
  <div v-if="isError" class="text-center">
    Sorry. There is an error on our server :-(
  </div>
  <!--  success view slot -->
  <slot></slot>
</template>
