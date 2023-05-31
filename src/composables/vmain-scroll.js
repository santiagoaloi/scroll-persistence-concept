import { useScroll } from '@vueuse/core'

export const useVmainScroll = (el) => {
  const route = useRoute()
  const scrollPosition = reactive({ y: 0, isScrolling: null })

  onMounted(() => {
    const appStore = useAppStore()
    const VMain = el.value.$el.querySelector('.v-main__scroller')

    if (VMain) {
      const { y, isScrolling } = useScroll(VMain)

      // Assign initial scroll position from the app store
      y.value = appStore.scrollPosition.vmain[route.name]
      appStore.scrollPosition.y = y
      scrollPosition.y = y

      // Watch for changes in the scroll state
      watch(
        () => isScrolling.value,
        (isScrolling) => {
          scrollPosition.isScrolling = isScrolling

          if (!isScrolling) {
            // Update the scroll position in the app store when scrolling stops
            appStore.scrollPosition.vmain[route.name] = y.value
          }
        }
      )

      // Watch for changes in the route name
      watch(
        () => route.name,
        (route) => {
          // Use setTimeout to defer the value assignment until the next tick of the event loop
          setTimeout(() => {
            // This code will execute after Vue has finished rendering and updating the DOM
            // and any changes triggered by the route change are likely already applied

            // Assign the scroll position value to y.value
            y.value = appStore.scrollPosition.vmain[route]
          }, 0) // A timeout value of 0 ensures the callback is executed as soon as possible
        },
        { immediate: true }
      )

      // Another watch for changes in the route name
      watch(
        () => route.name,
        (route) => {
          // Assign the scroll position value to y.value
          y.value = appStore.scrollPosition.vmain[route]
        },
        { immediate: true }
      )
    }
  })

  return toRefs(scrollPosition)
}
