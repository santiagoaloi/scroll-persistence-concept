<template>
  <VNavigationDrawer
    :rail="rail"
    color="drawer"
    elevation="7"
    expand-on-hover
    rail-width="55"
    width="260"
  >
    <VList nav>
      <div class="pa-2 mb-3 flex items-center justify-between">
        <RouterLink to="/">
          <VImg cover height="30" src="/company_logos/logo.svg" width="150">
            <template #placeholder>
              <div class="flex h-full items-center justify-center">
                <VProgressCircular color="grey-lighten-4" indeterminate />
              </div>
            </template>
          </VImg>
        </RouterLink>

        <div>
          <VIcon
            :icon="rail ? '$radioOff' : '$radioOn'"
            class="mt-n1 cursor-pointer"
            color="primary"
            size="small"
            @click="rail = !rail"
          />
        </div>
      </div>

      <VListItem
        :ripple="false"
        active-color="primary"
        prepend-icon="$mdiHomeOutline"
        title="Index"
        to="/"
      />
      <VListItem
        :ripple="false"
        active-color="primary"
        prepend-icon="$mdiHomeOutline"
        title="Playground"
        to="/playground"
      />
    </VList>

    <template #append>
      <VCard border>
        <VContainer>
          <h3>Scroll Position for {{ name }}</h3>
          <div>{{ scrollPosition.y }}</div>
        </VContainer>
      </VCard>
    </template>
  </VNavigationDrawer>
</template>

<script setup>
const rail = ref(false)

const { name } = toRefs(useRoute())
const { scrollPosition } = useAppStore()
</script>
