<template>
  <section class="cv-section">
    <Link
      v-for="(link, i) in links"
      :key="i"
      :classes="link.lang === 'de' ? 'link-primary' : 'link-secondary'"
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

<style></style>
