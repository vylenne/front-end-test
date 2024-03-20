<script setup lang="ts">
interface ApiRequestViewManagerProps {
  isError: boolean
  isClientSideLoading: boolean
}
const { isError, isClientSideLoading } = defineProps<ApiRequestViewManagerProps>()
</script>

<template>
  <!-- clientSide loading view -->
  <div v-if="isClientSideLoading">
    Loading...
  </div>
  <!--  request error view -->
  <div v-if="isError">
    Sorry. There is an error on our server :-(
  </div>
  <!--  success view slot -->
  <slot></slot>
</template>

<style scoped></style>
