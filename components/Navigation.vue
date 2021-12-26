<template>
  <div>
    <!-- mobile menu bar -->
    <div
      class="
        w-full
        bg-gradient-to-l
        from-yellow-100
        via-blue-200
        to-purple-300
        text-gray-100
        flex
        justify-between
        md:hidden
      "
    >
      <!-- logo -->
      <a href="/" class="block p-4 font-bold">Malene Klit</a>

      <!-- mobile menu button -->
      <button
        class="mobile-menu-button p-4 focus:outline-none"
        @click.prevent="active = !active"
      >
        <svg
          class="h-5 w-8 text-blue-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- sidebar -->
    <div
      class="
        sidebar
        bg-gradient-to-b
        from-yellow-100
        via-blue-200
        to-purple-300
        w-full
        md:w-72
        space-y-6
        md:py-7
        px-2
        top-0
        left-0
        absolute
        transform
        md:fixed md:translate-x-0
        transition
        duration-300
        ease-in-out
        flex flex-col
        text-center
        z-50
        justify-between
        min-h-screen
      "
      :class="active ? '' : '-translate-x-full'"
    >
      <div class="mt-4 flex justify-end">
        <button
          v-if="active"
          class="focus:outline-none flex justify-end md:hidden"
          @click.prevent="active = !active"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-8 text-blue-300"
            fill="none"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div>
        <a
          href="#about"
          class="
            text-white
            flex flex-col
            items-center
            space-x-2
            px-4
            scrollactive-item
          "
        >
          <nuxt-img
            class="
              rounded-full
              w-32
              h-32
              md:h-42 md:w-42
              ring-8 ring-purple-400
              border-opacity-75
              mb-8
            "
            format="webp"
            src="/malene-illustration.png"
          />
        </a>
        <!-- links -->
        <slot :toogleSidebar="toogleSidebar"></slot>
      </div>
      <div class="pb-8 md:pb-0">
        <slot name="langswitch"></slot>

        <div class="flex flex-row justify-center">
          <nuxt-link
            v-for="(link, i) in $t('nav.footer')"
            :key="i"
            :to="{ path: localePath(link.to) }"
            class="nav-link"
            @click="toogleSidebar()"
          >
            {{ link.text }}
          </nuxt-link>
        </div>
      </div>
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
  methods: {
    toogleSidebar() {
      this.active = !this.active
    },
  },
}
</script>
