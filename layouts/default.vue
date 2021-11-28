<template>
  <div class="relative min-h-screen md:flex">
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
        md:justify-between
        min-h-screen
      "
      :class="active ? '' : '-translate-x-full'"
    >
      <div></div>
      <button
        class="focus:outline-none flex justify-end"
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
      <div>
        <!-- image -->
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

        <!-- nav -->
        <scrollactive class="my-nav" active-class="active">
          <a
            href="#about"
            class="nav-link scrollactive-item"
            @click="active = !active"
          >
            {{ $t('links.about') }}
          </a>
          <a
            href="#education"
            class="nav-link scrollactive-item"
            @click="active = !active"
          >
            {{ $t('links.education') }}
          </a>
          <a
            href="#experience"
            class="nav-link scrollactive-item"
            @click="active = !active"
          >
            {{ $t('links.experience') }}
          </a>
          <a
            href="#skills"
            class="nav-link scrollactive-item"
            @click="active = !active"
          >
            {{ $t('links.skills') }}
          </a>
          <a
            href="#projects"
            class="nav-link scrollactive-item"
            @click="active = !active"
          >
            {{ $t('links.projects') }}
          </a>
        </scrollactive>
      </div>

      <!-- Langswitch -->

      <div>
        <Lang />
        <div class="flex flex-row justify-center">
          <nuxt-link
            :to="{ path: localePath('privacy') }"
            class="nav-link"
            @click="active = !active"
          >
            {{ $t('links.privacy') }}
          </nuxt-link>
          <nuxt-link
            :to="{ path: localePath('legal-notice') }"
            class="nav-link"
            @click="active = !active"
          >
            {{ $t('links.legal') }}
          </nuxt-link>
        </div>
      </div>
    </div>

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
