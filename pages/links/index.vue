<template>
  <section class="cv-section">
    <Link
      v-for="(link, i) in links"
      :key="i"
      :classes="
        link.lang === 'de'
          ? 'links-link links-link-de'
          : 'links-link links-link-en'
      "
      :href="link.href"
    >
      {{ link.text }}</Link
    >
  </section>
</template>

<script>
export default {
  layout: 'slim',
  data() {
    return {
      links: [
        {
          href: 'https://storyways.app/de',
          text: 'Storyways - App für Interactive Geschichten (DE)',
          lang: 'de',
        },
        {
          href: 'https://storyways.app',
          text: 'Storyways - App for interactive stories (EN)',
          lang: 'en',
        },
        {
          href: 'https://coldcasedetectices.de',
          text: 'Cold Case Detectives - Krimispiel (DE)',
          lang: 'de',
        },
        {
          href: 'https://fictionic.com/de',
          text: 'Fictionic (DE)',
          lang: 'de',
        },
        {
          href: 'https://fictionic.com/',
          text: 'Fictionic (EN)',
          lang: 'en',
        },
      ],
    }
  },
  head() {
    return {
      titleTemplate: (titleChunk) => {
        // If undefined or blank then we don't need the hyphen
        return titleChunk
          ? `${titleChunk} ${this.$t('metadata.links')}`
          : this.$t('metadata.links')
      },
    }
  },
}
</script>

<style>
.links-link {
  @apply cursor-pointer break-words rounded-md p-4 my-4 text-center;
  @apply text-white !important;
}
.links-link-en {
  @apply bg-blue-200 md:hover:bg-purple-300;
}

.links-link-de {
  @apply bg-purple-300 md:hover:bg-blue-200;
}
</style>
