<template>
  <div class="relative min-h-screen md:flex">
    <!-- mobile menu bar -->
    <div
      class="
        bg-gradient-to-l
        from-purple-400
        via-pink-500
        to-red-500
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
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
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
        from-purple-400
        via-pink-500
        to-red-500
        text-blue-100
        w-64
        md:w-72
        space-y-6
        py-7
        px-2
        absolute
        inset-y-0
        left-0
        transform
        md:fixed md:translate-x-0
        transition
        duration-300
        ease-in-out
        flex flex-col
        text-center
        z-50
        md:justify-between
        max-h-screen
      "
      :class="active ? '' : '-translate-x-full'"
    >
      <div></div>
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
            src="/malene-2x.jpg"
          />
        </a>

        <!-- nav -->
        <scrollactive class="my-nav" active-class="active">
          <a href="#about" class="nav-link scrollactive-item">
            {{ $t('links.about') }}
          </a>
          <a href="#education" class="nav-link scrollactive-item">
            {{ $t('links.education') }}
          </a>
          <a href="#experience" class="nav-link scrollactive-item">
            {{ $t('links.experience') }}
          </a>
          <a href="#skills" class="nav-link scrollactive-item">
            {{ $t('links.skills') }}
          </a>
          <a href="#projects" class="nav-link scrollactive-item">
            {{ $t('links.projects') }}
          </a>
        </scrollactive>
      </div>

      <!-- Langswitch -->
      <Lang />
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
  @apply bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-2 w-4;
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

.link {
  @apply text-purple-400  hover:text-pink-500 cursor-pointer;
}
</style>
