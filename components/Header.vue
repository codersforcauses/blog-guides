<template>
  <header
    class="inset-x-0 py-3 bg-primary text-secondary"
    :class="{ 'fixed top-0': $nuxt.$route.name === 'index' }"
  >
    <div class="container flex items-center justify-between px-3 mx-auto">
      <nuxt-link
        to="/"
        class="px-1 py-2 -my-2 -mr-3 font-mono text-xl font-black no-underline select-none text-secondary hover:bg-secondary hover:text-primary md:mr-12 focus:outline-none focus:bg-secondary focus:text-primary"
      >
        cfc
      </nuxt-link>
      <div class="flex items-center justify-between w-24 h-full sm:w-72">
        <button
          :title="`Switch to ${toggleHeading} mode`"
          class="mr-4 relative flex items-center justify-center h-10 p-1.5 w-10 focus:outline-none focus:ring focus:ring-inset focus:ring-accent"
          @click="$colorMode.preference = toggleHeading"
        >
          <transition name="fade">
            <span
              v-if="$colorMode.preference === 'light'"
              key="dark"
              class="absolute material-icons-sharp"
            >
              dark_mode
            </span>
            <span
              v-else
              key="light"
              class="absolute material-icons-sharp"
            >
              light_mode
            </span>
          </transition>
        </button>
        <autocomplete />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    toggleHeading() {
      return this.$colorMode.preference === 'light' ? 'dark' : 'light'
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
