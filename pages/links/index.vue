<template>
  <section class="cv-section">
    <Link classes="links-link-de" href="https://storyways.app/de"
      >Storyways (DE)<br />
      App für Interactive Geschichten</Link
    >
    <Link classes="links-link-en" href="https://storyways.app"
      >Storyways (EN)<br />App for interactive stories</Link
    >
    <Link classes="links-link-de" href="https://coldcasedetectices.de"
      >Cold Case Detectives (DE)<br />
      Krimispiel</Link
    >
    <Link classes="links-link-de" href="https://fictionic.com/de"
      >Fictionic UG (DE)</Link
    >
    <Link classes="links-link-en" href="https://fictionic.com"
      >Fictionic UG (EN)</Link
    >
  </section>
</template>

<script>
export default {
  layout: 'slim',
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
.links-link-en {
  @apply bg-blue-200 md:hover:bg-purple-300
        text-gray-100 cursor-pointer break-words rounded-md p-4 my-4 text-center text-white
        md:hover:text-white;
}

.links-link-de {
  @apply bg-purple-300 md:hover:bg-blue-200 text-white md:hover:text-white cursor-pointer break-words rounded-md p-4 my-4 text-center;
}
</style>
