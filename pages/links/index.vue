<template>
  <section class="cv-section">
    <h1 class="mt-8 mb-4">Deutsch</h1>
    <Link
      v-for="(link, i) in links.de"
      :key="i"
      classes="link-primary"
      :href="link.href"
    >
      {{ link.text }}</Link
    >
    <h1 class="mt-16 mb-4">English</h1>
    <Link
      v-for="(link, i) in links.en"
      :key="i"
      classes="link-secondary"
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
      links: {
        de: [
          {
            href: 'https://storyways.app/de',
            text: 'Storyways - App für Interactive Geschichten',
          },
          {
            href: 'https://coldcasedetectives.de',
            text: 'Cold Case Detectives - Krimispiel',
          },
          {
            href: 'https://mordbeitisch.de',
            text: 'MORD bei Tisch - Krimidinner',
          },
          {
            href: 'https://fictionic.com/de',
            text: 'Fictionic - Entertainment company',
          },
        ],
        en: [
          {
            href: 'https://storyways.app',
            text: 'Storyways - App for interactive stories',
          },
          {
            href: 'https://fictionic.com/',
            text: 'Fictionic - Entertainment company',
          },
          {
            href: 'https://mallle.github.io/seasons/',
            text: 'Seasons Webapp - Get the dates for the 4 seasons of your menstrual cycle and download them as .ics files to your calendar',
          },
          {
            href: 'https://github.com/mallle/100-days-of-code',
            text: '100 days of code log - learning Flutter and Dart',
          },
        ],
      },
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
