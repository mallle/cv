<template>
  <div class="relative min-h-screen md:flex">
    <Navigation>
      <!-- nav -->
      <template #links>
        <nuxt-link
          v-for="(link, i) in $t('nav.slim')"
          :key="i"
          :to="{ path: localePath(link.to) }"
          class="nav-link"
          @click="active = !active"
        >
          {{ link.text }}
        </nuxt-link>
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
