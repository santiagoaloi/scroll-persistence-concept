<template>
  <div>
    <GSnackbar />
    <LeftDrawer />
    <GAppBar :title="isScrolling" />
    <VMain ref="vmain" scrollable>
      <RouterView v-slot="{ Component }">
        <VContainer fluid>
          <VFadeTransition hide-on-leave>
            <Component :is="Component" />
          </VFadeTransition>
        </VContainer>
      </RouterView>
    </VMain>
  </div>
</template>
<script setup>
const vmain = ref(null)
const { y, isScrolling } = useVmainScroll(vmain)
</script>
