<template>
  <div>
    <About />
    <Education />
    <Experience />
    <Skills />
    <Projects />
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: (titleChunk) => {
        // If undefined or blank then we don't need the hyphen
        return titleChunk
          ? `${titleChunk} - ${this.$t('metadata.start')}`
          : this.$t('metadata.start')
      },
    }
  },
}
</script>
