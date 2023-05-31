<template>
  <VAppBar :title="`isScrolling: ${title}`" color="appbar-background" elevation="15" height="62">
    <GAppBarMenuRight />
  </VAppBar>
</template>
<script setup>
defineProps({
  title: {
    type: Boolean
  }
})
</script>
