<template>
  <Link :href="href" :classes="`flex`">
    <div
      :class="colors"
      class="
        w-full
        border-4
        text-blue-100
        rounded-lg
        p-8
        flex flex-col
        justify-start
        transition
        duration-500
        ease-in-out
        transform
        md:hover:scale-95
        border-purple-400
        hover:bg-purple-50
      "
    >
      <div class="flex flex-col items-center">
        <p class="text-2xl text-gray-700 font-bold mb-4">
          {{ headline }}
        </p>

        <div class="mb-8">
          <NuxtImg
            class="object-center object-cover rounded"
            :src="image"
            format="webp"
            :alt="imageAlt"
            width="400"
            height="300"
          />
        </div>
      </div>
      <div>
        <p
          class="
            text-base text-gray-500
            font-normal
            italic
            text-left
            mb-2
            self-start
          "
        >
          <strong>Stack/Tools:</strong> {{ stack }}
        </p>
        <p class="text-lg text-gray-400 font-normal self-start">{{ info }}</p>
      </div>
      <!-- <Link :href="href" classes="md:hidden">
        {{ $t('projects.linkToProject') }}
      </Link> -->
    </div>
  </Link>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: '',
      required: false,
    },
    headline: {
      type: String,
      default: '',
      required: false,
    },
    info: {
      type: String,
      default: '',
      required: false,
    },
    href: {
      type: String,
      default: '',
      required: false,
    },
    imageAlt: {
      type: String,
      default: '',
      required: false,
    },
    stack: {
      type: String,
      default: '',
      required: false,
    },
    borderColor: {
      type: String,
      default: '',
      required: false,
    },
    hoverColor: {
      type: String,
      default: '',
      required: false,
    },
  },
  computed: {
    colors() {
      return `border-${this.borderColor}-400 hover:bg-${this.borderColor}-50`
    },
  },
}
</script>
