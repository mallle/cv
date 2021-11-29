<template>
  <div class="relative min-h-screen md:flex">
    <Navigation>
      <!-- nav -->
      <template #links>
        <scrollactive class="my-nav" active-class="active">
          <a
            v-for="(link, i) in $t('nav.default')"
            :key="i"
            :href="`${link.anchor}`"
            class="nav-link scrollactive-item"
            @click="active = !active"
          >
            {{ link.text }}
          </a>
        </scrollactive>
      </template>

      <!-- Langswitch -->
      <template #langswitch>
        <Lang />
      </template>
    </Navigation>

    <!-- content -->
    <div class="flex-1 md:ml-72">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    }
  },
}
</script>

<style>
body {
  @apply font-sans;
}

h1 {
  @apply text-4xl md:text-7xl font-bold pb-3 uppercase tracking-widest font-mono;
}

h3 {
  @apply text-3xl md:text-6xl font-bold pb-3 uppercase tracking-widest font-mono;
}

h1:after,
h3:after {
  content: '\A';
  @apply bg-gradient-to-r from-yellow-100 via-blue-200 to-purple-300 h-2 w-4;
  @apply flex h-1 w-64;
}

h4 {
  @apply text-xl md:text-2xl font-bold pb-3 pt-6;
}

.nav-link {
  @apply block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-400 text-white cursor-pointer;
}
.nav-link.active {
  @apply bg-purple-400 cursor-pointer;
}

.cv-section {
  @apply min-h-screen px-4 py-6 md:p-8 max-w-6xl mx-auto flex flex-col justify-center;
}
</style>
